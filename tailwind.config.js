module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs':{'max':'767px'}
      },

      fontSize: {
          '04xl': '2.063rem',
          '05xl': '2.625rem'
        },
        backgroundColor: theme => theme('colors'),
        backgroundColor: {
            'white-smoke' : '#f8f8f8'
          },  
      textColor: theme => theme('colors'),
      textColor: {
          'black-light' : '#1C1C1C'
        },

      placeholderColor: theme => theme('colors'),
      placeholderColor: {
        'black-light' : '#1C1C1C'
        },
      width: {
        '88': '14.813rem',
        '89': '14.813rem',
        '90': '26.875rem',
        '91': '31.813rem',
        '92': '70.125rem',
        '93': '33.625rem',
        '94': '50.75rem',
        '95': '23.188rem',
        '97': '53.625rem',
        '98': '70.938rem',
        '99': '71.25rem',
        '100': '82.25rem',
        '101': '60rem',
        '102': '1.875rem',
        '103': '11.875rem',
        '104': '46.875rem',
        '105': '25.188rem',
        '106': '62.5rem',
        '107': '9.375rem',
        '108': '4.25rem'
      },
      height: {
        lg: '30px'
      },
      margin: {
        '01': '0.188rem',
        '02': '1.313rem',
        '11': '0.688rem',
        '02': '1.938rem',
        '03': '3.125rem',
        '12': '2.313rem',
        '13': '3.438rem',
        '14': '4.125rem',
        '15': '3.375rem',
        '21': '5.875rem',
        '29': '7.5rem',
        '30': '0.875rem',
        '31': '4.688rem',
        '32': '1.625rem',
        '33': '2.188rem',
        '34': '3.188rem',
        '35': '12.625rem',
        '36': '4.75rem',
        '37': '2.125rem'
      },
      lineHeight: {
        '01':'1.563rem',
        '02':'1.688rem',
        '03':'2.563rem',
        '04':'1.375rem',
        '05':'2.813rem',
        '06':'2.813rem',
        '07':'3.25rem'
      },
      padding: {
        '01': '1.063rem',
        '02': '3.125rem',
        '03': '3.438rem',
        '04': '3.875rem',
        '05': '4.75rem',
        '06': '6.5rem',
        '07': '4.875rem',
        '08': '3.375rem',
        '09': '1.563rem',
        '010': '1.938rem',
        '011': '3.063rem',
        '012': '3.188rem',
        '013': '6.625rem',
        '014': '10.25rem',
        '015': '0.875rem',
        '016': '2.063rem',
        '017': '7.5rem',
        '018': '14.063rem',
        '019': '14.813rem',
        '020': '12.25rem',
        '021': '8.75rem',
        '022': '9.125rem'
        
      },
      borderWidth: {
        '5': '5px'
      },
      fontFamily: {
        custom: ['Libre Baskerville', 'serif'],
        OS: ['Open Sans', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
