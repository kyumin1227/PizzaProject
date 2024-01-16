import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true, // 서로 다른 도메인에 요청을 보낼 때 요청에 쿠키, Authorization 항목이 있다면 옵션을 true로 설정
});

export default api;
