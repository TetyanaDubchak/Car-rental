import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from "../../redux/catalog/operations";
import { selectIsLoading, selectCurrentPage } from "../../redux/catalog/selectors";
import { Filters } from "../../components/Filters/Filters";
import { CatalogList } from '../../components/CatalogList/CatalogList';
import { LoadMore } from 'components/LoadMore/LoadMore';

export default function Catalog() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const page = useSelector(selectCurrentPage)

    useEffect(() => {
        dispatch(getAdverts(page))
        
    }, [dispatch, page])


    return (
        <div>
            <Filters />
            {isLoading && <p>Loading...</p>}
            <CatalogList />
            <LoadMore/>
        </div>
    )
}
