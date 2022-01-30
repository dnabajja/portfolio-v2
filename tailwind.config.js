module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  // more options here
  theme: {
    extend: {
      fontFamily: {
        prime: '"Be Vietnam", sans-serif',
      },

      fontSize: {
        dynamic: "clamp(4.75rem, 2.3864rem + 11.8182vw, 11.25rem)",
      },
    },
  },
};
