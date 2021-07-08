import './ShoppingList.css'
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = (props)=>{

   return <div>
       {props.items.map((item) =>(
    <ShoppingListItem
    key={item.id}
    name={item.name} 
    price={item.price}/>
       ))}
    
   </div>

}
export default ShoppingList;