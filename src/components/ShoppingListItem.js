import { useState } from 'react';
import './ShoppingListItem.css'
function ShoppingListItem(props){

//   const [name, setName] = useState(props.name);
    return (
        <div className="list-item">
            <p>{props.name}</p>
            <div className="item-price">
                <span>{props.price}</span>
                <span>:-</span>
                </div>
        </div>
    );
}
export default ShoppingListItem;