import { useEffect, useState } from 'react';
import './ShoppingListItem.css';
import plus from '../assets/images/plus-icon/1x/outline_add_black_24dp.png'

function ShoppingListItem(props){

const [item, setItem] = useState(props);
const [acquire, setAcquire] = useState('');

useEffect(()=>{
    setItem((prevState)=>{
        return{...prevState, acquired:true}
    })
    console.log(item);
},[acquire]);

const acquireHandler = (event)=> {
       setAcquire(event.target.value);
    
}
    
    return (

        <div className="list-item">
        <button value="acquire"  className="acquired-button"
        onClick={acquireHandler}>
            <img src={plus}/></button>
          <p>{item.name}</p>
          <div className="item-price">
              <span>{item.price}</span>
              <span>:-</span>
              </div>
      </div>
    
    );
}
export default ShoppingListItem;