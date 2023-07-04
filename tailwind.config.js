/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
"./public/index.html"],
  theme: {
    extend: {
      fontFamily:{
        'inter' : 'font-style: Inter'
      },
      textColor :{
        'main': '#fff',
        'main-100' : '#ffffff80',
        'play':'#c273ed',
        'main-200':'#c273e',

      },
      backgroundColor: {
        main:'#170f23',
        'sider-left':'#221b2e',
        'sider-right':'#170f23',
        'play-list':'#130c1c',
        'hover':'#ffffff1a'
      },
      borderColor: {
        default:'#ffffff1a'
      },
      keyframes : {
        'slide-right': {
          '0%': {
            '-webkit-transform':  'translateX(-500px);',
                    transform:  'translateX(-500px);',
          },
          '100%':{
            '-webkit-transform':  'translateX(0px);',
                    transform:  'translateX(0px);',
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform':  'translateX(500px);',
                    transform:  'translateX(500px);',
          },
          '100%':{
            '-webkit-transform':  'translateX(0);',
                    transform:  'translateX(0);',
          }
        },
        'slide-left2': {
          '0%': {
            '-webkit-transform':  'translateX(500px);',
                    transform:  'translateX(500px);',
          },
          '100%':{
            '-webkit-transform':  'translateX(0);',
                    transform:  'translateX(0);',
          }
        }
        
      },
      animation: {
        'slide-right' : 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left' : 'slide-left 0.5s ease-in-out both;',
        'slide-left2' : 'slide-left2 0.5s ease-in-out both;',

      }

    },
    screens : {
      '1600' : '1600px'
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}