import { useEffect, useState } from "react";
import { getUser } from "../../api/user";
import store from "../../store";
import { useSelector } from "react-redux";

const MainPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const { accessToken } = useSelector((state) => {
    return state.token;
  });
  const { isLogin } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    console.log("accessToken: " + accessToken);
    console.log("isLogin: " + isLogin);

    const callGetUser = async (accessToken) => {
      await getUser(accessToken);
      return;
    };

    if (accessToken != null && !isLogin) {
      callGetUser(accessToken);
    }
  }, [accessToken, isLogin]);
  return <div>hello</div>;
};

export default MainPage;
