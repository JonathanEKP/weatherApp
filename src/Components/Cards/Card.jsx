import React, { useContext } from "react";
import "./Card.css";
import { WeatherContext } from "../../Context/WeatherContext";
function Card() {
  const { data } = useContext(WeatherContext);

  return (
    <div className="d-flex justify-content-center mt-3 mt-lg-4 py-lg-3">
      <div className="card rounded-4 mt-lg-3" id="card-container">
        <div className="card-body">
          <h1 className="card-title text-center">
            {data === undefined ? 0 : data.current.temp_c}
            <span className="mt-2 fs-3 position-fixed">&nbsp;°C</span>
          </h1>
          <div className="row g-0">
            <div className="col-12 d-flex justify-content-center mt-1">
              {data === undefined ? (
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <img
                  className="condition-icon"
                  src={data.current.condition.icon}
                  alt="Weather condition icon"
                />
              )}
            </div>
            <div className="col-12 mt-1">
              <h3 className="text-center">
                {data === undefined ? "" : data.current.condition.text}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
