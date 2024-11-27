import { Form } from "../../components/Form/Form";
import { Wrapper } from "../../components/Wrapper/Wrapper";

export function HomePage() {
  return (
    <Wrapper>
      <div className="">
        <h1 className="font-montserrat font-medium sm:text-[60px] mt-[260px] text-center">
          Прогноз погоды в вашем городе
        </h1>
        <Form/>
      </div>
    </Wrapper>
  );
}
