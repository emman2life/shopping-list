
import './ShoppingListItem.css';
import plus from '../assets/images/plus-icon/1x/outline_add_black_24dp.png'

function ShoppingListItem(props){
    return (

        <div className="list-item">
        <button value="acquire"  className="acquired-button"
        onClick={props.onUpdate}>
            <img src={plus} alt="plus-icon"/></button>
          <p>{props.name}</p>
          <div className="item-price">
              <span>{props.price}</span>
              <span>:-</span>
              </div>
      </div>
    
    );
}
export default ShoppingListItem;