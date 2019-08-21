const proxy = require("http-proxy-middleware");

const { REACT_APP_API_VERSION = "v1" } = process.env;

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://localhost:3001",
      pathRewrite: {
        "^/api": `/api/${REACT_APP_API_VERSION}`,
      },
    })
  );
};
