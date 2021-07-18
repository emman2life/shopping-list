import { useEffect, useState } from 'react';
import './ItemForm.css'

const ItemForm = (props)=>{
const [inputName, setInputName] = useState('');
const [inputPrice, setInputPrice] = useState('');
const [validInput, setValidInput] = useState(false);

const nameChangeHandler = (event)=>{
 
        setInputName(event.target.value);
    }

const priceChangeHandler = (event) =>{
    setInputPrice(event.target.value);
}
useEffect(()=>{
    if(inputName.trim()>0 || inputPrice.trim()>0){
        setValidInput(true);
    }else{
        setValidInput(false);
    }

    if(+inputPrice<0)return;
},[inputPrice, inputName])

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
    setValidInput(false);
    setInputName('');
    setInputPrice('');

}

    return <div className="form-container">
  <button className="closeAdd" onClick={props.onCloseAddForm}>X</button>
  <form onSubmit={submitHandler}>
        <div className="new-item-wrapper">
          
        <div className="new-item-container">
            <div className="new-item-content">
                <label htmlFor="name">Name</label>
                <input type="text" 
                id="name" 
                value={inputName}
                onChange={nameChangeHandler}/>
            </div>
            <div className="new-item-content">
                <label htmlFor="price">Price</label>
                <input
                id="price" 
                type="number" 
                min="0.01" step="0.01"
                value={inputPrice} 
                onChange={priceChangeHandler}/>
            </div>
            
            <div className="add-item-button-container">
                 {validInput?<button type="submit" className="add-item btn">Add</button>:''}
             </div>
             </div>
       
        </div>
    </form>
    </div>
};
export default ItemForm;