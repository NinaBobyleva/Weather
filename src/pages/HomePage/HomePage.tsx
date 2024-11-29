import { useEffect, useState } from "react";
import { Form } from "../../components/Form/Form";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { getGeo } from "../../api/api";
import { WeatherBlock } from "../../components/WeatherBlock/WeatherBlock";
import { GeoDataType } from "../../type";
import { timeFormat } from "../../utils/helpers";

export function HomePage() {
  const [cityNameInput, setCityNameInput] = useState("");
  const [geoData, setGeoData] = useState<GeoDataType | null>(null);
  
  console.log(geoData);

  const cityName = geoData?.local_names;

  useEffect(() => {
    const getDataGeo = async () => {
      getGeo(cityNameInput).then((res) => {
        console.log(res);
        setGeoData(res[0]);
      });
    };

    getDataGeo();
  }, [cityNameInput]);

  const time = timeFormat(1732887133);
  console.log(time);
  return (
    <Wrapper>
      <div className="">
        <h1 className="font-montserrat font-medium sm:text-[60px] mt-[240px] mb-8 text-center">
          Прогноз погоды в вашем городе
        </h1>
        <Form setCityName={setCityNameInput} />
        <div>
          <WeatherBlock
            lat={geoData?.lat}
            lon={geoData?.lon}
            cityName={cityName?.ru}
          />
        </div>
      </div>
    </Wrapper>
  );
}
