import React from "react";
import "./Item.css"

export const Item = ({name, cost, isStocked}) => {
    const styledName = isStocked ? <td>{name}</td> : <td style={{color: "red"}}>{name}</td>;
    return (
        <tr data-testid="item-unit-test" className="item line">
            {styledName}
            <td>{cost}</td>
        </tr>
    );
}