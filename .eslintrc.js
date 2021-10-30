module.exports = {
  root: true,
  plugins: [
    "react-hooks", "react", "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: [
    "@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "import/no-unresolved": "off",
    "import/no-cycle": "error",
    "import/no-default-export": "off",

    "react/prop-types": "off",

    "@typescript-eslint/array-type": ["warn", { default: "generic" }],
    "@typescript-eslint/naming-convention": [
      "warn",
      { "selector": "default", "format": ["camelCase", "UPPER_CASE", "PascalCase"], "leadingUnderscore": "allow" },
      { "selector": "typeLike", "format": ["PascalCase"], "leadingUnderscore": "allow" },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "react/react-in-jsx-scope": "off"

    // "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/no-empty-interface": "off",
    // "@typescript-eslint/no-empty-function": "off",
    // "@typescript-eslint/no-var-requires": "off",
    // "@typescript-eslint/no-non-null-assertion": "off",
    // "@typescript-eslint/ban-ts-comment": "off",
  },
};
