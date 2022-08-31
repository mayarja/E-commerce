import "./pagesingleco.css";
function PageSingleco() {
  return (
    <div className="page-single">
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="..." />
          </div>
        </div>

        <div className="col-md-6 zz">
          <div className="title">
            <h1>Denim Jumpsuit</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
              iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
              tristique tortor pretium ut. Curabitur elit justo, consequat id
              condimentum ac, volutpat ornare.
            </p>
            <span>$ 20</span>
          </div>

          <div className="color-size">
            <div className="title-color">
              <span>Color </span>
              <div className="color-div" style={{ background: "black" }}></div>
              <div className="color-div" style={{ background: "blue" }}></div>
              <div className="color-div" style={{ background: "gray" }}></div>
            </div>

            <div className="title-size">
              <span>Size </span>
              <select>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="box-btn">
            <div className="spans">
              <span>+</span>
              <span className="ssss">1</span>
              <span>-</span>
            </div>
            <button className="btn">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSingleco;
