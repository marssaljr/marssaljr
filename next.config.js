const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    api_endpoint: process.env.api_endpoint,
    username: process.env.username,
    password: process.env.password,
    email_password: process.env.email_password,
    from: process.env.from,
    to: process.env.to,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
