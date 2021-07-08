import './App.css';
import ShoppingList from './components/ShoppingList';
import logo from './assets/images/logo.png';
import { useState } from 'react';
import NewItem from './components/NewItems/NewItem';
import ShoppingListItem from './components/ShoppingListItem';

function App() {
  const shoppingListItems = [
    {id:'i1', name: 'MALM', price: 449.99},
    {id:'i2', name: 'MATTA', price: 2239.99},
    {id:'i3', name: 'BORD', price: 1299.99},
  ]
  localStorage.setItem('list', JSON.stringify(shoppingListItems));

  const localList = JSON.parse(localStorage.getItem('list'));
  const [shoppingList, setShoppingList] = useState(localList);

  
  const addItemHandler = item =>{
  // shoppingListItems.push(item);

  // localStorage.setItem('list', JSON.stringify(shoppingListItems));

  // setShoppingList(JSON.parse(localStorage.getItem('list')));
 
  setShoppingList((prevListItems)=>{
    return [item, ...prevListItems];
  });
  }; 
  
  return (
    
    <div className="App">

     <div className="page-wrapper">
      <header>
        <img src={logo}></img>
      </header>
     
    <h1>Shopping List</h1>

    <div className="list-wrapper">

    
   <ShoppingList items={shoppingList}/>

   
    </div>
   <NewItem onAddItem={addItemHandler}/>
    </div>
    </div>
  );
}

export default App;
