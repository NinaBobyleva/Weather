import * as renderer from "react-test-renderer";
import { Form } from "./Form";

describe("Компонент Form", () => {
  it("Успешный рендер компонента Form", () => {
    const setInputCityName = jest.fn();
    const component = renderer
      .create(<Form setInputCityName={setInputCityName} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
