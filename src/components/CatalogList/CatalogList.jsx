import { useSelector } from "react-redux";
import { selectVisibleAdverts } from "../../redux/catalog/selectors";
import { useDispatch } from "react-redux";

export const CatalogList = () => {

    const filteredAdverts = useSelector(selectVisibleAdverts);
    console.log(filteredAdverts);
    const dispatch = useDispatch();
    
    return (
        <ul>
            {filteredAdverts.map(item => (
                <li key = {item.id}>
                    <img src="" alt="" />
                    <p>{item.make}<span></span>, </p>
                    <p></p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <button>Learn more</button>
                </li>
            ))}
           

        </ul>

    )
}