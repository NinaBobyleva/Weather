const BASE_URL = "https://api.openweathermap.org/";

const token = import.meta.env.VITE_APP_TOKEN;

export async function getGeo(newCityName: string) {
  const res = await fetch(
    `${BASE_URL}geo/1.0/direct?q=${newCityName}&appid=${token}`
  );

  const response = await res.json();

  if (res.status === 400) {
    throw new Error("Введите город");
  }

  if (Array.isArray(response) && response.length === 0) {
    throw new Error("Параметры введены не правильно. Попробуйте еще раз.");
  }

  if (!res.ok) {
    throw new Error("Что-то пошло не так.");
  }

  return response;
}

export async function getWeather({
  latitude,
  longitude,
}: {
  latitude: number | undefined;
  longitude: number | undefined;
}) {
  if (!latitude && !longitude) {
    return;
  }
  const res = await fetch(
    `${BASE_URL}data/3.0/onecall?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&exclude=minutely,hourly,alerts&appid=${token}`
  );

  const response = await res.json();
 
  if (res.status === 400) {
    throw new Error("Не правильный запрос.");
  }

  if (res.status === 401) {
    throw new Error("Нет авторизации.");
  }

  if (res.status === 404) {
    throw new Error("По вашему запросу ничего не найдено.");
  }

  if (res.status === 429) {
    throw new Error("Превышен лимит запросов.");
  }

  if (!res.ok) {
    throw new Error("Что-то пошло не так.");
  }

  return response;
}
