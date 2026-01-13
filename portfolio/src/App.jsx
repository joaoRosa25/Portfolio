import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}
