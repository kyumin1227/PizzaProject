import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MuiPage from "./pages/MuiPage";
import LoginPage from "./pages/LoginPage";
import Nav from "./components/Nav";
import BottomNav from "./components/BottomNav";
import "./reset.css";
import { Paper } from "@mui/material";

function App() {
  const Layout = () => {
    return (
      <>
        <Nav />
        <Outlet />
        <Paper sx={{ position: "fixed", bottom: 0 }}>
          <BottomNav />
        </Paper>
      </>
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/mui" element={<MuiPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
