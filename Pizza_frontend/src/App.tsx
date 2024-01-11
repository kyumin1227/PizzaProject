import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
