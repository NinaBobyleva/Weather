import axios from "axios";

const BASE_URL = "http://api.openweathermap.org/";

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

export async function getDaysWeather(cityName: string) {
  const response = await axios.get(
    `${BASE_URL}historical?access_key=${token}&query=${cityName}&historical_date_start=2024-11-29&historical_date_end=2024-12-03`
  );

  return response.data;
}
