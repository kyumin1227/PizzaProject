import { useLocation } from "react-router-dom";

const UserPage = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const userId = pathname.slice(6);

  return "userPage " + userId;
};

export default UserPage;
