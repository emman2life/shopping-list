import { useEffect, useState } from 'react';
import './ShoppingListItem.css';

function ShoppingListItem(props){

const [item, setItem] = useState(props);
const [acquire, setAcquire] = useState(props.acquired);

useEffect(()=>{
    setItem((prevState)=>{
        return{...prevState, acquired:acquire}
    })
},[]);

const acquireHandler = (shoppingItem)=> {
 
   setItem(shoppingItem);
   props.onUpdate(item);
    
}
    
    return (

        <div className="list-item">

            <input type="checkbox"
            checked={acquire}
            onChange={()=>{acquireHandler(item)}}
            className="acquired-button"
            />
          <p>{item.name}</p>
          <div className="item-price">
              <span>{item.price}</span>
              <span>:-</span>
              </div>
      </div>
    
    );
}
export default ShoppingListItem;