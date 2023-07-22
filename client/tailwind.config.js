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
          "secondary": "#005d1f",     
          "accent": "#d7f2fd",       
          "neutral": "#d0eed8",        
          "base-100": "#FFFFFF",        
          "info": "#f1f5f7",        
          "success": "#E8BD0D",
          "warning": "#FBBD23",        
          "error": "#F87272",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}