import "./slider.css";
import { sliderItems } from "../../data.js";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";

function Slider() {
  let [status, steStatus] = useState(0);

  let handelclick = (e) => {
    if (e === "l") {
      steStatus(status > 0 ? status - 1 : 2);
    }
    if (e === "r") {
      steStatus(status < 2 ? status + 1 : 0);
    }
  };

  return (
    <div className="slider">
      <div className="slider-box">
        <IoMdArrowDropleft
          className="left-icon"
          onClick={() => handelclick("l")}
        />
        <IoMdArrowDropright
          className="right-icon"
          onClick={() => handelclick("r")}
        />
        <div className="slide-all">
          {sliderItems.map((e, index) => {
            return (
              <div
                className="row container-fluid ss"
                style={{
                  backgroundColor: `${e.bg}`,
                  transform: `translateX(${status * -100}vw)`,
                }}
                key={e.id}
              >
                <div className="col-lg-6">
                  <div className="box-img">
                    <img src={e.img} className="" alt="aaaaa" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className=" title">
                    <h1>{e.title}</h1>
                    <p>{e.desc}</p>
                    <button className="btn ">Show Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Slider;
