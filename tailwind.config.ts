import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export enum RegularFontSizes {
  CAPTION = ".text-regular-caption",
  SUBHEADLINE = ".text-regular-subheadline",
  BODY = ".text-regular-body",
  BODY_LARGE = ".text-regular-bodyLarge",
  HEADLINE = ".text-regular-headline",
}

export enum MediumFontSizes {
  CAPTION = ".text-medium-caption",
  SUBHEADLINE = ".text-medium-subheadline",
  CALLOUT = ".text-medium-callout",
  BODY = ".text-medium-body",
  HEADLINE = ".text-medium-headline",
  TITLE_S = ".text-medium-titleS",
  TITLE_M = ".text-medium-titleM",
  TITLE_L = ".text-medium-titleL",
}

export enum SemiboldFontSizes {
  TITLE_XL = ".text-semibold-titleXL",
}

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: false as never,
    fontFamily: false as never,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        [RegularFontSizes.CAPTION]: {
          "font-size": "12px",
          "font-weight": "400",
          "font-family": "regular",
          "line-height": "15px",
        },
        [RegularFontSizes.SUBHEADLINE]: {
          "font-size": "14px",
          "font-weight": "400",
          "font-family": "regular",
          "line-height": "20px",
        },
        [RegularFontSizes.BODY]: {
          "font-size": "16px",
          "font-weight": "400",
          "font-family": "regular",
          "line-height": "24px",
        },
        [RegularFontSizes.BODY_LARGE]: {
          "font-size": "18px",
          "font-weight": "400",
          "font-family": "regular",
          "line-height": "26px",
        },
        [RegularFontSizes.HEADLINE]: {
          "font-size": "20px",
          "font-weight": "400",
          "font-family": "regular",
          "line-height": "24px",
        },
        [MediumFontSizes.CAPTION]: {
          "font-size": "12px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "16px",
        },
        [MediumFontSizes.SUBHEADLINE]: {
          "font-size": "14px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "20px",
        },
        [MediumFontSizes.CALLOUT]: {
          "font-size": "16px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "24px",
        },
        [MediumFontSizes.BODY]: {
          "font-size": "18px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "26px",
        },
        [MediumFontSizes.HEADLINE]: {
          "font-size": "20px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "26px",
        },
        [MediumFontSizes.TITLE_S]: {
          "font-size": "22px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "28px",
        },
        [MediumFontSizes.TITLE_M]: {
          "font-size": "24px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "32px",
        },
        [MediumFontSizes.TITLE_L]: {
          "font-size": "26px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "32px",
        },
        [SemiboldFontSizes.TITLE_XL]: {
          "font-size": "32px",
          "font-weight": "600",
          "font-family": "semi-bold",
          "line-height": "48px",
        },
        ".content-auto": {
          contentVisibility: "none",
        },
      });
    }),
  ],
} satisfies Config;
