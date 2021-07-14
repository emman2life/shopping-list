
import './ShoppingList.css'
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = (props)=>{

    const status = props.viewStatus==='uncompleted'? true: false;
    const filteredList = props.items.filter((item)=>{
      
        return item.acquired===status;
    });
const itemUpdate = (item)=>{
    props.onComplete(item.id, item);
   
}
    const list = filteredList.map((item) =>(
        <ShoppingListItem
        key={item.id}
        name={item.name} 
        price={item.price}
        acquired={item.acquired}
        onUpdate={()=>{itemUpdate(item)}}/>
           ))
   return <div>
  {list}
    
   </div>

}
export default ShoppingList;