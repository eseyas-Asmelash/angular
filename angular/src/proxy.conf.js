const PROXY_CONFIG = [
  {
    context: [
      "/Personalnfo",
    ],
    target: "https://localhost:5000",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
