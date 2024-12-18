import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import UserMenu from '../UserMenu/UserMenu';

import './header.scss';

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__row">
          <Logo />
          <SearchBar />
          <UserMenu />
        </div>
      </div>
    </header>
  )
}

export default Header;