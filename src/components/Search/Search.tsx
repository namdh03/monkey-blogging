import { FC } from "react";
import { useDropdown } from "@hooks/index";
import { SearchProps } from "@ts/index";
import { SearchStyled } from "./Search.styled";

const Search: FC<SearchProps> = ({ placeholder, ...props }) => {
    const { onChange } = useDropdown();

    return (
        <SearchStyled>
            <input
                type="text"
                placeholder={placeholder}
                className="search__input"
                onChange={onChange}
                {...props}
            />
        </SearchStyled>
    );
};

export default Search;
