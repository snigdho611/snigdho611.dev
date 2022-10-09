module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        frontend: "url('/images/frontend.png')",
        backend: "url('/images/backend.png')",
        database: "url('/images/database.png')",
        about: "url('/images/nav/about.png')",
        aboutHover: "url('/images/nav/about-hover.png')",
      },
    },
  },
  plugins: [],
};
