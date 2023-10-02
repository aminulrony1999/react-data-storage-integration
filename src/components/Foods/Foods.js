import React from 'react';
import Food from '../Food/Food';
const Foods = () => {
    const foods = [
        {id : 'ilish', menu :"Panta Ilish" , price : "20$"},
        {id : 'biriyani', menu : "Chicken Biriyani", price : '15$'}
    ];
    return (
        <div>
            {
                foods.map(food => <Food food = {food} key = {food.id}></Food>)
            }
        </div>
    );
};

export default Foods;