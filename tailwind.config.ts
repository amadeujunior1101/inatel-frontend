import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-blue': '#0A64B4',
        'secondary-blue': '#354BBF',
        'main-white': '#FFF',
        'secondary-white': '#D6D6D6',
        'main-black': '#000000',
        'main-gray': '#999999',
        'secondary-gray': '#d9d9d9',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'custom-sm': '14px',
      },
      height: {
        'max-h-screen-minus-200': 'calc(100vh)',
        'max-h-screen-minus-150': 'calc(100vh - 150px)',
      },
    },
  },
  plugins: [],
}
export default config
