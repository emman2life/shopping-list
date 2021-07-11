import { useState } from 'react';
import './ShoppingList.css'
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = (props)=>{



    const list = props.items.map((item) =>(
        <ShoppingListItem
        key={item.id}
        name={item.name} 
        price={item.price}/>
           ))
   return <div>
  {list}
    
   </div>

}
export default ShoppingList;