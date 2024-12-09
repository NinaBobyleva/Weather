import { useState } from "react";

export function Form({
  setInputCityName,
}: {
  setInputCityName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [inputName, setInputName] = useState("");

  const handleSendInputNameForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputCityName(inputName);
    setInputName("");
  };

  return (
    <form
      onSubmit={handleSendInputNameForm}
      className="flex flex-wrap xl:flex-nowrap justify-center gap-4 py-8 sm:py-8 md:py-12"
    >
      <input
        onChange={(e) => setInputName(e.target.value)}
        type="search"
        className="border-2 rounded-2xl px-5 py-2 outline-none w-[320px] sm:w-[500px] md:w-[700px]"
        value={inputName}
        placeholder="Введите город"
      />

      <button className="bg-slate-400 px-7 py-2 rounded-2xl">Найти</button>
    </form>
  );
}
