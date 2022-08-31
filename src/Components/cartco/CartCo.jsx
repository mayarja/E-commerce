import Footer from "../../footer/Footer";
import Annoucement from "../annoucement/Annoucement";
import Navbar from "../navbar/Navbar";
import "./cartco.css";

function CartCo() {
  return (
    <div>
      <Navbar />
      <Annoucement />
      <div className="cart container-fluid">
        <h1 className="text-center mb-2">YOUR BAG</h1>
        <div className="btn-title">
          <button className="btn btn-light border-dark fw-normal text-dark">
            CONTINUE SHOPPING
          </button>

          <div className="spanss mt-2 mb-2">
            <span>Shopping Bag(2)</span>
            <span>Your Wishlist(0)</span>
          </div>

          <button className="btn btn-dark border-dark fw-normal   text-light">
            CHEACKOUT NOW
          </button>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="cart-title">
              <div className="cart-img">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt="....."
                />
                <div className="title-img">
                  <p>
                    <b>Product</b>:JESSIE THUNDER SHOES
                  </p>
                  <p>
                    <b>ID</b>:0969342178
                  </p>
                  <p className="color-p" style={{ background: "black" }}></p>
                  <p>
                    <b>Size</b>:37.5
                  </p>
                </div>
              </div>
              <div className="cart-price-s">
                <div className="size">
                  <span>+</span>
                  <span>2</span>
                  <span>-</span>
                </div>
                <div className="price">$ 30</div>
              </div>
            </div>
            <hr />

            <div className="cart-title">
              <div className="cart-img">
                <img
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  alt="....."
                />
                <div className="title-img">
                  <p>
                    <b>Product</b>:HAKURA T-SHIRT
                  </p>
                  <p>
                    <b>ID</b>:0969342178
                  </p>
                  <p className="color-p" style={{ background: "gray" }}></p>
                  <p>
                    <b>Size</b>:M
                  </p>
                </div>
              </div>
              <div className="cart-price-s">
                <div className="size">
                  <span>+</span>
                  <span>1</span>
                  <span>-</span>
                </div>
                <div className="price">$ 20</div>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-lg-3">
            <div className="box-order">
              <h2>ORDER SUMMARY</h2>
              <div className="order-title">
                <span>Subatial</span>
                <span>$ 80</span>
              </div>
              <div className="order-title">
                <span>Estimated Shipping</span>
                <span>$ 5.90</span>
              </div>
              <div className="order-title">
                <span>hipping Discount</span>
                <span>$ -5.90</span>
              </div>
              <div className="order-title">
                <span>
                  <b>Total</b>
                </span>
                <span>$ 80</span>
              </div>
              <button className="btn btn-dark">CHEACKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartCo;
