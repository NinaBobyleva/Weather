type ErrorProp = {
  errorName: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

export function getErrorText({ errorName, setError }: ErrorProp) {
  switch (errorName) {
    case "400":
      setError("Запрос не удался, попробуйте ввести другие параметры");
      break;
    case "429":
      setError("Лимит запросов превышен, попробуйте позже");
      break;
    case "Service unavailable":
      setError("Сервис не доступен, попробуйте позже");
      break;
    default:
      setError("Что-то пошло не так");
      break;
  }
}
