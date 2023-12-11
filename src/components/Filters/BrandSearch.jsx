import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/catalog/filtersSlice";

const carBrands = [
    "Buick", "Volvo", "HUMMER", "Subaru", "Mitsubishi", "Nissan",
    "Lincoln", "GMC", "Hyundai", "MINI", "Bentley", "Mercedes-Benz",
    "Aston Martin", "Pontiac", "Lamborghini", "Audi", "BMW",
    "Chevrolet", "Chrysler", "Kia", "Land"
];

export const BrandsSearch = () => {
    const dispatch = useDispatch();
    const handleFilterChange = selectedBrand => dispatch(setFilter(selectedBrand));

    return (

        <div>
            <label htmlFor="brand">Car brand</label>
            <select name="brand" id="brand" onChange={evt => handleFilterChange(evt.target.value)}>
                <option key='all' value=''>Enter the text</option>
                {carBrands.map(brand => (
                    <option key={brand} value={brand}>{ brand }</option>
                ))}
            </select>
        </div>
    )
}