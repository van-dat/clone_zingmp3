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
        'btn':'#9b4de0',
        'number' : 'rgba(74,144,226,0)',

      },
      backgroundImage : {
        'banner' : "url('/src/img/baner.jpg')"
      },
      backgroundColor: {
        main:'#170f23',
        'sider-left':'#221b2e',
        'sider-right':'#170f23',
        'play-list':'#130c1c',
        'hover':'#ffffff1a',
        'main-100':'rgba(255,255,255,0.1)',
        'bg-layd':'rgba(0,0,0,0.3)',
        'btn':'#9b4de0',
        'sidebar-rigth':'#170f23',
        'search':'#170f23cc',
        'chart':'rgba(51,16,76,.95)',
        'chart-bg':'#2b273f',
        'active' : '#ffffff4d',
        'alpha-layout-bg':'rgba(41,21,71,0.8)',
        'banner1' : 'rgba(32,19,53,0.9)',
        'rank': 'rgb(255 255 255 / 5%)'
      },
      borderColor: {
        default:'#ffffff1a',
        bf:'rgba(255,255,255,0.1)',
        'btn':'#9b4de0',
      },
      flex: {
        '6':'6 6 0%',
        '4':'4 4 0%',
        '5':'5 5 0%',
        '7':'7 7 0%',
        '3':'3 3 0%',


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
        },
        'scale-up': {
          '0%': {
            '-webkit-transform':  'scale(1);',
                    transform:  'scale(1);',
          },
          '100%':{
            '-webkit-transform':  'scale(1.1);',
                    transform:  'scale(1.1);',
          }

        },
        'scale-up-leavemount': {
          '0%': {
            '-webkit-transform':  'scale(1.2);',
                    transform:  'scale(1.2);',
          },
          '100%':{
            '-webkit-transform':  'scale(1);',
                    transform:  'scale(1);',
          }

        },
      },
      animation: {
        'slide-right' : 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left' : 'slide-left 0.5s ease-in-out both;',
        'slide-left2' : 'slide-left2 0.5s ease-in-out both;',
        'scale-up' : 'scale-up  .8s ease-out alternate both;',
        'scale-up-leavemount' : 'scale-up-leavemount  .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',

      }

    },
    screens : {
      '1600' : '1600px',
      'tablet': '640px',
      'laptop': '1024px'

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
  
}
    
