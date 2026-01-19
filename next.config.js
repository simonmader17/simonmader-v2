const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  images: {
    domains: ["github.com"],
  },
  async headers() {
    return [
      {
        source: "/.well-known/openpgpkey/:path*",
        headers: [
          { key: "Content-Type", value: "application/pgp-keys" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },
});
