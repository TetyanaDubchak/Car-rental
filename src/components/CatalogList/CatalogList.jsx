
import { ItemAdvert } from "components/ItemAdvert/ItemAdvert";
import { useSelector } from "react-redux";
import { selectVisibleAdverts } from "../../redux/catalog/selectors";


export const CatalogList = () => {
        const filteredAdverts = useSelector(selectVisibleAdverts);
    return (
        <>
        <ul>
            {filteredAdverts.map(item => (
                <li key = {item.id}>
                    <ItemAdvert item={item } />
                </li>
            ))}        
            </ul>        
        </>


    )
}