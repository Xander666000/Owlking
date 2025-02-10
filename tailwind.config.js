export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md2': '897px',
        'sm2': '450px'
      },
      backgroundImage: {
        'image1' : "url('./assets/image_1.jpeg')",
        'image2' : "url('./assets/image_2.jpeg')",
        'image3' : "url('./assets/image_3.jpeg')",
        'image4' : "url('./assets/image_5.jpeg')",
        'image5' : "url('./assets/image_7.jpeg')",
      },
      colors: {
        'custom-bg1': 'rgb(25, 42, 92)',
        'custom-bg2': 'rgb(1, 108, 127)',
        'custom-bg3': 'rgb(166, 35, 12)',
        'custom-color1': 'rgb(11, 5, 102)'
      },
      inset: {
        '40': '45%'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sniglet: ['Sniglet', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

