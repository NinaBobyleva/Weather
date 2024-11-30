import { useEffect, useState } from "react";
import { Form } from "../../components/Form/Form";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { getGeo } from "../../api/api";
import { WeatherBlock } from "../../components/WeatherBlock/WeatherBlock";
import { GeoDataType } from "../../type";

export function HomePage() {
  const [newCityName, setNewCityName] = useState("");
  const [geoData, setGeoData] = useState<GeoDataType | null>(null);

  const cityName = geoData?.local_names;

  useEffect(() => {
    const getDataGeo = async () => {
      getGeo(newCityName).then((res) => {
        setGeoData(res[0]);
      });
    };

    getDataGeo();
  }, [newCityName]);

  return (
    <Wrapper>
      <div>
        <h1 className="font-montserrat font-medium sm:text-[60px] mt-[100px] mb-8 text-center">
          Прогноз погоды в вашем городе
        </h1>
        <Form setNewCityName={setNewCityName} />
        <div>
          <WeatherBlock
            latitude={geoData?.lat}
            longitude={geoData?.lon}
            cityName={cityName?.ru}
          />
        </div>
      </div>
    </Wrapper>
  );
}
