import axios from "axios";
import api from ".";

/**
 * 로그인 요청
 * @param id
 * @param password
 * @returns 요청 결과 반환 (res)
 */
export const postLogin = async (id: string, password: string) => {
  const loginData = {
    id,
    password,
  };
  const res = await api.post("/login", loginData);
  return res;
};
