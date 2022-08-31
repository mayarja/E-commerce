import "./products.css";
import { popularProducts } from "../../data.js";
import Singleproduct from "../singleproduct/Singleproduct";

function Products() {
  return (
    <div className="products">
      <div className="container-fluid">
        <div className="row">
          {popularProducts.map((e) => (
            <Singleproduct e={e} key={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
