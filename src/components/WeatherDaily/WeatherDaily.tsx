import { WeatherDailyType } from "../../type";
import { WeatherDailyItem } from "../WeatherDailyItem/WeatherDailyItem";

type WeatherDailyProp = {
  weatherDaily: WeatherDailyType[] | undefined;
  timezoneOffset: number | undefined;
}

export function WeatherDaily({weatherDaily, timezoneOffset}: WeatherDailyProp) {
  // console.log("weatherDaily", weatherDaily?.slice(1, -2));
  
  return (
    <div className="border-4 h-[400px] w-[900px] rounded-3xl bg-blue-100">
      <div className="text-left pl-5 pt-8 sm:text-[24px]">
        <h3 className="text-4xl mb-[10px]">Прогноз на 5 дней</h3>
      </div>
      <div className="">
        <ul className="flex justify-between py-4 px-5">
          {weatherDaily?.slice(1, -2).map((el, i) => (
            <WeatherDailyItem key={i} temperature={el.temp} time={el.dt} timezoneOffset={timezoneOffset} weather={el.weather} />
          ))}
        </ul>
      </div>
    </div>
  );
}
