import "./categories.css";
import { categories } from "../../data.js";
function Categories() {
  return (
    <div className="catego">
      <div className="container-fluid">
        <div className="row">
          {categories.map((e) => (
            <div className="mb-3 col-lg-4 col-sm-6" key={e.id}>
              <div className="box-cat">
                <img src={e.img} alt="..." />
                <div className="title-cat">
                  <h1>{e.title}</h1>
                  <button>SHOP NOW</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
