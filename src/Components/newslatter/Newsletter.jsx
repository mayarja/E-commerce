import "./newsletter.css";
import { IoMdSend } from "react-icons/io";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="box-news text-center">
        <h1>NewsLetter</h1>
        <p>Get Timely update from your favorite product</p>
        <div className="box-inp">
          <input type="text" placeholder="Your Email" />
          <button>
            <IoMdSend size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
