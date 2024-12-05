const months = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

export const timeFormat = ({time, timezone}: {time: number, timezone: number}) => {
    const timezoneMoscow = 10800;
    // Умножаем на 1000 чтобы перевести число в миллисекуды
    const startTime = (timezone + (time - timezoneMoscow)) * 1000;
    const newTime = new Date(startTime);
    const finalTime =newTime.getDate() + " " + months[newTime.getMonth()];
    const finalTimeDay = days[newTime.getDay()];
    return [finalTimeDay, finalTime];
};