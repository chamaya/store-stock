import React, {useState} from 'react';
import { StockList } from '../../components/store-component/stock_list/StockList';
import { StockFilter } from '../../components/store-component/stock-filter/StockFilter';
import "./StoreContainer.css";

export const StoreContainer = ({storeItems}) => {
    //StockFilter = SearchBar + CheckBox
    //StockList = Contains List of Item Components in Mock Format --> Item = component that takes the space that the component belongs to

    const [text, setText] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <div className='store'>
            <StockFilter isChecked={isChecked} onCheckChange={(event) => setIsChecked(event.target.checked)} text={text} onTextChange={(event) => setText(event.target.value)}  /> 
            <StockList items={storeItems.filter(item => (isChecked && item.stocked || !isChecked) && item.name.includes(text))} />
        </div>
    );
};