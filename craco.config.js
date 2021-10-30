const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
  eslint: false,
  typescript: {
    enableTypeChecking: false,
  },
  babel: {
    passPerPreset: true,
    plugins: [
      [
        "relay",
        {
          artifactDirectory: "./src/__generated__",
        },
      ],
    ],
  },
};
