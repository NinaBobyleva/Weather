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
      className="flex flex-row gap-4 justify-center mt-8"
    >
      <div className="">
        <div className="">
          <input
            onChange={(e) => setCityNameInput(e.target.value)}
            type="search"
            className=" w-[600px] border-2 rounded-2xl px-5 py-2 outline-none"
            value={cityNameInput}
            placeholder="Введите город"
          />
        </div>
      </div>

      <div className="">
        <button
          type="submit"
          className=" font-sans bg-slate-400 px-7 py-2 rounded-2xl"
        >
          Найти
        </button>
      </div>
    </form>
  );
}
