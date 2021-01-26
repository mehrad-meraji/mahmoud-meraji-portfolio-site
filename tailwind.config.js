module.exports = {
  purge: {
    enabled: false,
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
        gray: {
          100: '#f7f8fb',
          200: '#e0e1e6',
          500: '#888991'
        }
      },
      spacing: {
        6: '1.5rem',
        18: '4.5rem',
        22: '5.625rem',
        28: '7rem',
        42: '10.71rem',
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
        52: '12.75rem',
        80: '20rem'
      },
      lineHeight: {
        tight: 1.2,
      },
      fontWeight: {
        'normal': 'normal'
      },
      fontFamily: {
        'display': ['Playfair Display'],
        'body': ['HelveticaNeue-Light']
      },
      fontSize: {
        '2xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3.375rem',
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
