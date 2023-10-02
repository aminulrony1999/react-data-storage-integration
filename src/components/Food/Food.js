import React from 'react';
const Food = (props) => {
    const {menu,price,id} = props.food;
    const design = {
        border : '5px solid sandybrown',
        borderRadius : '10px',
        margin : '10px',
        padding : '10px'

    }
    function addToCart(id){
        console.log(`Item is added to cart, id number is ${id}`);
    }
    return (
        <div style = {design}>
            <h3>Order this Menu : {menu}</h3>
            <small>Price of this Dish : {price}</small>
            <p>It has id : {id}</p>
            <button onClick ={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Food;