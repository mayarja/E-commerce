import "./navbar.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar container-fluid">
      <div className="inp-title">
        <span>EN</span>
        <div className="inp-search">
          <input type="text" />
          <AiOutlineSearch size={17} />
        </div>
      </div>
      <div className="box-logo">
        <span className="Logo fw-bold fs-1">Mero.</span>
      </div>
      <div className="nav-links">
        <li>REGISTER</li>
        <li>SIGN IN</li>
        <li>
          <AiOutlineShoppingCart size={30} color={"black"} />
          <span>4</span>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
