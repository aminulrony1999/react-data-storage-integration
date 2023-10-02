import React from 'react';
const Food = (props) => {
    const {menu1,price1} = props.food;
    return (
        <div>
            <h3>Order this Menu : {menu1}</h3>
            <small>Price of this Dish : {price1}</small>
        </div>
    );
};

export default Food;