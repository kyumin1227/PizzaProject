import { useEffect, useState } from "react";
import { getUser } from "../../api/user";

const MainPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const res = getUser(accessToken);
      console.log(res);
    }
  }, []);
  return <div>hello</div>;
};

export default MainPage;
