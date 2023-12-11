
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectFavouriteAdverts } from "../../redux/catalog/selectors";
import { addToFavourites, removeFromFavourites } from "../../redux/catalog/favouritesSlice";
import { ModalItem } from "components/Modal/Modal";
import { openModal } from "../../redux/catalog/modalSlice";

export const ItemAdvert = ({item}) => {
    const favouriteAdverts = useSelector(selectFavouriteAdverts);
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(openModal());
    };

    const handleAddFavourite = selectedItem => {
        dispatch(addToFavourites(selectedItem))
    };
    const handleRemoveFavourite = selectedItem => {
       dispatch(removeFromFavourites(selectedItem));
    };

    const addOrRemoveFavourite = item => {
        const isFavourite = favouriteAdverts.some(advert => (advert.id === item.id))
        if (isFavourite) {
            return handleRemoveFavourite(item)
        } else {
            return handleAddFavourite(item)
        }
    }
 
    return (
        <>
            <img src={item.img} alt={ item.make} />
            <h4>{item.make}<span> {item.model}</span>, { item.year }</h4>
            <p>{ item.rentalPrice}</p>
            <ul>
                <li>{ item.address.split(', ')[1]}</li>
                <li>{ item.address.split(', ')[2]}</li>
                 <li>{ item.rentalCompany}</li>
                <li>{ item.type }</li>
                 <li>{ item.model }</li>
                <li>{ item.mileage }</li>
                <li>{ item.accessories[2] }</li>
            </ul>
            <button onClick={handleOpenModal}>Learn more</button>
            <button onClick={()=> addOrRemoveFavourite(item)}>+</button>
            <ModalItem item={ item} />
        </>

    )
}