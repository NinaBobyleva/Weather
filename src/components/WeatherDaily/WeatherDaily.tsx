import { WeatherDailyType } from "../../type";
import { WeatherDailyItem } from "../WeatherDailyItem/WeatherDailyItem";

type WeatherDailyProp = {
  weatherDaily: WeatherDailyType[] | undefined;
  timezoneOffset: number | undefined;
};

export function WeatherDaily({
  weatherDaily,
  timezoneOffset,
}: WeatherDailyProp) {
  // console.log("weatherDaily", weatherDaily?.slice(1, -2));

  return (
    <div>
      <div className="py-[16px] px-[4.5px] w-[320px] md:h-[400px] sm:w-[500px] md:w-[700px] rounded-3xl bg-blue-100">
        <div className="text-left pl-3 pt-8 mb-[10px]">
          <h3 className="font-medium text-[22px] md:text-[24px]">Прогноз на 5 дней</h3>
        </div>
        <div className="">
          <ul className="flex gap-1 py-4 px-3">
            {weatherDaily?.slice(1, -2).map((el, i) => (
              <WeatherDailyItem
                key={i}
                temperature={el.temp}
                time={el.dt}
                timezoneOffset={timezoneOffset}
                weather={el.weather}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
