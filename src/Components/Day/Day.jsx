import React, { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherContext";
import { monthArray } from "../../data/months";
import "./Day.css";

function Day() {
  const { data } = useContext(WeatherContext);
  function returnDay(date) {
    let fecha = date.split(" ");
    fecha.pop();
    fecha = fecha.toString();
    fecha = fecha.split("-");
    return fecha; //["2023"->Año, "03"->Mes, "18"->Dia]
  }

  return (
    <div>
      {data === undefined ? (
        ""
      ) : (
        <div className="mx-auto date-container rounded-3 mt-lg-1 mt-2 ">
          <div className="shadow-lg">
            <div className="row g-0 ">
              <div className="col-12 d-flex justify-content-center" id="col-1">
                <p className="text-white fs-4 fw-bold">
                  {returnDay(data.location.localtime)[2]}
                </p>
              </div>
              <div className="col-12 d-flex justify-content-center mt-1">
                <p className="text-white fw-bolder fs-custom">
                  {monthArray[returnDay(data.location.localtime)[1]]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Day;
