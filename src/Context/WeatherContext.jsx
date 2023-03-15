import React, { createContext, useState} from "react";
import { obtenerDatos } from "../Api/weatherApi";

export const WeatherContext = createContext();

export function WeatherContextProvider(props) {
  const [data, setData] = useState();

  async function buscarCiudad(ciudad) {
    const respuesta = await obtenerDatos(ciudad);
    if (respuesta.status === 200) {
      const data = await respuesta.data;
      setData(data);
      console.log(data)
    }
  }

  return (
    <WeatherContext.Provider value={{ data, buscarCiudad }}>
      {props.children}
    </WeatherContext.Provider>
  );
}
