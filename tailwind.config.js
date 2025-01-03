
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
          footerUrl:"url('../image/world.jpg')",
          mapImage:"url('../image/map.png')",
          Keyboard:"url('../image/keyboard.jpg')",
          appImage:"url('../image/app.webp')",
          cloudImage:"url('../image/cloud.jpg')",
          AiImage:"url('../image/aipower.jpg')",
        
      },
     
    },
    
  },
  plugins: [
    require('tailwindcss-motion'),
    require('tailwindcss-intersect') 
  ], 
}