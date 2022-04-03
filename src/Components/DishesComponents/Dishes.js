import Dish from "./Dish";
import dataDishes from "../../data/dataDishes";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";


const Dishes = () =>{
    const selectedCategory = useSelector(getSelectedCategory);

    return ( <div>
        {dataDishes
        .filter(dish =>{
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === dish.category;
                    })
        .map(item => 
            <Dish dish={item}/>)}
    </div>)
}

export default Dishes;