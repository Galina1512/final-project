import dataDishes from "../../data/dataDishes";
import { addItemToCart, removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {
const dishes = dataDishes.find(item => item.id === cartItem.dishId)
const dispatch = useDispatch();
console.log(dishes)   
    return(<div>
    {/* <div className="cart-chek">
        <div className="cart1"> */}
        <p className="chek">{dishes.name} </p>
        {/* </div>
        <div className="cart2"> */}
        <p className="chek">{cartItem.quantity } portion(s) </p>
        {/* </div>
        <div className="cart3"> */}
        <p className="chek">Price: $ {dishes.price * cartItem.quantity} </p>
        {/* </div> */}
    
        <span onClick = {() => dispatch(removeItemFromCart({cartItemId: cartItem.id})) } className="cart4">
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
        </span>
        {/* </div> */}
    </div>
    )
}
export default CartItem;