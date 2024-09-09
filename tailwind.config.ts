import { transform } from 'next/dist/build/swc';
import type { Config } from 'tailwindcss'
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      content: {
        'empty': '""',
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
          
        },
        avatar:{
          "0%": {transform: "rotate(0deg)"},
          "100%": {transform: "rotate(720deg)"}
        }
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "avatar-spin": "avatar 5s linear infinite"
      },
      fontFamily:{
        'lemonada' : ['Lemonada', 'sans-serif'],
        'lexend-deca' : ['Lexend Deca', 'sans-serif'],
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
    container:{
      center: true,
    }
  },
  plugins: [addVariablesForColors],
  
}
export default config

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}