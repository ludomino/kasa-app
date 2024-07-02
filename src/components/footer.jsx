import "../scss/footer.scss";
import logoKasa from "../assets/img/logo/kasa_logo_footer.png"

function Footer() {
  return (
    <footer>
      <img src={logoKasa} alt="logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
