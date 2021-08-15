module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false,
    theme: {
        fontFamily: {},
        colors: {
            gray: {
                50: "#F7F8FD",
                100: "#F2F4FF",
                200: "#647196",
                300: "#3A4374",
                400: "#373F68",
            },
            purple: {
                500: "#AD1FEA",
            },
            indigo: {
                500: "#4661E6",
            },
        },
        extend: {
            colors: {
                tacao: "#F49F85",
                malibu: "#62BCFA",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
