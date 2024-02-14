import axios from "axios";
import api from ".";
import store from "../store";
import { setUser } from "../store/User";
import { postLogin } from "./login";

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

export const amendUser = async (data, accessToken: string) => {
  const res = await api.put(
    `/api/user/${data.userId}`,
    {
      headers: {
        Authorization: accessToken,
      },
    },
    data
  );
};

export const createUser = async (
  id: string,
  password: string,
  email: string
) => {
  // 테스트를 위해 axios 사용 나중에 url 수정 필요
  const res = await api.post("/api/user/create", {
    id,
    password,
    email,
  });
  if (res.status == 200) {
    await postLogin(id, password);
  } else if (res.status == 400) {
    return res.data;
  }
};
