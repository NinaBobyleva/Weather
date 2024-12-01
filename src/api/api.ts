import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/";

const token = "f7eb66f198448cba0bb22e7a85141ff0";

export async function getGeo(cityNameInput: string) {
  const response = await axios.get(
    `${BASE_URL}geo/1.0/direct?q=${cityNameInput}&appid=${token}`
  );

  return response.data;
}

export async function getCurrentWeather({latitude, longitude}: {latitude: number | undefined, longitude: number | undefined}) {
  const response = await axios.get(
    `${BASE_URL}data/3.0/onecall?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&exclude=minutely,hourly,alerts&appid=${token}`
  );

  return response.data;
}

// export async function getCurrentWeather({
//   latitude,
//   longitude,
// }: {
//   latitude: number | undefined;
//   longitude: number | undefined;
// }) {
//   const res = await fetch(
//     `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&exclude=minutely,hourly,alerts&appid=${token}`
//   );

//   const response = await res.json();
//   console.log(response);

//   return response;
// }
