/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'buy-blue': ' #2997ff',
        'apple-font-color': '86868b',
        'apple-navbar-color':'#848489',
        'hero-title':'#94928D',
        'highlight-background':' #101010',
        'animate-button':'#7A7468'
      },
      height:{
        '90vh':'90vh',
        'videoHeight':'661px',
      },
      width:{
        'Highlight-width':'6080px',
        'smallHighlight-width':'1720px',
        '60vb':'60vb',
        
      },
      
    }
  },
  plugins: [],
}

