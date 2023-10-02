import React from 'react';
import Food from '../Food/Food';
const Foods = () => {
    const foods = [
        {id : '1', menu1 :"Panta Ilish" , price1 : "20$"},
        {id : '2', menu2 : "Chicken Biriyani", price2 : '15$'}
    ];
    return (
        <div>
            {
                foods.map(food => <Food food = {food} ></Food>)
            }
        </div>
    );
};

export default Foods;