import api from ".";
import store from "../store";
import { setUser } from "../store/User";

/**
 * 유저 정보 받아오기
 * @returns
 */
export const getUser = async (accessToken: string) => {
  const res = await api.get("/user", {
    headers: {
      Authorization: accessToken,
    },
  });
  if (res.data.status == 200) {
    store.dispatch(setUser(res.data));
  }
};
