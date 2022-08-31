import "./navbar.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

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
        <Link to="/E-commerce/" className="link">
          <span className="Logo fw-bold fs-1">Mero.</span>
        </Link>
      </div>
      <div className="nav-links">
        <li>
          <Link to="/E-commerce/RegisterPage" className="link">
            REGISTER
          </Link>
        </li>
        <li>
          <Link to="/E-commerce/LoginPage" className="link">
            SIGN IN
          </Link>
        </li>
        <li>
          <Link to="/E-commerce/Cart" className="link">
            <AiOutlineShoppingCart size={30} color={"black"} />
            <span>4</span>
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
