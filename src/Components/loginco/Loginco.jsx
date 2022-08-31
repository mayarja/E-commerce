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
        <a href="./">CREATE A NEW ACCOUNT</a>
      </div>
    </div>
  );
}

export default Loginco;
