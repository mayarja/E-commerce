import "./singleproduct.css";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

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
          <AiOutlineSearch className="icon-single" />
          <AiOutlineHeart className="icon-single" />
        </div>
      </div>
    </div>
  );
}

export default Singleproduct;
