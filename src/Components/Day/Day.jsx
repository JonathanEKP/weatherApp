import React, { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherContext";
import "./Day.css";

function Day() {
  const { data } = useContext(WeatherContext);
  let day = 0;
  function returnDay(date) {
    let fecha = date.split(" ");
    fecha.pop();
    fecha = fecha.toString();
    fecha = fecha.split("-");
    return fecha;
  }

  return (
    <div className="mx-auto date-container rounded-3 mt-lg-4 mt-3">
      <div className="row g-0">
        <div className="col-12 d-flex justify-content-center" id="col-1">
          <p className="text-white fs-4 fw-bold">
            {data === undefined ? "" : returnDay(data.location.localtime)[2]}
          </p>
        </div>
        <div className="col-12 d-flex justify-content-center mt-1">
          <p className="text-white fw-bolder fs-custom">
            {data === undefined ? "" : returnDay(data.location.localtime)[1]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Day;
