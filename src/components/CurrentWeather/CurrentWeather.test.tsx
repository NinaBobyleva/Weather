import * as renderer from "react-test-renderer";
import { CurrentWeather } from "./CurrentWeather";

describe("Компонент CurrentWeather", () => {
  it("Успешный рендер компонента CurrentWeather", () => {
    const component = renderer
      .create(
        <CurrentWeather
          cityName="Москва"
          weatherCurrent={{
            humidity: 97,
            temp: 27,
            dt: 1733302168,
            wind_speed: 3.27,
            weather: [],
          }}
          timezoneOffset={10800}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
