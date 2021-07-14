import './App.css';
import ShoppingList from './components/ShoppingList';
import logo from './assets/images/logo.png';
import { useEffect, useState } from 'react';
import NewItem from './components/NewItems/NewItem';
import ListFilter from './components/Filter/ListFilter'


function App() {
  

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
const sortList = (list) => {
  sortBy === 'name' ? sortByName(list) : sortedByPrice(list);
  }
  

  const storedList = localStorage.getItem('list');

  const localList = storedList ? JSON.parse(storedList):[];



  const [shoppingList, setShoppingList] = useState(localList); 

  const [listToView, setListToView]= useState('completed');

  const [showForm, setShowForm]= useState(false);

  if(shoppingList.length>0)
  sortList(shoppingList)
/*
Update the sort name to be sort based on the button click value
*/
useEffect(()=>{
 localStorage.setItem('list', JSON.stringify(shoppingList));
},[shoppingList]);


useEffect(()=>{
  setShoppingList(prevListItems=>{
    sortList(prevListItems);
    const newList = [...prevListItems];
    return newList;
  });
},[sortBy]);
const sortByHandler = sortByString=>{

  setSortBy(sortByString);
  console.log(sortBy);

}
const updateList = (id, item) => {
  const index = shoppingList.findIndex(item=>item.id===id);
  const shopItem = {...item, acquired:true}
  shoppingList[index] = shopItem;
  setShoppingList(prevListItems=>{
    sortList(prevListItems);
    const newList = [...prevListItems];
    return newList;
  });

  
}
  const addItemHandler = item =>{
  setShoppingList((prevListItems)=>{
    const newList = [item, ...prevListItems];
    sortList(newList);
    return newList;
  });
  setShowForm(false);
  }; 
  const showUncompleted = ()=>{
    setListToView('completed');
  }
  const showCompleted = ()=>{
    setListToView('uncompleted');
  }
  const showAddForm = ()=>{
    setShowForm(true);
  }
  const closeAddForm = ()=>{
    console.log('close');
    setShowForm(false);
  }

const welcomeText = <p>
  Welcome to EIKA, thank for using this application. To add item to your shopping list, click the button “Add item” below.

</p>;
const uncompletedButton = <button className="view-complete" onClick={showUncompleted}>View items</button>
const completedButton = <button className="view-complete" onClick={showCompleted}>View completed items</button>

  return (
    
    <div className="App">

     <div className="page-wrapper">
      <header>
        <img src={logo} alt="Eika logo"></img>
      </header>
     
    <h1>Shopping List</h1>

    <ListFilter onSort={sortByHandler}/>
    <div className="list-wrapper">
  {shoppingList.length>0?<ShoppingList items={shoppingList} viewStatus={listToView} onComplete={updateList}/>:welcomeText}

   
    </div>
    {showForm === true ?  <NewItem onAddItem={addItemHandler} onCloseAdd={()=>{closeAddForm()}}/>: <button onClick={showAddForm}>Add item</button>}
  

    <div className="complete">
      {listToView==='uncompleted'? uncompletedButton : completedButton}
    
    </div>
    </div>
    </div>
  );

 
}

export default App;
