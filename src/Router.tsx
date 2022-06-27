
import { Routes, Route } from "react-router-dom";
import { Evento } from "./Pages/Evento";
import { Subscribe } from "./Pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/evento" element={<Evento />} />
      <Route path="/evento/lesson/:slug" element={<Evento />} />
    </Routes>

  );
}