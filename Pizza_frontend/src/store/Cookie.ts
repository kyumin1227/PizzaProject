// refresh token 저장소

import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setRefreshToken = (refreshToken: string) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 30); // 토큰의 만료 기한을 30일로 설정

  return cookies.set("refreshToken", refreshToken, {
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getRefreshToken = () => {
  return cookies.get("refreshToken");
};

export const removeRefreshToken = () => {
  return cookies.remove("refreshToken");
};
