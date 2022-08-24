import "../css/banner.css";
import logo from "../img/leaf+1.png";

function Banner() {
  return (
    <header className="banner_style">
      <img src={logo} alt="La maison JUNGLE" className="logo_style"></img>
      <h1>La maison JUNGLE</h1>
    </header>
  );
}

export default Banner;
