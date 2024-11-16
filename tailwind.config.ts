import { transform } from 'next/dist/build/swc';
const {nextui} = require("@nextui-org/react");
import type { Config } from 'tailwindcss'
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      content: {
        'empty': '""',
      },
      keyframes: {
        text:{
          "100%": {
            backgroundPosition : '200px'
          },
        },
        secondText:{
          "100%":{
            transform: "translateY(200px)"
          }
        },
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
        "avatar-spin": "avatar 5s linear infinite",
        "text-slide" : "text 10s linear infinite",
        "second-text-slide" : "secondText 10s linear infinite"
      },
      fontFamily:{
        'lemonada' : ['Lemonada', 'sans-serif'],
        'lexend-deca' : ['Lexend Deca', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto' : ['Roboto']
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
  plugins: [addVariablesForColors, nextui()],
  
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