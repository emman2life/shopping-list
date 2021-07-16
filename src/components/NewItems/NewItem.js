import './NewItem.css';
import ItemForm from './ItemForm';

const NewItem = (props) => {

const saveEnteredItemHandler = (enteredItemData)=>{
   const itemData = {
        ...enteredItemData,
        // // id: Math.random().toString()
    };
    props.onAddItem(itemData);
    
}

return <div>
    <ItemForm onSaveItemData={saveEnteredItemHandler} onCloseAddForm={props.onCloseAdd}/>
</div>
};
export default NewItem;