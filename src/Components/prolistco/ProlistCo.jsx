import "./prolistco.css";

function ProlistCo() {
  return (
    <div className="productlist container-fluid">
      <h2>Dresses</h2>
      <div className="list-filter">
        <div className="filter-s-c">
          <span>Filter products :</span>
          <select>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter-new">
          <span>Sort Products :</span>

          <select>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProlistCo;
