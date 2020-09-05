module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 versions", "safari >= 7", "ie >= 11"],
        },
        useBuiltIns: "usage", // 폴리필 사용 방식 지정 ("usage", "entry", false)
        corejs: {
          // 폴리필 버전 지정
          version: 3,
        },
        shippedProposals: true,
      },
    ],
    "@babel/preset-react",
  ],
};
