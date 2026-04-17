import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import Result from "./pages/Result";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}
