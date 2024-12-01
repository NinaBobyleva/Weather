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
    <div className="py-[16px] px-[4.5px] w-[320px] sm:h-[300px] sm:w-[500px] rounded-3xl bg-blue-100">
      <div className="flex flex-col items-center">
        <h3 className="text-[22px] md:text-[36px]">
          Погода {cityName}
        </h3>
        <span className="text-[16px] md:text-[32px] text-slate-400 text-left">
          Сегодня {correctTime}
        </span>
      </div>
      <div className="flex flex-nowrap justify-center items-center gap-[5px]">
        <div className="md:w-24 flex w-[97px]">
          <p className="text-[42px] md:text-[60px] pl-8">
            {weatherCurrent?.temp && Math.round(weatherCurrent?.temp)}
          </p>
          <img
            src="/public/gradus.png"
            alt="Градусы Цельсия"
            className="w-[12px] h-[12px] md:w-[20px] md:h-[20px] relative top-[15px]"
          />
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={`${description}`}
          className=" w-[97px]"
        />
        <p className="text-[14px] w-[97px] text-center md:text-[32px] md:w-[200px]">
          {description}
        </p>
      </div>
      <div className="flex flex-nowrap justify-around">
        <div className="flex flex-row items-center gap-1">
          <img
            src="./icons8-ветер-40.png"
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
            src="./icons8-влажный-40.png"
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
