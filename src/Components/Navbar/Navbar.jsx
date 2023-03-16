import React,{ useContext, useState } from "react";
import { SiGooglemaps } from "react-icons/si";
import { BsSearch } from 'react-icons/bs'
import "./Navbar.css";
import { WeatherContext } from "../../Context/WeatherContext";

function Navbar() {
  const [ciudad, setCiudad] = useState('')
  const { buscarCiudad, data } = useContext(WeatherContext)
  
  const handleSubmit = async(e)=>{
    e.preventDefault()
    await buscarCiudad(ciudad)
  }

  return (
    <nav className="container mt-5">
      <div className="row g-0 gap-4 gap-lg-0">
        <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start order-1 ">
          <h3 className="text-uppercase text-white fw-light">Weather</h3>
        </div>

        <div className="col-12 col-lg-4 d-flex justify-content-center order-3 order-lg-2">
          <h4 className="text-white">
            <SiGooglemaps />&nbsp;
            {data === undefined ? 'Localizacion' : data.location.name}
          </h4>
        </div>

        <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end order-2 order-lg-3">
          <div className="form-group w-50">
          <div className="input-group">
            <input
              type="text"
              placeholder="Buscar ciudad"
              className="form-control input-none text-white"
              value={ciudad}
              onChange={(e)=> setCiudad(e.target.value)}
            />
            <button type="button" className="btn btn-outline-light" id="button-addon2" onClick={handleSubmit}><BsSearch/></button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
