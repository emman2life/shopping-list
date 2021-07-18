import './NewItem.css';
import ItemForm from './ItemForm';
import Wrapper from '../Helpers/Wrappers';

const NewItem = (props) => {

const saveEnteredItemHandler = (enteredItemData)=>{
   const itemData = {
        ...enteredItemData,
        // // id: Math.random().toString()
    };
    props.onAddItem(itemData);
    
}

return <Wrapper>
    <ItemForm onSaveItemData={saveEnteredItemHandler} onCloseAddForm={props.onCloseAdd}/>
</Wrapper>
};
export default NewItem;