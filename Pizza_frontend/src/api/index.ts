import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://60021627-16df-4376-93d9-1ea16dd71f28.mock.pstmn.io", // mock server
  withCredentials: true, // 서로 다른 도메인에 요청을 보낼 때 요청에 쿠키, Authorization 항목이 있다면 옵션을 true로 설정
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

api.defaults.withCredentials = true;

axios.defaults.withCredentials = true;

export default api;
