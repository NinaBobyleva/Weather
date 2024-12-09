import { WeatherDailyType } from "../../type";
import { WeatherDailyItem } from "../WeatherDailyItem/WeatherDailyItem";

type WeatherDailyProp = {
  weatherDaily: WeatherDailyType[] | undefined;
  timezoneOffset: number;
};

export function WeatherDaily({
  weatherDaily,
  timezoneOffset,
}: WeatherDailyProp) {
  return (
    <div>
      <div className="py-[26px] px-[4.5px] w-[320px] h-[280px] md:h-[400px] sm:w-[500px] md:w-[700px] rounded-3xl bg-blue-100">
        <div className="text-left pl-3 md:pl-6 mb-[8px]">
          <h3 className="font-medium text-[22px] md:text-[26px]">
            Прогноз на 5 дней
          </h3>
        </div>
        <div className="">
          <ul className="flex gap-1 md:gap-4 py-4 px-3 md:px-6">
            {weatherDaily?.slice(0, -3).map((el, i) => (
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
