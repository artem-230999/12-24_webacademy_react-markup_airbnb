import logo from "./logo.svg";
import "./logo.scss";

const Logo = () => {
  return (
    <a className="logo" href='#'>
      <img src={logo} alt="logo" width="102" height="32"/>
    </a>
  );
}

export default Logo;

