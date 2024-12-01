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
    <li className="w-[100px]">
      <div className="">
        <div className="">
          <p className="text-[12px] md:text-[22px] font-bold text-left">{correctTimeDay}</p>
          <p className="text-[12px] md:text-[22px] text-left">{correctTime}</p>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={`${description}`}
            className="relative right-4 h-[50px] w-[60px]"
          />
        </div>
        <div className="pb-[15px]">
          <div className="w-7 flex">
            <p className="font-bold text-[12px] md:text-[20px]">{tempDay}</p>
            <img src="/public/circle.png" alt="#" className="w-[10px] h-[20px] md:w-[16px] relative top-[3px]" />
          </div>
          <div className="w-7 flex">
            <p className="text-slate-500 text-[10px] md:text-[16px]">{tempNight}</p>
            <img src="/public/circle.png" alt="#" className="w-[8px] h-[16px] md:w-[14px] opacity-25 relative top-[1px]" />
          </div>
        </div>
        <p className="text-[10px] md:text-[16px] text-left">{description}</p>
      </div>
    </li>
  );
}

// flex flex-col items-start
