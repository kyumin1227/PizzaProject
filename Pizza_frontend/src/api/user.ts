import api from ".";
import store from "../store";
import { setUser } from "../store/User";

/**
 * 유저 정보 받아오기
 * @returns
 */
export const getUser = async (id: string, accessToken: string) => {
  const res = await api.post(`/api/user/${id}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  if (res.status == 200) {
    store.dispatch(setUser(res.data));
    return;
  } else {
    return;
  }
};

export const amendUser = async (accessToken: string) => {
  const res = await api.post("/api/user", {
    headers: {
      Authorization: accessToken,
    },
  });
};
