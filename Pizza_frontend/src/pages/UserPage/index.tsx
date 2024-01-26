import { useLocation } from "react-router-dom";
import store from "../../store";
import { clearUser } from "../../store/User";
import { removeRefreshToken } from "../../store/Cookie";
import { deleteAccessToken } from "../../store/Auth";

const UserPage = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const userId = pathname.slice(6);

  const handleLogOut = () => {
    store.dispatch(clearUser());
    store.dispatch(deleteAccessToken());
    removeRefreshToken();
    return;
  };

  return (
    <>
      userPage {userId}
      <br />
      <button onClick={handleLogOut}>logout</button>
    </>
  );
};

export default UserPage;
