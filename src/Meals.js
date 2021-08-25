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
            <div className='row'>
                {
                    meals.map(item =>
                        <div key={item.id} className='col-3'>

                          <Link   to={`/meal/${item.id}`}>
                              <img src={item.image} width='150' height='150'/>
                              <div key={item.id}>{item.title}</div>
                          </Link>

                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Meals