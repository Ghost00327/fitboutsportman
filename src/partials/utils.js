import 'chartjs-adapter-luxon';
import resolveConfig from 'tailwindcss/resolveConfig';

const tailwindConfig = () => {
    return resolveConfig('./src/css/tailwind.config.js')
}

export const COLORS = {
    RED: tailwindConfig().theme.colors.red[400],
    EMERALD: tailwindConfig().theme.colors.emerald[400],
    AMBER: tailwindConfig().theme.colors.amber[400],
    SKY: tailwindConfig().theme.colors.sky[400],
    TEAL: tailwindConfig().theme.colors.cyan[400],
    INDIGO: tailwindConfig().theme.colors.indigo[400],
    ROSE: tailwindConfig().theme.colors.rose[400],
    CYAN: tailwindConfig().theme.colors.cyan[400]
}

export const COLORS_VALUES = Object.values(COLORS)