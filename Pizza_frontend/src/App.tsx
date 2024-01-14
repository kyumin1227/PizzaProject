import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MuiPage from "./pages/MuiPage";
import Nav from "./components/Nav";
// import "./reset.css";

function App() {
  const Layout = () => {
    return (
      <>
        <Nav />
        <Outlet />
      </>
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/mui" element={<MuiPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
