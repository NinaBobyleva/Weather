import { useEffect, useState } from "react";
import { Form } from "../../components/Form/Form";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { getGeo } from "../../api/api";
import { WeatherBlock } from "../../components/WeatherBlock/WeatherBlock";
import { GeoDataType } from "../../type";

export function HomePage() {
  const [error, setError] = useState("");
  const [inputCityName, setInputCityName] = useState("");
  const [geoData, setGeoData] = useState<GeoDataType[]>([]);

  const cityName = geoData?.find((el) => el.local_names);
  const lat = geoData?.find((el) => el.lat);
  const lon = geoData?.find((el) => el.lon);

  useEffect(() => {
    if (!inputCityName) {
      return;
    }
    const getDataGeo = async () => {
      getGeo(inputCityName)
        .then((res) => {
          setGeoData(res);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    getDataGeo();
  }, [inputCityName]);

  return (
    <Wrapper>
      <div>
        <div className="mt-14 sm:mt-28">
          <h1 className="font-semibold text-[24px] sm:text-[28px] md:text-[48px] text-center">
            Прогноз погоды в вашем городе
          </h1>
        </div>
        <Form setInputCityName={setInputCityName} />
        <p className="text-red-600 text-center text-2xl">{error && error}</p>
        <div>
          {error ? null : (
            <WeatherBlock
              latitude={lat?.lat}
              longitude={lon?.lon}
              cityName={cityName?.local_names}
              setError={setError}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
}
