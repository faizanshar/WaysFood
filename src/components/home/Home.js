import "./Home.css";
import { Link } from "react-router-dom";
// icon
import advert from "../../public/img/advert.png";
import jco from "../../public/icons/jco.png";
import burger from "../../public/icons/burgerking.png";
import kfc from "../../public/icons/kfc.png";
import starbucks from "../../public/icons/starbucks.png";
import cancel from "../../public/icons/cancel.png";
import success from "../../public/icons/success.png";
// img
import bensu from "../../public/img/bensu.png";
import kopi from "../../public/img/kopi.png";
import nasgor from "../../public/img/nasgor.png";
import pecelayam from "../../public/img/pecelayam.png";

function Home() {
  return (
    <div>
      <HomeSeller />
    </div>
  );
}

function HomeSeller() {
  return (
    <div className="container mt-5">
      <h2>Income Transaction</h2>
      <div className="col-12">
        <TableData />
      </div>
    </div>
  );
}

function HomeBuyyer() {
  return (
    <div>
      {/* <Header /> */}
      <Advert />
      <Popular />
      <RestoNear />
      <div style={{ height: "50px" }}></div>
    </div>
  );
}

function TableData() {
  return (
    <table>
      <thead>
        <tr>
          <th className="no-th">No</th>
          <th className="name-th">Name</th>
          <th className="address-th">Address</th>
          <th className="product-th">Products Order</th>
          <th className="status-th">Status</th>
          <th className="action-th">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="no">1</td>
          <td className="name">Faiz</td>
          <td className="address">Depok</td>
          <td className="product">Paket Geprek</td>
          <TbStatus />
          <TbAction />
        </tr>
      </tbody>
    </table>
  );
}

function TbStatus() {
  const status = 1;
  return (
    <>
      {(() => {
        if (status == 1) {
          return (
            <td style={{ color: "#FF9900",fontWeight:'500' }} className="status">
              Waiting Approve
            </td>
          );
        } else if (status == 2) {
          return (
            <td style={{ color: "#00D1FF",fontWeight:'500' }} className="status">
              On The Way
            </td>
          );
        } else if (status == 3) {
          return (
            <td style={{ color: "#78A85A",fontWeight:'500' }} className="status">
              Success
            </td>
          );
        } else {
          return (
            <td style={{ color: "#E83939",fontWeight:'500' }} className="status">
              Cancel
            </td>
          );
        }
      })()}
    </>
  );
}

function TbAction() {
  const status = 1;
  return (
    <>
      {(() => {
        if (status == 1) {
          return (
            <td className="action">
              <button className="btn-cancel">Cancel</button>
              <button className="btn-approve">Approve</button>
            </td>
          );
        } else if (status == 2) {
          return (
            <td className="action">
              <img style={{ backgroundColor: "transparent" }} src={success} />
            </td>
          );
        } else if (status == 3) {
          return (
            <td className="action">
              <img style={{ backgroundColor: "transparent" }} src={success} />
            </td>
          );
        } else {
          return (
            <td className="action">
              <img style={{ backgroundColor: "transparent" }} src={cancel} />
            </td>
          );
        }
      })()}
    </>
  );
}

function Advert() {
  return (
    <div className="bg-advert">
      <img src={advert} className="mt-2" />
    </div>
  );
}

function Popular() {
  return (
    <div className="container mt-5">
      <h4>Popular Restaurant</h4>
      <div className="row mt-4">
        <div className="col-3 ">
          <Link to="/detail-food" className="content-popular">
            <div className="col-5 bg-content-popular">
              <img src={burger} />
            </div>
            <div className="col-7 bg-content-popular">Burger King</div>
          </Link>
        </div>
        <div className="col-3 ">
          <Link to="/detail-food" className="content-popular">
            <div className="col-5 bg-content-popular">
              <img src={starbucks} />
            </div>
            <div className="col-7 bg-content-popular">Starbucks</div>
          </Link>
        </div>
        <div className="col-3 ">
          <Link to="/detail-food" className="content-popular">
            <div className="col-5 bg-content-popular">
              <img src={kfc} />
            </div>
            <div className="col-7 bg-content-popular">KFC</div>
          </Link>
        </div>
        <div className="col-3 ">
          <Link to="/detail-food" className="content-popular">
            <div className="col-5 bg-content-popular">
              <img src={jco} />
            </div>
            <div className="col-7 bg-content-popular">JCO</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function RestoNear() {
  return (
    <div class="container mt-5">
      <h4>Restaurant Near You</h4>
      <div class="row">
        <div class="col-3">
          <Link to="/detail-food" className="content-restonear">
            <div className="img-content-restonear">
              <img src={bensu} />
            </div>
            <div className="txt-content-restonear">
              <h6>Geprek Bensu</h6>
              <p>0,2 KM</p>
            </div>
          </Link>
        </div>
        <div class="col-3">
          <Link to="/detail-food" className="content-restonear">
            <div className="img-content-restonear">
              <img src={nasgor} />
            </div>
            <div className="txt-content-restonear">
              <h6>Nasi Goreng Mas Rony</h6>
              <p>0,6 KM</p>
            </div>
          </Link>
        </div>
        <div class="col-3">
          <Link to="/detail-food" className="content-restonear">
            <div className="img-content-restonear">
              <img src={pecelayam} />
            </div>
            <div className="txt-content-restonear">
              <h6>Pecel Ayam Prambanan</h6>
              <p>0,6 KM</p>
            </div>
          </Link>
        </div>
        <div class="col-3">
          <Link to="/detail-food" className="content-restonear">
            <div className="img-content-restonear">
              <img src={kopi} />
            </div>
            <div className="txt-content-restonear">
              <h6>Kopi Kenangan</h6>
              <p>1,6 KM</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
