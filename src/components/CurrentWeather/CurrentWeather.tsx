import { CityName, WeatherCurrentType } from "../../type";
import { timeFormat } from "../../utils/helpers";

type CurrentWeatherProp = {
  cityName: CityName | undefined;
  weatherCurrent: WeatherCurrentType | undefined;
  timezoneOffset: number;
};

export function CurrentWeather({
  cityName,
  weatherCurrent,
  timezoneOffset,
}: CurrentWeatherProp) {
  const icon = weatherCurrent?.weather.map((el) => el.icon);
  const description = weatherCurrent?.weather.map((el) => el.description);

  let [correctTime]: string[] = [];

  if (weatherCurrent) {
    [correctTime] = timeFormat({
      time: weatherCurrent.dt,
      timezone: timezoneOffset,
    });
  }
  return (
    <div className="py-[32px] px-[4.5px] md:px-[10px] w-[320px] h-[270px] md:h-[400px] md:w-[550px] rounded-3xl bg-blue-100">
      <div className="flex flex-col items-center">
        <h3 className="text-[22px] text-center md:text-[32px] md:pb-1">
          {cityName?.ru}
        </h3>
        <span className="text-[16px] md:text-[30px] text-slate-400 text-left">
          Сегодня {correctTime}
        </span>
      </div>
      <div className="flex flex-nowrap justify-center items-center gap-[5px] md:gap-[15px] md:py-2">
        <div className="flex w-[97px] md:w-[130px]">
          <p className="text-[42px] md:text-[56px] pl-8">
            {weatherCurrent?.temp && Math.round(weatherCurrent?.temp)}
          </p>
          <img
            src="/public/img/gradus.png"
            alt="Градусы Цельсия"
            className="w-[12px] h-[12px] md:w-[20px] md:h-[20px] relative top-[15px] md:top-[20px]"
          />
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={`${description}`}
          className=" w-[97px] md:w-[130px]"
        />
        <p className="text-[14px] w-[97px] text-center md:text-[22px] md:w-[150px]">
          {description}
        </p>
      </div>
      <div className="flex flex-nowrap justify-around md:pt-6">
        <div className="flex flex-row items-center gap-1">
          <img
            src="./img/icons8-ветер-40.png"
            alt="Скорость ветра"
            className="w-[25px] md:w-[30px] h-[25px] md:h-[30px]"
          />
          <p className="text-[28px] md:text-[32px]">
            {weatherCurrent?.wind_speed &&
              Math.round(weatherCurrent?.wind_speed)}{" "}
            м/с
          </p>
        </div>
        <div className="flex flex-row items-center gap-1">
          <img
            src="./img/icons8-влажный-40.png"
            alt="Влажность"
            className="w-[25px] md:w-[30px] h-[25px] md:h-[30px]"
          />
          <p className="text-[28px] md:text-[32px]">
            {weatherCurrent?.humidity}%
          </p>
        </div>
      </div>
    </div>
  );
}
