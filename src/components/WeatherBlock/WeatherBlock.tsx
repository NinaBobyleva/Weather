import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { WeatherDaily } from "../WeatherDaily/WeatherDaily";
import { getCurrentWeather } from "../../api/api";
import { WeatherDataType } from "../../type";
import loader from '/public/img/Winter.gif';

type WeatherBlockProp = {
  cityName: string | undefined;
  latitude: number | undefined;
  longitude: number | undefined;
  isLoad: boolean;
  setIsLoad: Dispatch<SetStateAction<boolean>>;
};

export function WeatherBlock({
  latitude,
  longitude,
  cityName,
  isLoad,
  setIsLoad
}: WeatherBlockProp) {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);
  // console.log("weatherData", weatherData);

  useEffect(() => {
    const getDataCurrentWeather = async () => {
      getCurrentWeather({ latitude, longitude })
        .then((res) => {
          setWeatherData(res);
          setIsLoad(false);
        })
        .catch((error) => {
          console.log(error);
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
