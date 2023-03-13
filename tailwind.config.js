const { plugin } = require('twrnc')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        colors: {
            deep_primary: '#0C579D',
            primary: '#457dc3',
            secondary: '#419cd9',
            blue1: '#535994',
            blue2: '#5f74ad',
            blue3: '#457dc3',
            blue4: '#5f91ad',
            blue5: '#77c0d1',
            light_blue: '#eff6ff',
            dark: '#333',
            dark_blue: '#23395d',
            dark_grey: '#555',
            grey: '#7987a1',
            light_grey: '#aebacf',
            silver: '#E9ECF2',
            dark_light: '#dee2e9',
            light: '#f0f0f0',
            light_low: '#f8f8f8',
            white: '#fff',
            deep_black: '#000',
            green: '#4ace86',
            green2: '#65d296',
            red: '#ef5455',
            orange: '#ff4500',
        },
        extend: {},
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                log_btn: 'bg-secondary text-white px-28 py-3 rounded m-1 font-700',
            })
        }),
    ],
}
