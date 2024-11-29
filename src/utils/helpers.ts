const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

export const timeFormat = (time: number) => {
    const startTime = new Date(time * 1000);
    const finalTime = days[startTime.getDay()] + " " + startTime.getDate() + " " + months[startTime.getMonth()];
    return finalTime;
};