import 'chartjs-adapter-luxon';
import resolveConfig from 'tailwindcss/resolveConfig';

const tailwindConfig = () => {
    // Tailwind config
    return resolveConfig('./src/css/tailwind.config.js')
}

export const COLORS = [
    tailwindConfig().theme.colors.emerald[400],
    tailwindConfig().theme.colors.amber[400],
    tailwindConfig().theme.colors.sky[400],
    tailwindConfig().theme.colors.indigo[500],
]
