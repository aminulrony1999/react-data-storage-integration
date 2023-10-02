import React from 'react';
import Food from '../Food/Food';
const Foods = () => {
    const foods = [
        {id : '1', menu :"Panta Ilish" , price : "20$"},
        {id : '2', menu : "Chicken Biriyani", price : '15$'}
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