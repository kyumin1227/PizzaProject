import axios from "axios";
import api from ".";
import { getUser } from "./user";

/**
 * 로그인 요청
 * @param id
 * @param password
 * @returns 요청 결과 반환 (res.data)
 */
export const postLogin = async (id: string, password: string) => {
  const loginData = {
    id,
    password,
  };
  const res = await api.post("/login", loginData);
  if (res.data.status == 200) {
    const { accessToken, refreshToken } = res.data;
    await getUser(accessToken);
  }
};
