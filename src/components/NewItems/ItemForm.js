import { useState } from 'react';
import './ItemForm.css'

const ItemForm = (props)=>{
const [inputName, setInputName] = useState('');
const [inputPrice, setInputPrice] = useState('');

const nameChangeHandler = (event)=>{
        // setItemInput((prevState)=>{
        //    return {...prevState, name: event.target.value}
        // });
        setInputName(event.target.value);
    }

const priceChangeHandler = (event) =>{
    // setItemInput({...itemInput, price: event.target.value});
    setInputPrice(event.target.value);
}

const submitHandler = event =>{
    event.preventDefault();
    const itemEntered = {
        name: inputName,
        price: inputPrice,
        id: Math.random().toString(),
        imgUlr:'',
        acquired:false

    }
    props.onSaveItemData(itemEntered);
    setInputName('');
    setInputPrice('');

}

    return <div className="form-container">
  <button className="closeAdd" onClick={props.onCloseAdd}>X</button>
  <form onSubmit={submitHandler}>
        <div className="new-item-wrapper">
          
        <div className="new-item-container">
            <div className="new-item-content">
                <label>Name</label>
                <input type="text" id="name" value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-item-content">
                <label>Price</label>
                <input 
                type="number" 
                min="0.01" step="0.01"
                value={inputPrice} 
                onChange={priceChangeHandler}/>
            </div>
            
            <div className="add-item-button-container">
                 <button type="submit" className="add-item">Add item</button>
             </div>
             </div>
       
        </div>
    </form>
    </div>
};
export default ItemForm;