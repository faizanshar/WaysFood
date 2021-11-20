import "./detailFood.css"
import { Link } from "react-router-dom";

// img
import paket1 from "../../public/img/paket1.png"
import paket2 from "../../public/img/paket2.png"
import paket3 from "../../public/img/paket3.png"
import paket4 from "../../public/img/paket4.png"


function DetailFood() {
  return (
    <div className="container mt-5">
      <h4>Geprek Bensu</h4>
      <div className="row mt-4">
        <div className="col-3">
          <div className="content-menu">
            <div className="content-img">
              <img src={paket1} />
            </div>
            <div className="content-title">
              <h6>Paket Geprek</h6>
              <p>Rp.15.000</p>
            </div>
            <Link to="#" className = "link-order">Order</Link>
          </div>
        </div>
        <div className="col-3">
          <div className="content-menu">
            <div className="content-img">
              <img src={paket2} />
            </div>
            <div className="content-title">
              <h6>Paket Geprek Keju</h6>
              <p>Rp.15.000</p>
            </div>
            <Link to="#" className = "link-order">Order</Link>
          </div>
        </div>
        <div className="col-3">
          <div className="content-menu">
            <div className="content-img">
              <img src={paket3} />
            </div>
            <div className="content-title">
              <h6>Paket Geprek Leleh</h6>
              <p>Rp.15.000</p>
            </div>
          <Link to="#" className = "link-order">Order</Link>
          </div>
        </div>
        <div className="col-3">
          <div className="content-menu">
            <div className="content-img">
              <img src={paket4} />
            </div>
            <div className="content-title">
              <h6>Paket Geprek Matah</h6>
              <p>Rp.15.000</p>
            </div>
            <Link to="#" className = "link-order">Order</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailFood;
