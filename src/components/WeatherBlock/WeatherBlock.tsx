import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { WeatherDaily } from "../WeatherDaily/WeatherDaily";
import { getWeather } from "../../api/api";
import { CityNameType, WeatherDataType } from "../../type";
import loader from "/public/img/Winter.gif";

type WeatherBlockProp = {
  cityName: CityNameType | undefined;
  latitude: number | undefined;
  longitude: number | undefined;
  setError: Dispatch<SetStateAction<string>>;
};

export function WeatherBlock({
  latitude,
  longitude,
  cityName,
  setError,
}: WeatherBlockProp) {
  const [isLoad, setIsLoad] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  useEffect(() => {
    setIsLoad(true);
    const getDataCurrentWeather = async () => {
      getWeather({ latitude, longitude })
        .then((res) => {
          setWeatherData(res);
          setIsLoad(false);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
          setIsLoad(false);
        });
    };

    getDataCurrentWeather();
  }, [latitude, longitude]);

  return (
    <>
      {isLoad ? (
        <div className="flex justify-center mt-20">
          <img src={loader} alt="Загрузка" />
        </div>
      ) : (
        <div className="flex flex-wrap xl:flex-nowrap justify-center gap-4 sm:gap-8 md:gap-12 md:mt-[32px] mb-10">
          {weatherData?.current ? (
            <CurrentWeather
              cityName={cityName?.ru}
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
      )}
    </>
  );
}
