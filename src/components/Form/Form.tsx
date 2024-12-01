import React, { useState } from "react";

export function Form({
  setNewCityName: setNewCityName,
}: {
  setNewCityName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [cityNameInput, setCityNameInput] = useState("");

  const handleNewCityForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewCityName(cityNameInput);
    setCityNameInput("");
  };

  return (
    <form
      onSubmit={handleNewCityForm}
      className="flex flex-wrap xl:flex-nowrap justify-center gap-4 py-4 sm:py-8 md:py-12"
    >
      <input
        onChange={(e) => setCityNameInput(e.target.value)}
        type="search"
        className="border-2 rounded-2xl px-5 py-2 outline-none w-[320px] sm:w-[500px] md:w-[700px]"
        value={cityNameInput}
        placeholder="Введите город"
      />

      <button
        type="submit"
        className="bg-slate-400 px-7 py-2 rounded-2xl"
      >
        Найти
      </button>
    </form>
  );
}
