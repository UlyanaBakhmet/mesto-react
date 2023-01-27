import headerLogo from "../images/logologo.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={headerLogo} alt="логотип Mesto Russia" />
    </header>
  );
}

export default Header;
