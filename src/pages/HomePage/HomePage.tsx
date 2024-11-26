import { Wrapper } from "../../components/Wrapper/Wrapper";

export function HomePage() {
  return (
    <Wrapper>
      <div className="">
        <h1 className="font-montserrat font-medium sm:text-[60px] mt-[260px] text-center">
          Прогноз погоды в вашем городе
        </h1>
        <form className="">
          <div className="">
            <div className="">
              <input type="search" className="" placeholder="Введите город" />
            </div>
          </div>

          <div className="">
            <button type="submit" className="">
              Найти
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
