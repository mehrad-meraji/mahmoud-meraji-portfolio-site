module.exports = {
  purge: {
    enabled: true,
    content:[
      './**/*.{js,jsx,ts,tsx}'
    ]
  },
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        18: '4.5rem',
        22: '5.625rem',
        28: '7rem',
        80: '20rem'
      },
      inset: {
        20: '5rem',
        '-20': '-5rem'
      },
      letterSpacing: {
        tighter: '-.04em',
        'wide': '0.3125rem'
      },
      minWidth: {
        80: '20rem'
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        'display': ['Playfair Display'],
        'body': ['HelveticaNeue-Light']
      },
      fontSize: {
        '2xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  }
}
