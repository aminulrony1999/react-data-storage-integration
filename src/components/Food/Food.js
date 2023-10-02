import React from 'react';
const Food = (props) => {
    const {menu,price,id} = props.food;
    return (
        <div>
            <h3>Order this Menu : {menu}</h3>
            <small>Price of this Dish : {price}</small>
            <p>It has id : {id}</p>
        </div>
    );
};

export default Food;