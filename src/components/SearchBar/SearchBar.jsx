import './style.scss'
import searchIcon from './search.svg';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__btns-wrapper">
        <button className="search-bar__btn" type="button">
          Anywhere
        </button>

        <button className="search-bar__btn" type="button">
          Any week
        </button>

        <button className="search-bar__btn" type="button">
          Add guests
        </button>
      </div>

      <button className="search-bar__btn-search" type="button">
        <img src={searchIcon} alt="search icon" width="12" height="12" />
      </button>
    </div>
  );
}

export default SearchBar;