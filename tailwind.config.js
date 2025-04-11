module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // for App Router
      './pages/**/*.{js,ts,jsx,tsx}', // if you use Pages Router
      './components/**/*.{js,ts,jsx,tsx}', // for your components
    ],
    theme: {
      extend: {
        fontFamily: {
          prosto: ['var(--font-prosto-one)'], // Custom font
        },
      },
    },
    plugins: [],
  }
  