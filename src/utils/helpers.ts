const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

export const timeFormat = ({time, timezone}: {time: number, timezone: number}) => {
    const startTime = time + timezone;
    // Умножаем на 1000 чтобы перевести число в миллисекуды
    const newTime = new Date(startTime * 1000);
    const finalTime = days[newTime.getDay()] + " " + newTime.getDate() + " " + months[newTime.getMonth()];
    return finalTime;
};