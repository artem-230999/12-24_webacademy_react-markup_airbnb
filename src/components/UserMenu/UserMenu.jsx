import Link from '../Link/Link';
import globIcon from './globe.svg';

import './style.scss';

const UserMenu = () => {
  return (
    <div className="user-menu">
      <div className="user-menu__home">
        <Link text="Airbnb your home" />
      </div>
      <div className="user-menu__local">
        <Link icon={globIcon} />
      </div>
      <div className="user-menu__users">User</div>
    </div>
  );
}

export default UserMenu;