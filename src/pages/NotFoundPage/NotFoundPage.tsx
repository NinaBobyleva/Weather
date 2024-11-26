import { Link } from "react-router-dom";
import { paths } from "../../path";

export function NotFoundPage() {
  return (
    <div>
      <div>404</div>
      <h1>Not Found</h1>
      <Link to={paths.HOME}>
        Вернитесь на главную страницу
      </Link>
    </div>
  );
}
