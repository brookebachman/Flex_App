// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/oura-api",
    createProxyMiddleware({
      target: "https://api.ouraring.com",
      changeOrigin: true,
      pathRewrite: {
        "^/oura-api": "/v2/usercollection/personal_info",
      },
    })
  );
};
