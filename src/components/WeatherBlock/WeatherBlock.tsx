import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { WeatherFiveDays } from "../WeatherFiveDays/WeatherFiveDays";

export function WeatherBlock({cityName}: {cityName: string | undefined}) {
  
  return (
    <div className="mt-16 flex flex-wrap items-center gap-10">
      <CurrentWeather cityName={cityName} />
      <WeatherFiveDays/>
    </div>
  );
}
