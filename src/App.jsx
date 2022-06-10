import { Route, Routes } from "react-router-dom";
import useUser from "./hooks/useUser";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  const { cargando } = useUser();

  if (cargando) {
    return <p>Cargando.......</p>;
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
