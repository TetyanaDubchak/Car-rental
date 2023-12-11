
import { useDispatch, useSelector } from "react-redux";
import { nextPage } from "../../redux/catalog/advertsSlice";



export const LoadMore = () => {
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        dispatch(nextPage());
    };
    
    return (
        <button onClick={ handleLoadMore}>Load more</button>

    )
}