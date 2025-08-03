/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for Next.js 13–15 app dir
    "./pages/**/*.{js,ts,jsx,tsx}", // if you're using pages dir
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bengali: ["'Noto Sans Bengali'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        "noto-bengali": ['"Noto Sans Bengali"', "serif"],
        blanka: ["Blanka", "Impact", "Arial Black", "sans-serif"],
        cocobiker: ["CocoBiker", "sans-serif"],
      },
      colors: {
        shaktiRed: "#B91C1C",
        goldGlow: "#FBBF24",
        shaktiPurple: "#5B21B6",
        techBlue: "#1E3A8A",
        saffron: "#F97316",
        ashenBlack: "#111827",
        conchPink: "#FDE2DD",
        "cyber-yellow": "#ffd700",
        "cyber-blue": "#00ffff",
        "cyber-green": "#00ff00",
        "cyber-red": "#ff0000",
      },
      animation: {
        pulseSlow: "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
