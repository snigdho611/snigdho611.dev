module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        frontend: "url('/images/frontend.png')",
        backend: "url('/images/backend.png')",
        database: "url('/images/database.png')",
      },
    },
  },
  plugins: [],
};
