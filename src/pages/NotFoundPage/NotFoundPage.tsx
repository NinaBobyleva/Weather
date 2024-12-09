import { Link } from "react-router-dom";
import { paths } from "../../path";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-2 mt-48">
      <h1 className="text-bold text-8xl">404</h1>
      <p className="text-6xl">Not Found</p>
      <Link className="text-xl text-slate-500" to={paths.HOME}>
        Вернитесь на главную страницу
      </Link>
    </div>
  );
}
