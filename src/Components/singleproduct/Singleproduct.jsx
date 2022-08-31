import "./singleproduct.css";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Singleproduct({ e }) {
  return (
    <div className="col-xl-3 col-lg-4  col-sm-6 mb-4">
      <div className="single-pro">
        <div className="img-d">
          <img src={e.img} alt="" />
        </div>
        <div className="circle"></div>
        <div className="icons">
          <AiOutlineShoppingCart className="icon-single" />
          <Link to="/E-commerce/PageSingleProduct" className="link">
            <AiOutlineSearch className="icon-single" />
          </Link>
          <AiOutlineHeart className="icon-single" />
        </div>
      </div>
    </div>
  );
}

export default Singleproduct;
