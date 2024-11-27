import { useEffect, useState } from "react";
import { Form } from "../../components/Form/Form";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { getCurrentWeather } from "../../api/api";

export function HomePage() {
  const [cityName, setCityName] = useState("");
  console.log(cityName);

  useEffect(() => {
    const getDataCurrentWeather = async () => {
      getCurrentWeather(cityName)
      .then((res) => {
        const data = res;
        console.log(data);
      })
    }

    getDataCurrentWeather();
  }, [cityName])
  return (
    <Wrapper>
      <div className="">
        <h1 className="font-montserrat font-medium sm:text-[60px] mt-[260px] text-center">
          Прогноз погоды в вашем городе
        </h1>
        <Form setCityName={setCityName} />
      </div>
    </Wrapper>
  );
}
