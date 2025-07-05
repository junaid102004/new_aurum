/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // tailwind.config.js
// module.exports = {
//   darkMode: false, // or 'class' if you want manual control
//   // ...
// }

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
     
      animation: {
        slideUp: "slideUp 3s ease-out forwards",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
      screens: {
        'vxs':'360px',
        'xs': '480px',   // Extra small devices
        'cxs':'550px',
        'sm': '640px',   // Small devices
        'md': '768px',   // Medium devices
        'cmd': '968px',   // Medium devices
        'lg': '1024px',  // Large devices
        'xl': '1280px',  // Extra large devices
        '2xl': '1536px', // 2X large devices
        // Add more custom breakpoints as needed
      },
    },
  },
  plugins: [],
};
