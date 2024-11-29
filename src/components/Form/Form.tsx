import React, { useState } from "react";

export function Form({
  setCityName,
}: {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}) {
    const [newCityName, setNewCityName] = useState('');

    const handleNewCityForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCityName(newCityName);
        setNewCityName('');
    }

  return (
    <form onSubmit={handleNewCityForm} className="flex flex-row gap-4 justify-center mt-8">
      <div className="">
        <div className="">
          <input
            onChange={(e) => setNewCityName(e.target.value)}
            type="search"
            className=" w-[600px] border-2 rounded-2xl px-5 py-2 outline-none"
            value={newCityName}
            placeholder="Введите город"
          />
        </div>
      </div>

      <div className="">
        <button type="submit" className=" font-sans bg-slate-400 px-7 py-2 rounded-2xl">
          Найти
        </button>
      </div>
    </form>
  );
}
