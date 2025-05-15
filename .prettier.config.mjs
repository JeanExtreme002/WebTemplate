const config = {
  printWidth: 100,
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      options: {
        semi: true,
      },
    },
  ],
};

export default config;
