export type CityNameType = {
  ru: string;
};

export type GeoDataType = {
  lat: number;
  lon: number;
  local_names: CityNameType;
};

export type WeatherDataType = {
  current: WeatherCurrentType;
  daily: WeatherDailyType[];
  timezone_offset: number;
};

export type WeatherCurrentType = {
  humidity: number;
  temp: number;
  dt: number;
  wind_speed: number;
  weather: WeatherType[];
};

export type WeatherDailyType = {
  temp: TemperatureType;
  dt: number;
  weather: WeatherType[];
};

export type WeatherType = {
  description: string;
  icon: string;
};

export type TemperatureType = {
  day: number;
  night: number;
};
