/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
    ".pages/**/*.{js,jsx,ts,tsx}",
    ".components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'broker-bg': '#',
        'bg-light-gray': '#F6F6F6',
        'brand-green': '#2B8761',
        'secondary-green': '#10734F',
        'highlight-coral': '#EF5858',
        'dark-grafitti': '#334155',
        'text-light-gray': '#ACACAC',
        'danger-red': '#D12E34'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif'],
        'jetbrainsmono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: theme => ({
        'email-input-light': "url('/src/assets/images/email-envelope.svg')",
        'email-input-dark': "url('/src/assets/images/email-envelope-darkmode.png')",
        'password-input-light-hide': "url('/src/assets/images/password-crossed-eye.svg')",
        'password-input-light-show': "url('/src/assets/images/password-open-eye.svg')",
        'password-input-dark': "url('/src/assets/images/padlock-password-darkmode.png')",
        'phone-input-light': "url('/src/assets/images/phone.png')",
        'phone-input-dark': "url('/src/assets/images/phone-darkmode.png')",
        'person-input-light': "url('/src/assets/images/person-login.png')",
        'person-input-dark': "url('/src/assets/images/person-login-darkmode.png')",
        'briefcase-input-light': "url('/src/assets/images/briefcase.png')",
        'briefcase-input-dark': "url('/src/assets/images/briefcase-darkmode.png')",
        "calendar-input-light": "url('/src/assets/images/calendar.png)",
        "calendar-input-dark": "url('/src/assets/images/calendar-darkmode.png)"
      }),
      backgroundSize: {
        '20': '20px',
      },
      backgroundPosition: {
        'right-10-center': 'right 10px center',
      },
      boxShadow: {
        'solid-black': '10px 10px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['placeholder'],
      borderColor: ['focus']
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}

