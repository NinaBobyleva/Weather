import { useEffect, useState } from "react";
import { Form } from "../../components/Form/Form";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { getCurrentWeather } from "../../api/api";
import { WeatherBlock } from "../../components/WeatherBlock/WeatherBlock";
import { CityType } from "../../type";

export function HomePage() {
  const [cityNameInput, setCityNameInput] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState<CityType | null>(null);
  console.log(weatherData);
  console.log(city?.name);

  // if (city) {
  //   const cityName = city.name;
  //   console.log(cityName);
  // }

  useEffect(() => {
    const getDataCurrentWeather = async () => {
      getCurrentWeather(cityNameInput).then((res) => {
        setWeatherData(res.current);
        setCity(res.location);
      });
    };

    getDataCurrentWeather();
  }, [cityNameInput]);
  return (
    <Wrapper>
      <div className="">
        <h1 className="font-montserrat font-medium sm:text-[60px] mt-[260px] text-center">
          Прогноз погоды в вашем городе
        </h1>
        <Form setCityName={setCityNameInput} />
        <div>
          <WeatherBlock cityName={city?.name} />
        </div>
      </div>
    </Wrapper>
  );
}
