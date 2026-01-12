import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/header";
import Work from "./pages/Work";
// import Footer from "./pages/Footer";


export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}
