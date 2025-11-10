const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config: "./tailwind.config.ts", // 👈 tell it to use your config
    },
  },
};

export default config;
