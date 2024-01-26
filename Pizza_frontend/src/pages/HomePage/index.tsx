import { useEffect, useState } from "react";
import { getUser } from "../../api/user";

const MainPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const callGetUser = async (accessToken) => {
      const res = await getUser(accessToken);
      console.log(res);
      return res;
    };
    if (accessToken) {
      const res = callGetUser(accessToken);
    }
  }, []);
  return <div>hello</div>;
};

export default MainPage;
