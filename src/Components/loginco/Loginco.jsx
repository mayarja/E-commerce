import { Link } from "react-router-dom";
import "./loginco.css";

function Loginco() {
  return (
    <div className="log-page">
      <div className="box-log">
        <h3>SIGN IN</h3>
        <div className="input-box">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="passwrod" />
        </div>
        <button className="btn btn-light "> LOGIN</button>
        <a href="./">DO NOT YOU REMMPER THE PASSWORD</a>
        <Link to="/E-commerce/RegisterPage" className="link">
          CREATE A NEW ACCOUNT
        </Link>
      </div>
    </div>
  );
}

export default Loginco;
