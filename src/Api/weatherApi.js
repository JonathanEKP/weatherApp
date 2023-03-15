import axios from "axios";

export async function obtenerDatos(ciudad) {
  try {
    const resp = await axios(
      `http://api.weatherapi.com/v1/current.json?key=622715dadcf244599d9220730230303&q=${ciudad}&aqi=no`
    );
    return resp;
  } catch (error) {
    if (error.response.status === 400) {
      alert("Error: " + error.response.data.error.message);
    }
  }
}
