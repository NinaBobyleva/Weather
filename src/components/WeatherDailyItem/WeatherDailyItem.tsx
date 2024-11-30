import { TemperatureType, WeatherType } from "../../type";
import { timeFormat } from "../../utils/helpers";

type WeatherDailyItemProp = {
  temperature: TemperatureType;
  timezoneOffset: number | undefined;
  time: number;
  weather: WeatherType[];
};

export function WeatherDailyItem({
  temperature,
  timezoneOffset,
  time,
  weather,
}: WeatherDailyItemProp) {
  const icon = weather?.map((el) => el.icon);
  const description = weather?.map((el) => el.description);
  const tempDay = Math.round(temperature.day);
  const tempNight = Math.round(temperature.night);

  let [correctTimeDay, correctTime]: string[] = [];

  if (time && timezoneOffset) {
    [correctTimeDay, correctTime] = timeFormat({
      time: time,
      timezone: timezoneOffset,
    });
  }

  return (
    <li>
      <div className="flex flex-col items-start">
        <div className="sm:text-[22px]">
          <p className="sm:text-[24px] font-bold text-left">{correctTimeDay}</p>
          <p className="sm:text-[24px] text-left">{correctTime}</p>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={`${description}`}
            className="relative left-[-26px]"
          />
        </div>
        <div className="text-center pb-2">
          <div className="w-7 flex">
            <p className="font-bold text-[20px]">{tempDay}</p>
            <img src="/public/circle.png" alt="#" className="w-[16px] relative top-[4px]" />
          </div>
          <div className="w-7 flex">
            <p className="text-slate-500 text-[16px]">{tempNight}</p>
            <img src="/public/circle.png" alt="#" className="w-[14px] opacity-25 relative top-[3px]" />
          </div>
        </div>
        <p className="w-20 sm:text-[16px] text-left">{description}</p>
      </div>
    </li>
  );
}
