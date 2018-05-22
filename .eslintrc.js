module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  },
  "rules": {
    "no-use-before-define": 0,
    "no-confusing-arrow": 0,
    "max-len": [1, 120],
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": 0,
    "no-mixed-operators": 0,
    "import/first": [1, { ignore: ['components', 'containers']}],
    "react/jsx-max-props-per-line": [2, {"maximum": 1, "when": "always" }],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-closing-bracket-location": [2, {"selfClosing": "line-aligned", nonEmpty: "line-aligned"}],
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    "react/sort-comp": [1, {
      order: [
        'static-methods',
        'constructor',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'everything-else',
        'render',
      ]
    }]
  },
};