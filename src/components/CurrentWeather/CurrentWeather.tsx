import { WeatherCurrentType } from "../../type";
import { timeFormat } from "../../utils/helpers";

type CurrentWeatherProp = {
  cityName: string | undefined;
  weatherCurrent: WeatherCurrentType | undefined;
  timezoneOffset: number | undefined;
};

export function CurrentWeather({
  cityName,
  weatherCurrent,
  timezoneOffset
}: CurrentWeatherProp) {
    const icon = weatherCurrent?.weather.map((el) => el.icon);
    const description = weatherCurrent?.weather.map((el) => el.description);

  let correctTime;

  if (weatherCurrent?.dt && timezoneOffset) {
    correctTime = timeFormat({time: weatherCurrent?.dt, timezone: timezoneOffset});
  }
  return (
    <div className="border-4 h-[400px] w-[600px] rounded-3xl bg-blue-100">
      <div className="text-center pt-8 sm:text-[24px]">
        <h3 className="text-4xl mb-[10px]">Погода в городе {cityName}</h3>
        <span className="text-slate-400">Сегодня {correctTime}</span>
      </div>
      <div className="flex flex-row items-center justify-center pt-8 gap-8 h-[150px]">
        <p className="sm:text-[60px]">
          {weatherCurrent?.temp && Math.round(weatherCurrent?.temp)}
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={`${description}`}
          className="h-[100px] w-[100px]"
        />
        <p className="sm:text-[42px]">{description}</p>
      </div>
      <div className="flex flex-row items-center justify-around gap-8 h-[150px]">
        <div className="flex flex-row items-center gap-1">
          <img src="./icons8-ветер-40.png" alt="Скорость ветра" />
          <p className="sm:text-[32px]">
            {weatherCurrent?.wind_speed &&
              Math.round(weatherCurrent?.wind_speed)}{" "}
            м/с
          </p>
        </div>
        <div className="flex flex-row items-center gap-1">
          <img src="./icons8-влажный-40.png" alt="Влажность" />
          <p className="sm:text-[32px]">{weatherCurrent?.humidity}%</p>
        </div>
      </div>
    </div>
  );
}
