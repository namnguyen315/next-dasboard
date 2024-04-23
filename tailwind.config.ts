import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backGroundColorRoot: "#020617",
        backGroundColor1: '#252836',
        softCyan: '#4af3f3',
        darkBlue: '#275daf'
      },
      animation: (() => {
        let animations: { [key: string]: string } = {};
        ['1', '2'].forEach((level) => {
          for (let i = 0; i <= 100; i += 10) {
            animations[`water-level${level}-${i}`] = `animate${i} ${level === '1' ? '7' : '5'}s linear infinite`;
          }
        });
        return animations;
      })(),
      keyframes: (() => {
        const mapValue = (value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number) => {
          return ((((value - fromLow) * (toHigh - toLow)) / (fromHigh - fromLow)) + toLow).toFixed(0)
        };
        let keyframes: { [key: string]: any } = {};
        for (let i = 0; i <= 100; i += 10) {
          const value = mapValue(i, 0, 100, 500, 0)

          keyframes[`animate${i}`] = {
            '0%': { 'background-position': `0 ${value}px` },
            '100%': { 'background-position': `427px ${value}px` },
          }
        }
        return keyframes;
      })(),


      rotate: (() => {
        let rotates: { [key: string]: string } = {};
          for (let i = -360; i <= 360; i += 0.5) {
            rotates[`[${i}]`] = `${i}deg`;
          }
        return rotates;
      }),

      backgroundImage: {
        "gauge-g-body": "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1JyBoZWlnaHQ9JzUnPgogIDxyZWN0IHdpZHRoPSc1JyBoZWlnaHQ9JzUnIGZpbGw9J3doaXRlJy8+CiAgPHBhdGggZD0nTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVonIHN0cm9rZT0nIzg4OCcgc3Ryb2tlLXdpZHRoPScxJy8+Cjwvc3ZnPg==')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      dropShadow: {
        "Gauge-ticks-ds" : '2px 4px 6px rgb(0, 0, 0, 1)'
      }
    },
  },
  plugins: [    
  ]
};
export default config;




