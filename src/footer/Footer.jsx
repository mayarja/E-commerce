import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer container-fluid">
      <div className="left">
        <h3>Mero.</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <ul className="list-unstyled icons">
          <li style={{ background: "#3B5999" }}>
            <AiFillFacebook size={30} />
          </li>
          <li style={{ background: "#E4405f" }}>
            <AiFillInstagram size={30} />
          </li>
          <li style={{ background: "#55acee" }}>
            <AiOutlineTwitter size={30} />
          </li>
          <li style={{ background: "#e60023" }}>
            <FaPinterestP size={30} />
          </li>
        </ul>
      </div>
      <div className="center">
        <h3>Useful Links </h3>
        <ul className="list-unstyled links">
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="right">
        <h3>Contact</h3>
        <div className="cont-titl">
          <BiMap size={20} className="me-3 " />
          <p>622 Dixie Path , South Tobinchester 98336</p>
        </div>
        <div className="cont-titl">
          <BsTelephone size={20} className="me-3" />
          <p>+1 234 56 78</p>
        </div>
        <div className="cont-titl">
          <AiOutlineMail size={20} className="me-3" />
          <p>contact@lama.dev</p>
        </div>
        <div className="cont-titl">
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Footer;
