import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MuiPage from "./pages/MuiPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import Nav from "./components/Nav";
import BottomNav from "./components/BottomNav";
import "./reset.css";
import { Paper } from "@mui/material";
import OrderPage from "./pages/OrderPage";
import RegisterPage from "./pages/RegisterPage";
import StorePage from "./pages/StorePage";

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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/user/:userId" element={<UserPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/stores" element={<StorePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
