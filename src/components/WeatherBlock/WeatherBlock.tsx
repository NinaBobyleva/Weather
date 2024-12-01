import { useEffect, useState } from "react";
import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { WeatherDaily } from "../WeatherDaily/WeatherDaily";
import { getCurrentWeather } from "../../api/api";
import { WeatherDataType } from "../../type";

type WeatherBlockProp = {
  cityName: string | undefined;
  latitude: number | undefined;
  longitude: number | undefined;
};

export function WeatherBlock({
  latitude,
  longitude,
  cityName,
}: WeatherBlockProp) {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);
  // console.log("weatherData", weatherData);

  useEffect(() => {
    const getDataCurrentWeather = async () => {
      getCurrentWeather({ latitude, longitude })
        .then((res) => {
          setWeatherData(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getDataCurrentWeather();
  }, [latitude, longitude]);

  return (
    <div className="flex flex-wrap xl:flex-nowrap justify-center gap-4 sm:gap-8 mb-10">
      {weatherData?.current ? (
        <CurrentWeather
          cityName={cityName}
          weatherCurrent={weatherData?.current}
          timezoneOffset={weatherData?.timezone_offset}
        />
      ) : null}
      {weatherData?.current ? (
        <WeatherDaily
          weatherDaily={weatherData?.daily}
          timezoneOffset={weatherData?.timezone_offset}
        />
      ) : null}
    </div>
  );
}
