import { TemperatureType, WeatherType } from "../../type";
import { timeFormat } from "../../utils/helpers";

type WeatherDailyItemProp = {
  temperature: TemperatureType;
  timezoneOffset: number;
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
  const tempMax = Math.round(temperature.max);
  const tempMin = Math.round(temperature.min);

  const correctTime = timeFormat({
    time: time,
    timezone: timezoneOffset,
  });

  return (
    <li className="w-[100px] md:w-[150px]">
      <div className="">
        <div className="">
          <p className="text-[12px] md:text-[24px] font-bold text-left">{correctTime[0]}</p>
          <p className="text-[12px] md:text-[24px] text-left">{correctTime[1]}</p>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={`${description}`}
            className="relative right-4 h-[50px] md:h-[90px] w-[60px] md:w-[90px]"
          />
        </div>
        <div className="pb-[15px]">
          <div className="w-7 flex">
            <p className="font-bold text-[12px] md:text-[24px]">{tempMax}</p>
            <img src="./img/circle.png" alt="#" className="w-[10px] md:w-[18px] h-[20px] md:h-[26px] relative top-[1px] md:top-[6px]" />
          </div>
          <div className="w-7 flex">
            <p className="text-slate-500 text-[10px] md:text-[20px]">{tempMin}</p>
            <img src="./img/circle.png" alt="#" className="w-[8px] md:w-[16px] h-[16px] md:h-[22px] opacity-25 relative md:top-[3px]" />
          </div>
        </div>
        <p className="text-[9px] md:text-[18px] text-left">{description}</p>
      </div>
    </li>
  );
}
