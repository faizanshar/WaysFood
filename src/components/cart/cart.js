import "./cart.css";
import { useState } from "react";
// icon
import map from "../../public/icons/map.png";
import trash from "../../public/icons/trash.png";

// img
import paket1 from "../../public/img/paket1.png";
import paket2 from "../../public/img/paket2.png";

// component
import ModalMap from "../modalmap/modalmap";



function Cart() {
  const [modalMap, setModalMap] = useState(false);
  
  const errorLocation = () => {};

  const openModalMap = () => {
    setModalMap(true);
  };

  const closeModalMap = () => {
    setModalMap(false);
  };

  return (
    <div>
      {modalMap && <ModalMap close={closeModalMap}/>}
      <div class="container mt-5">
        <h4>Geprek Bensu</h4>
        <p className="txtTitle">Delivery Location</p>
        <SelectMap openModal={openModalMap} />
        <p className="txtTitle">Review Your Order</p>
        <BillTotal />
      </div>
    </div>
  );
}

function SelectMap({ openModal }) {
  return (
    <div class="row">
      <div class="col-9">
        <input
          class="form-control"
          type="text"
          placeholder="Select Map"
          // aria-label="default input example"
        />
      </div>
      <div class="col-3">
        <button type="button" onClick={openModal}>
          Select On Map <img src={map} />
        </button>
      </div>
    </div>
  );
}

function BillTotal() {
  const [int, setInt] = useState(0);

  const increment = () => {
    setInt(int + 1);
  };

  const decrement = () => {
    if (int > 0) {
      setInt(int - 1);
    }
  };

  return (
    <div class="container">
      <div class="row">
        {/* Left Group */}
        <div class="col-7">
          <div class="column">
            <div className="col-12 container-list-order">
              <div className="content-qty-img">
                <div className="content-img-order">
                  <img src={paket1} />
                </div>
                <div className="content-qty-order">
                  <h6>Paket Geprek</h6>
                  <div>
                    <button onClick={decrement}>-</button>
                    <input value={int} />
                    <button onClick={increment}>+</button>
                  </div>
                </div>
              </div>
              <div className="content-total-order">
                <p>Rp. 15.000</p>
                <a>
                  <img src={trash} />
                </a>
              </div>
            </div>
            <div className="foot-list-order"></div>
          </div>
        </div>
        <div className="col-1"></div>
        {/* Right Group */}
        <div class="col-4">
          <div className="container-total-order">
            <div className="content-subtotal">
              <p className="txt-title">Subtotal</p>
              <p className="txt-rp">Rp. 35.000</p>
            </div>
            <div className="content-qty">
              <p className="txt-title">Qty</p>
              <p>2</p>
            </div>
            <div className="content-shipping">
              <p className="txt-title">Ongkir</p>
              <p className="txt-rp">Rp. 10.000</p>
            </div>
            <div className="borderBottom"></div>
            <div className="content-total">
              <p className="txt-title-total">Total</p>
              <p className="txt-title-total">Rp. 10.000</p>
            </div>
            <div className="content-btn">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
