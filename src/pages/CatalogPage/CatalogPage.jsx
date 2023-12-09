import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from "../../redux/catalog/operations";
import { selectIsLoading } from "../../redux/catalog/selectors";
import { Filters } from "../../components/Filters/Filters";
import { CatalogList } from '../../components/CatalogList/CatalogList';

export default function Catalog() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getAdverts())
        
    }, [dispatch])


    return (
        <div>
            <Filters />
            <CatalogList/>
        </div>
    )
}
