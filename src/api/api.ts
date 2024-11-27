import axios from "axios";

const BASE_URL = 'http://api.weatherstack.com/';

const token = 'fef5c0ad25cf665b23e5c4fb4905b212';

export async function getCurrentWeather(cityName: string) {
    const response = await axios.get(`${BASE_URL}current?access_key=${token}&query=${cityName}`);

    return response.data;
}