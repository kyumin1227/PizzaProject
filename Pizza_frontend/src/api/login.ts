import axios from "axios";
import api from ".";
import { getUser } from "./user";
import { Navigate } from "react-router-dom";

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
  const res = await api.post("/api/login", loginData);

  // 로그인 성공 시 토큰을 이용하여 유저 정보 받아옴
  if (res.status == 200) {
    return res;
    // const { accessToken, refreshToken } = res.data;
    // await getUser(accessToken);
    // return res;
  }
};
