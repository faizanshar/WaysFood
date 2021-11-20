import "./partials.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// icons
import logo from "../../public/icons/logo.png";
import cart from "../../public/icons/cart.png";
import profile from "../../public/icons/profile.png";
import logout from "../../public/icons/logout.png";
import polygon from "../../public/icons/polygon.png";
import addfood from "../../public/icons/addfood.png";

function Header() {
  const [modalRegister, setModalRegister] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openModalRegister = () => {
    setModalRegister(true);
  };

  const openModalLogin = () => {
    setModalLogin(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light  nav-bg">
      <div className="container nav-bg">
        <Link to="/" className="navbar-brand nav-bg" href="#">
          <img src={logo} className="nav-bg" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav-bg"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <Condition
            openmodalLog={openModalLogin}
            openmodalReg={openModalRegister}
            Condition={isLogin}
          />
        </div>
      </div>

      {modalRegister && (
        <ModalRegister
          closeModal={setModalRegister}
          openLoginModal={setModalLogin}
        />
      )}
      {modalLogin && (
        <ModalLogin
          closeModal={setModalLogin}
          openRegisterModal={setModalRegister}
          setLogin={setIsLogin}
        />
      )}
    </nav>
  );
}

function Condition({ openmodalLog, openmodalReg, Condition }) {
  return (
    <div>
      {Condition ? (
        <AfterLogin />
      ) : (
        <BtnAuth Login={openmodalLog} Register={openmodalReg} />
      )}
    </div>
  );
}

function BtnAuth({ Login, Register }) {
  return (
    <div className="container-btn">
      <button className="btn btn-header" onClick={Register}>
        Register
      </button>
      <button className="btn btn-header ms-3" onClick={Login}>
        Login
      </button>
    </div>
  );
}

function AfterLogin() {
  return (
    <div className="container-afterLogin">
      <Link to="/cart">
        <img src={cart} />
      </Link>
      <DropDownSeller />
    </div>
  );
}

function DropDownBuyyer() {
  return (
    <div className="dropdown bg">
      <button
        className="btn btn-secondary "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></button>
      <ul
        class="dropdown-menu  dropdown-menu-end mt-3"
        aria-labelledby="dropdownMenuLink"
      >
        <li>
          <a
            class="dropdown-item"
            style={{
              backgroundColor: "transparent",
              left: "120px",
              bottom: "80px",
              position: "absolute ",
              width: "30px",
              justifyContent: "center",
            }}
            href="#"
          >
            <img
              src={polygon}
              style={{ backgroundColor: "transparent" }}
              alt="iconProfil"
            />
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            <img src={profile} class="float-end me-2" alt="iconProfil" />
            Profile
          </a>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li>
          <a class="dropdown-item" href="/logout">
            <img src={logout} class="float-end me-2" alt="iconLogout" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

function DropDownSeller() {
  return (
    <div className="dropdown bg">
      <button
        className="btn btn-secondary "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></button>
      <ul
        class="dropdown-menu  dropdown-menu-end mt-3"
        aria-labelledby="dropdownMenuLink"
      >
        <li>
          <a
            class="dropdown-item"
            style={{
              backgroundColor: "transparent",
              left: "120px",
              bottom: "125px",
              position: "absolute ",
              width: "30px",
              justifyContent: "center",
            }}
            href="#"
          >
            <img
              src={polygon}
              style={{ backgroundColor: "transparent" }}
              alt="iconProfil"
            />
          </a>
        </li>
        <li>
          <Link
            class="dropdown-item"
            style={{ backgroundColor: "white" }}
            to="/profile"
          >
            <img src={profile} class="float-end me-2" alt="iconProfil" />
            Profile
          </Link>
        </li>
        <li className="mt-2">
          <Link
            class="dropdown-item"
            style={{ backgroundColor: "white" }}
            to="/add-food"
          >
            <img src={addfood} class="float-end me-2" alt="iconProfil" />
            Add Product
          </Link>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li>
          <a
            class="dropdown-item"
            style={{ backgroundColor: "white" }}
            href="/logout"
          >
            <img src={logout} class="float-end me-2" alt="iconLogout" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

function ModalRegister({ closeModal, openLoginModal }) {
  const close = () => {
    closeModal(false);
  };

  const openLogin = () => {
    openLoginModal(true);
  };

  return (
    <div onClick={close} className="bg-modal">
      <div className="container-modal">
        <h3>Register</h3>
        <FormRegister login={openLogin} />
      </div>
    </div>
  );
}

function ModalLogin({ closeModal, openRegisterModal, setLogin }) {
  const close = () => {
    closeModal(false);
  };

  const openRegister = () => {
    openRegisterModal(true);
  };

  const ChangeCondition = () => {
    setLogin(true);
  };

  return (
    <div onClick={close} className="bg-modal">
      <div className="container-modal-login">
        <h3>Login</h3>
        <FormLogin
          register={openRegister}
          setLoginCondition={ChangeCondition}
        />
      </div>
    </div>
  );
}

function FormLogin({ register, setLoginCondition }) {
  return (
    <form>
      <input class="form-control bg-input " type="email" placeholder="Email" />
      <input
        class="form-control bg-input "
        type="password"
        placeholder="Password"
      />
      <button
        onClick={setLoginCondition}
        type="button"
        className="form-control bg-btn "
      >
        Login
      </button>
      <p>
        Don't have an account ? Klik{" "}
        <a style={{ color: "gray" }} onClick={register}>
          Here
        </a>
      </p>
    </form>
  );
}

function FormRegister({ login }) {
  return (
    <form>
      <input class="form-control bg-input " type="email" placeholder="Email" />
      <input
        class="form-control bg-input "
        type="password"
        placeholder="Password"
      />
      <input
        class="form-control bg-input "
        type="text"
        placeholder="Full Name"
      />
      <select class="form-control bg-input ">
        <option value="" disabled selected>
          Gender
        </option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select>
      <input class="form-control bg-input " type="number" placeholder="Phone" />
      <select class="form-control bg-input ">
        <option value="" disabled selected>
          As User
        </option>
        <option value="1">Buyyer</option>
        <option value="1">Seller</option>
      </select>
      <button className="form-control bg-btn ">Register</button>
      <p>
        Already have an account ? Klik{" "}
        <a style={{ color: "gray" }} onClick={login}>
          Here
        </a>
      </p>
    </form>
  );
}

export default Header;
