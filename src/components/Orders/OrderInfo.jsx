import React from 'react'
import date from "../../lib/date.js";

function OrderInfo({ order, setOrderModalShow, setSelectedOrder }) {

    const selectOrderFunc = () => {
        setOrderModalShow(true);
        setSelectedOrder(order);
    }

    const makeFood = (order) => {
        const food = [];
        order.foods.map(item => {
            return food.push(item.name);
        })

        let result = food.join(", ");
        if (result.length > 20) {
            result = result.slice(0, 20) + "...";
            console.log("make food result", result)
            return result
        }
        return result
    }

    return (
        <div className="orderInfo" onClick={selectOrderFunc}>
            <h4>Order Information</h4>
            <p>Foods: {makeFood(order)}</p>
            <p className="date">{date.getLocalDate(order.date)}</p>
            {/* <p>Price: {order.total}€</p> */}
            <p>{order.total}€</p>
        </div>
    )
}

export default OrderInfo
