import React from "react";
import { SiGooglemaps } from "react-icons/si";
import { BsSearch } from 'react-icons/bs'
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="container mt-5">
      <div className="row g-0 gap-4 gap-lg-0">
        <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start order-1 ">
          <h3 className="text-uppercase text-white fw-light">jonathan</h3>
        </div>

        <div className="col-12 col-lg-4 d-flex justify-content-center order-3 order-lg-2">
          <h4 className="text-white">
            <SiGooglemaps />
            Localizacion
          </h4>
        </div>

        <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end order-2 order-lg-3">
          <div className="form-group w-50">
          <div className="input-group">
            <input
              type="text"
              placeholder="Buscar ciudad"
              className="form-control input-none text-white"
            />
            <button type="button" className="btn btn-outline-light" id="button-addon2"><BsSearch/></button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
