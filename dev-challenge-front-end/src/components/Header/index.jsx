import logo from '../../layout/logo_multisearch.png';
import './styles.css';

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt='logo-multisearch' />
    </header>
  );
}

export default Header;
