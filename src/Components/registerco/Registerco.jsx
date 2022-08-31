import "./registerco.css";

function Registerco() {
  return (
    <div className="reg-page">
      <div className="box-reg">
        <h3>CREATE AN ACCOUNT</h3>
        <div className="input-box">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="last name" />
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
        </div>
        <p>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </p>
        <button className="btn btn-light "> CREATE</button>
      </div>
    </div>
  );
}

export default Registerco;
