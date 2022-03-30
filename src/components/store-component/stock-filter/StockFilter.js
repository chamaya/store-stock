import React from "react";
import "./StockFilter.css"

export const StockFilter = ({text, onTextChange, isChecked, onCheckChange}) => {
    return(
        <form>
            <input className="input-text" type="text" paceholder="Search..." value={text} onChange={onTextChange} />
            <span className="checkbox-text" > 
                <input type="checkbox" checked={isChecked} onChange={onCheckChange}/> 
                <p> Only Show Products in Stock </p>
            </span>

            

        </form>
    );
};