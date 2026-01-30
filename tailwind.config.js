/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#3f3f3f',
        'sidebar-line': '#4b4b4b',
        'sidebar-muted': '#c9c9c9',
        'sidebar-text': '#f5f5f5',
        'accent': '#d9b12a',
        'accent-dark': '#c49e1f',
        'page-bg': '#f3f3f3',
      },
    },
  },
  plugins: [],
}
