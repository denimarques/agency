/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily:{
      'vadodara': ['Hind Vadodara', 'sans-serif'],
      'playfair': ['Playfair Display', 'sans-serif']
    },
    extend: {
      colors:{
        'dark-violet': '#331B3B',
      },
      backgroundImage: {
        'details-social': "url('./public/dist/image/ellipse-8.svg')",
        'vetor-1': "url('./public/dist/image/vetor-1.svg')",
        'vetor-2': "url('./public/dist/image/vetor-2.svg')",
        'vetor-3': "url('./public/dist/image/vetor-3.svg')",
        'ellipse-1': "url('./public/dist/image/ellipse-10.svg')",
        'ellipse-2': "url('./public/dist/image/ellipse-16.svg')",
        'ellipse-3': "url('./public/dist/image/ellipse-11.svg')",
      }
    },
  },
  plugins: [],
}
