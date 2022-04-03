import './App.css';
import Dishes from './Components/DishesComponents/Dishes';
import AllCatigory from './Components/Filter/AllCategory';
import Cart from './Components/Cart/Cart';
import Cartitem from './Components/Cart/CartItem';

function App() {
  return (
    <div className="App">
      <div className='blok'>
      <AllCatigory/>
      <Cart/>
      {/* <CartItem/> */}
      </div>
      <div className='blok'>
      <Dishes/>
      </div>
    </div>
  );
}

export default App;
