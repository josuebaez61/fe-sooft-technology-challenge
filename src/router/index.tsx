import { Route, Routes } from "react-router";
import HomePage from "../components/Pages";

export default function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}
