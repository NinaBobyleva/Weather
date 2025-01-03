import * as renderer from "react-test-renderer";
import { WeatherDailyItem } from "./WeatherDailyItem";

describe("Компонент WeatherDailyItem", () => {
  it("Успешный рендер компонента WeatherDailyItem", () => {
    const component = renderer
      .create(
        <WeatherDailyItem
          temperature={{
            max: 2.75,
            min: -1.34,
          }}
          timezoneOffset={10800}
          time={1733302168}
          weather={[{
            description: "пасмурно",
            icon: "10d",
          }]}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
