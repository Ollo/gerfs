module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "standard",
    "plugin:react/recommended",
  ],
  "plugins": [
    "babel",
    "react",
  ],
  "rules": {
    "padded-blocks": ["error", {"classes": "always", "blocks": "never" }],
    "jsx-quotes": [2, "prefer-single"],
  }
};