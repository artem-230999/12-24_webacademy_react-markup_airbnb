import Link from '../Link/Link';

import searchIcon from './search.svg';

import './style.scss';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__btns-wrapper">
        <div className="search-bar__btn">
          <Link text="Anywhere" />
        </div>

        <div className="search-bar__btn">
          <Link text="Any week" />
        </div>

        <div className="search-bar__btn">
          <Link text="Add guests" style="light" />
        </div>
      </div>

      <button className="search-bar__btn-search" type="button">
        <img src={searchIcon} alt="search icon" width="12" height="12" />
      </button>
    </div>
  );
}

export default SearchBar;