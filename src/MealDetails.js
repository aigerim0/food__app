import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import axios from "axios";

const MealDetails = () => {
    const [mealDetails, setMealDetails] = useState({})
    const mealParams = useParams()
    useEffect(() => {
        axios('https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json')
            .then(({data}) => setMealDetails((data.find(item => item.id === mealParams.id))))
    }, [])
    return (
        <div>
            <img src={mealDetails.image} width='150'/>
           <h4> {mealDetails.title}</h4>
            <p>{mealDetails.description}</p>
            <span>Price:{mealDetails.price}$</span>
            <p>{mealDetails.inStock} </p>
        </div>
    )
}

export  default MealDetails