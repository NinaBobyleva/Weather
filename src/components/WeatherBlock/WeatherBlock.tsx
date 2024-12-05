import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { WeatherDaily } from "../WeatherDaily/WeatherDaily";
import { getWeather } from "../../api/api";
import { CityName, WeatherDataType } from "../../type";
import loader from "/public/img/Winter.gif";
// import { getErrorText } from "../../utils/getErrorText";

type WeatherBlockProp = {
  cityName: CityName | undefined;
  latitude: number | undefined;
  longitude: number | undefined;
  isLoad: boolean;
  setIsLoad: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};

export function WeatherBlock({
  latitude,
  longitude,
  cityName,
  isLoad,
  setIsLoad,
  setError,
}: WeatherBlockProp) {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);
  // console.log("weatherData", weatherData);

  useEffect(() => {
    const getDataCurrentWeather = async () => {
      getWeather({ latitude, longitude })
        .then((res) => {
          setWeatherData(res);
          setIsLoad(false);
          setError("");
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          // getErrorText({ errorName: error.message, setError: setError });
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
      )}
    </>
  );
}
