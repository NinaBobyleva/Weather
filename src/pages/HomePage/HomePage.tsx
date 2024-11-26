export function HomePage() {
  return (
    <div className="">
      <h1 className="">Прогноз погоды в вашем городе</h1>
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
  );
}
