import axios from "axios";
import api from ".";
import { getUser } from "./user";
import { Navigate, useNavigate } from "react-router-dom";
import store from "../store";
import { setAccessToken } from "../store/Auth";
import { setRefreshToken } from "../store/Cookie";

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

  // 로그인 성공 시 accessToken은 store에 저장, refreshToken은 cookie에 저장
  if (res.status == 200) {
    const { accessToken, refreshToken } = res.data;
    // accessToken을 넘기기 위해 object 생성
    const accessTokenData = {
      accessToken,
    };
    store.dispatch(setAccessToken(accessTokenData));
    setRefreshToken(refreshToken);
    getUser(id, accessToken);
    return res;
  }
};
