module.exports = {
    purge: [],
    theme: {
      extend: {
          colors: {
              'test': '#123456'
          },
          height: {
            '72': '24rem',
            '80': '32rem',
            '86': '40rem'
          },
      },
    },
    variants: {
      border: ['responsive', 'hover', 'focus', 'active'],
      outline: ['responsive', 'focus', 'hover', 'active']
    },
    plugins: [],
  }