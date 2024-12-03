import { useEffect, useState } from "react";
import { Form } from "../../components/Form/Form";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { getGeo } from "../../api/api";
import { WeatherBlock } from "../../components/WeatherBlock/WeatherBlock";
import { GeoDataType } from "../../type";

export function HomePage() {
  const [isLoad, setIsLoad] = useState(false);
  const [newCityName, setNewCityName] = useState("");
  const [geoData, setGeoData] = useState<GeoDataType | null>(null);

  const cityName = geoData?.local_names;

  useEffect(() => {
    setIsLoad(true);
    const getDataGeo = async () => {
      getGeo(newCityName).then((res) => {
        setGeoData(res[0]);
      })
      .catch((error) => {
        console.log(error);
      })
    };

    getDataGeo();
  }, [newCityName]);

  return (
    <Wrapper>
      <div>
        <div className="mt-14 sm:mt-28 xl:mt-32">
          <h1 className="font-semibold text-[24px] sm:text-[28px] md:text-[48px] text-center">
            Прогноз погоды в вашем городе
          </h1>
        </div>
        <Form setNewCityName={setNewCityName} />
        <div>
          <WeatherBlock
            latitude={geoData?.lat}
            longitude={geoData?.lon}
            cityName={cityName?.ru}
            isLoad={isLoad}
            setIsLoad={setIsLoad}
          />
        </div>
      </div>
    </Wrapper>
  );
}
