/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '390px',
        'tablet': '1024',
      },
    },

    plugins: [],
  }
}

