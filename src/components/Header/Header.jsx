import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

import './header.scss';

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__row">
          <Logo />

          <div className="header__search">
            <SearchBar />
          </div>

          <div className="header__user">
            header
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;