// For development
if(process.env.NODE_ENV === 'dev') {
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
}

// For production
if(process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {},
    },
  }
}