import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios('https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json')
            .then(({data}) => setMeals(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='menu-title'>Menu</h2>
            <div className='row'>
                {
                    meals.map(item =>
                        <div key={item.id} className='col-3'>

                            <div className='card'>
                                <Link to={`/meal/${item.id}`}>
                                    <img className='menu-img' src={item.image} width='150' height='150'/>
                                    <div className='card-title'>
                                        <h5  key={item.id}>{item.title}</h5>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Meals