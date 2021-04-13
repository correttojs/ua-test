const CRAWLER_REGEXP = [
  "Googlebot",
  "Applebot",
  "Bingbot",
  "BingPreview",
  "msnbot",
]
  .map((item) => `(.*)${item}(.*)|(.*)${item.toLowerCase()}(.*)`)
  .join("|");

module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          has: [{ type: "header", key: "user-agent", value: CRAWLER_REGEXP }],
          source:
            "/:path(plus/sport|sport|plus|plus/serien|serien|plus/filme|filme)",
          destination: "/rw/CRAWLER/:path",
        },
        {
          has: [{ type: "header", key: "user-agent", value: CRAWLER_REGEXP }],
          source: "/",
          destination: "/rw/CRAWLER",
        },
      ],
    };
  },
};
