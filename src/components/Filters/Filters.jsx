import { BrandsSearch } from "./BrandSearch";
import { SearchButton } from "./Button";
import { MilleageSearch } from "./MilleageSearch";
import { PriceSearch } from "./PriceSearch";

export const Filters = () => {

    return (
        <div>
            <BrandsSearch />
            <PriceSearch />
            <MilleageSearch />
            <SearchButton/>
        </div>

    )
}
