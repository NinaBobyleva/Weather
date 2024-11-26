import { Route, Routes } from "react-router-dom";
import { paths } from "./path";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

export function AppRoutes() {
    return (
      <Routes>
        <Route path={paths.HOME} element={<HomePage />} />
        <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    );
  }