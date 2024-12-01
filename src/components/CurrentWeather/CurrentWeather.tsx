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
  timezoneOffset,
}: CurrentWeatherProp) {
  const icon = weatherCurrent?.weather.map((el) => el.icon);
  const description = weatherCurrent?.weather.map((el) => el.description);

  let [correctTime]: string[] = [];

  if (weatherCurrent?.dt && timezoneOffset) {
    [correctTime] = timeFormat({
      time: weatherCurrent?.dt,
      timezone: timezoneOffset,
    });
  }
  return (
    <div className="border-4 h-[400px] w-[600px] rounded-3xl bg-blue-100">
      <div className="flex flex-col items-center pt-8 sm:text-[24px]">
        <h3 className="text-4xl mb-[10px]">Погода {cityName}</h3>
        <span className="text-slate-400 text-left">Сегодня {correctTime}</span>
      </div>
      <div className="flex flex-row items-center justify-center pt-8 gap-10">
        <div className="w-24">
          <p className="sm:text-[60px] text-center">
            {weatherCurrent?.temp && Math.round(weatherCurrent?.temp)}
          </p>
          <img src="/public/gradus.png" alt="Градусы Цельсия" className="w-5 h-5 relative top-[-69px] right-[-64px]" />
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={`${description}`}
        />
        <p className="sm:text-[32px] w-[200px] text-center">{description}</p>
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
