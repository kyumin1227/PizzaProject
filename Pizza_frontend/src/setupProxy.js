//setupProxy.js

import createProxyMiddleware from "http-proxy-middleware";

// src/setupProxy.js
export default function (app) {
  app.use(
    "/auth",
    createProxyMiddleware({
      target: "http://localhost:8080/devracoon/",
      changeOrigin: true,
    })
  );
}
