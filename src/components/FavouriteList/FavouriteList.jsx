
import { ItemAdvert } from "components/ItemAdvert/ItemAdvert";
import { useSelector } from "react-redux";
import { selectFavouriteAdverts } from "../../redux/catalog/selectors";


export const FavouriteList = () => {
        const favouriteAdverts = useSelector(selectFavouriteAdverts);
    return (
        <ul>
            {favouriteAdverts.map(item => (
                <li key = {item.id}>
                    <ItemAdvert item={item } />
                </li>
            ))}        
        </ul>

    )
}