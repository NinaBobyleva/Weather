import { useEffect, useState } from "react";
import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { WeatherFiveDays } from "../WeatherFiveDays/WeatherFiveDays";
import { getCurrentWeather } from "../../api/api";
import { WeatherDataType } from "../../type";

type WeatherBlockProp = {
  cityName: string | undefined;
  lat: number | undefined;
  lon: number | undefined;
};

export function WeatherBlock({
  lat,
  lon,
  cityName
}: WeatherBlockProp) {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);
  console.log("weatherData", weatherData);

  useEffect(() => {
    const getDataCurrentWeather = async () => {
      getCurrentWeather({ lat, lon }).then((res) => {
        console.log(res);
        setWeatherData(res.current);
      });
    };

    getDataCurrentWeather();
  }, [lat, lon]);

  return (
    <div className="mt-16 flex flex-wrap items-center gap-10">
      <CurrentWeather
        cityName={cityName}
        temp={weatherData?.temp}
        wind_speed={weatherData?.wind_speed}
        humidity={weatherData?.humidity}
        weather={weatherData?.weather}
        time={weatherData?.dt}
      />
      <WeatherFiveDays />
    </div>
  );
}
