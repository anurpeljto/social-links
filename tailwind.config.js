/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'sans-serif']
      },
      
      fontWeight: {
        semibold: 600,
        bold: 700
      },

      colors: {
        "green-text": "hsl(75, 94%, 57%)",
        "grey-700": "hsl(0, 0%, 20%)",
        "grey-800": "hsl(0, 0%, 12%)",
        "grey-900": "hsl(0, 0%, 8%)",
        "whitesmoke": "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}

