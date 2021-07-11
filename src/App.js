import './App.css';
import ShoppingList from './components/ShoppingList';
import logo from './assets/images/logo.png';
import { useEffect, useState } from 'react';
import NewItem from './components/NewItems/NewItem';
import ListFilter from './components/Filter/ListFilter'


function App() {
  const shoppingListItems = [
    {id:'i1', name: 'MALM', price: 449.99},
    {id:'i2', name: 'ATTA', price: 239.99},
    {id:'i3', name: 'BORD', price: 1299.99},
  ]

  const [sortBy, setSortBy] = useState('name');

  const sortByName = function(itemList){
      itemList.sort((a,b)=>{
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
       });

  }
      const sortedByPrice = (itemList)=>{
          itemList.sort((x,y)=>{
              return(x.price-y.price);
          });
      }
const listSorter = (list) => {
  sortBy === 'name' ? sortByName(list) : sortedByPrice(list);
  }
  
  // localStorage.setItem('list', JSON.stringify(shoppingListItems));

  // const localList = JSON.parse(localStorage.getItem('list'));
  listSorter(shoppingListItems);
  const [shoppingList, setShoppingList] = useState(shoppingListItems); 
/*
Update the sort name to be sort based on the button click value
*/
useEffect(()=>{
  setShoppingList(prevListItems=>{
    listSorter(prevListItems);
    const newList = [...prevListItems];
    return newList;
  });
},[sortBy]);
const sortByHandler = sortByString=>{

  setSortBy(sortByString);
  console.log(sortBy);

}
  const addItemHandler = item =>{
  // shoppingListItems.push(item);

  // setShoppingList(JSON.parse(localStorage.getItem('list')));
 
  setShoppingList((prevListItems)=>{
    const newList = [item, ...prevListItems];
    listSorter(newList);
    // localStorage.setItem('list', JSON.stringify(newList));
    return newList;
  });
  }; 



  return (
    
    <div className="App">

     <div className="page-wrapper">
      <header>
        <img src={logo} alt="Eika logo"></img>
      </header>
     
    <h1>Shopping List</h1>

    <ListFilter onSort={sortByHandler}/>
    <div className="list-wrapper">

    
   <ShoppingList items={shoppingList}/>

   
    </div>
   <NewItem onAddItem={addItemHandler}/>
    </div>
    </div>
  );

 
}

export default App;
