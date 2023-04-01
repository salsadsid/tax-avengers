/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui:{
    themes:[
      {
        taxAvengers:{
          primary:"#008427",
          "secondary": "#F000B8",     
          "accent": "#d7f2fd",       
          "neutral": "#d0eed8",        
          "base-100": "#FFFFFF",        
          "info": "#3ABFF8",        
          "success": "#36D399",
          "warning": "#FBBD23",        
          "error": "#F87272",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}