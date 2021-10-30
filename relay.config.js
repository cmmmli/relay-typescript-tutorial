module.exports = {
  src: "./src",
  language: "typescript",
  schema: "./schema.graphql",
  exclude: ["**/node_modules/**", "**/__generated/**"],
  artifactDirectory: "./src/__generated__",
  customScalars: {
    URL: "String",
    ISO8601DateTime: "String",
    ISO8601Date: "String",
  },
};
