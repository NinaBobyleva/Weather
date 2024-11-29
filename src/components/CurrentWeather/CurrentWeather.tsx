import { WeatherType } from "../../type";
import { timeFormat } from "../../utils/helpers";

type CurrentWeatherProp = {
  cityName: string | undefined;
  temp: number | undefined;
  wind_speed: number | undefined;
  humidity: number | undefined;
  weather: WeatherType[] | undefined;
  time: number | undefined;
};

export function CurrentWeather({
  cityName,
  temp,
  wind_speed,
  humidity,
  weather,
  time,
}: CurrentWeatherProp) {
  const icon = weather?.map((el) => el.icon);
  const description = weather?.map((el) => el.description);

  let correctTime;

  if (time) {
    correctTime = timeFormat(time);
  }
  return (
    <div className="border-4 h-[400px] w-[600px] rounded-3xl bg-blue-100">
      <div className="text-center pt-8 sm:text-[24px]">
        <h3>Погода в городе {cityName}</h3>
        <span>Сегодня {correctTime}</span>
      </div>
      <div className="flex flex-row items-center justify-center pt-8 gap-8 h-[150px]">
        <p className="sm:text-[60px]">{temp && Math.round(temp)}</p>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${description}`} className="h-[100px] w-[100px]" />
        <p className="sm:text-[42px]">{description}</p>
      </div>
      <div className="flex flex-row items-center justify-around gap-8 h-[150px]">
        <div className="flex flex-row items-center gap-1">
          <img src="./icons8-ветер-40.png" alt="Скорость ветра" />
          <p className="sm:text-[32px]">
            {wind_speed && Math.round(wind_speed)}
          </p>
        </div>
        <div className="flex flex-row items-center gap-1">
          <img src="./icons8-влажный-40.png" alt="Влажность" />
          <p className="sm:text-[32px]">{humidity}</p>
        </div>
      </div>
    </div>
  );
}
