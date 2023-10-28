import presetWebFonts from "https://esm.sh/@unocss/preset-web-fonts@0.42.0";
import presetUno from "https://esm.sh/@unocss/preset-uno@0.42.0";

export const UNOCSS_OPTS = {
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        // these will extend the default theme
        sans: {
          name: "Fira Sans",
          weights: ["100", "300", "400", "700"],
        },
        mono: ["Fira Code", "Fira Mono:400,700"],
      },
    }),
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
        html {
          font-family: 'Fira Sans';
        }
      `,
    },
  ],
};
