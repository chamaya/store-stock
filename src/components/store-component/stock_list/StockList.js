import React from "react";
import { Item } from "../item/Item";
import "./StockList.css";

export const StockList = ({items}) => {
    const list = []
    
    let currCat = ""
    for(const item of items){
        if(currCat !== item.category){
            list.push(<tr key={item.category}><th colSpan={2}>{item.category}</th></tr>);
            currCat = item.category;
        }
        list.push(<Item key={item.category + item.name} name = {item.name} cost = {item.price} isStocked={item.stocked} />)
    }

    return (
        <table className="stock-list">
            <thead>
                <tr className="name-price" >
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{list}</tbody>
            
        </table>
    );
};