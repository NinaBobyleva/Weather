import * as renderer from "react-test-renderer";
import { Form } from "./Form";

describe("Компонент Form", () => {
  it("Успешный рендер компонента Form", () => {
    const setNewCityName = jest.fn();
    const component = renderer
      .create(<Form setInputCityName={setNewCityName} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
