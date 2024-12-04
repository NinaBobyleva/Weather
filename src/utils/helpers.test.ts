import { timeFormat } from "./helpers"

describe ('Функция форматирования времени', () => {
    it ('Приводит секунды в нужный формат', () => {
        const time = 1733302168;
        const timezone = 10800;
        const result = timeFormat({time, timezone});
        expect(result).toStrictEqual(["ср", "4 дек"]);
    })
})