import { useEffect, useState } from "react";
import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { WeatherFiveDays } from "../WeatherFiveDays/WeatherFiveDays";
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
  console.log("weatherData", weatherData);

  useEffect(() => {
    const getDataCurrentWeather = async () => {
      getCurrentWeather({ latitude, longitude }).then((res) => {
        console.log(res);
        setWeatherData(res);
      });
    };

    getDataCurrentWeather();
  }, [latitude, longitude]);

  return (
    <div className="mt-16 flex flex-wrap items-center gap-10">
      <CurrentWeather
        cityName={cityName}
        weatherCurrent={weatherData?.current}
        timezoneOffset={weatherData?.timezone_offset}
      />
      <WeatherFiveDays />
    </div>
  );
}
