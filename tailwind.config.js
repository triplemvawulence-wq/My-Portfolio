
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#00C566',
        'green-dark': '#009F52',
        'green-glow': 'rgba(0, 197, 102, 0.15)',

        gold: '#F5B731',
        red: '#FF4D4D',

        bg: '#0A0F0D',
        bg2: '#111A14',
        bg3: '#162019',

        card: '#1A2620',
        border: 'rgba(0, 197, 102, 0.18)',

        text: '#E8F0EA',
        muted: '#7A9480',

        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};