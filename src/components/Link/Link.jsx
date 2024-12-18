import './style.scss';

const Link = ({ text, style, icon }) => {

  let cssClass = 'link';
  cssClass += style === 'light' ? ' link--light' : '';

  return (
    <a href="#" className={cssClass}>
      {icon && <img src={icon} alt="" />}
      {text}
    </a>
  );
}

export default Link;