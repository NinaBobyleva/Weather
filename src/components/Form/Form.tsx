export function Form() {
  return (
    <form className="flex flex-row gap-4 justify-center">
      <div className="">
        <div className="">
          <input type="search" className=" w-[600px] border-2 rounded-2xl px-5 py-2 outline-none" placeholder="Введите город" />
        </div>
      </div>

      <div className="">
        <button type="submit" className="bg-slate-400 px-7 py-2 rounded-2xl">
          Найти
        </button>
      </div>
    </form>
  );
}
