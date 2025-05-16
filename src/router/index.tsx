import { Route, Routes } from "react-router";
import HomePage from "../components/Pages/HomePage";

export default function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}
