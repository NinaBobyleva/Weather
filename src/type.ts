export type CityType = {
  name: string;
};

export type GeoDataType = {
  lat: number;
  lon: number;
  local_names: CityName;
};

export type CityName = {
  ru: string;
};

export type WeatherDataType = {
  humidity: number;
  temp: number;
  dt: number;
  wind_speed: number;
  weather: WeatherType[];
};

export type WeatherType = {
  description: string;
  icon: string;
};
