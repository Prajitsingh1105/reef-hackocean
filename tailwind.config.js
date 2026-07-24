/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#051424",
        "error-container": "#93000a",
        "on-primary": "#2d3137",
        "primary": "#c3c6cf",
        "on-tertiary-fixed-variant": "#005048",
        "on-tertiary": "#003731",
        "on-secondary-container": "#006a70",
        "inverse-on-surface": "#233143",
        "on-secondary-fixed-variant": "#004f54",
        "secondary": "#ddfcff",
        "on-secondary-fixed": "#002022",
        "surface-container": "#122131",
        "tertiary-fixed": "#71f8e4",
        "on-surface": "#d4e4fa",
        "on-tertiary-container": "#008b7c",
        "on-tertiary-fixed": "#00201c",
        "surface": "#051424",
        "inverse-primary": "#5b5e66",
        "outline-variant": "#45474b",
        "on-primary-fixed-variant": "#43474e",
        "inverse-surface": "#d4e4fa",
        "on-background": "#d4e4fa",
        "error": "#ffb4ab",
        "on-primary-container": "#787b83",
        "tertiary-container": "#00110e",
        "surface-dim": "#051424",
        "on-error-container": "#ffdad6",
        "outline": "#8f9095",
        "on-secondary": "#00363a",
        "surface-container-highest": "#273647",
        "primary-fixed-dim": "#c3c6cf",
        "on-error": "#690005",
        "surface-variant": "#273647",
        "surface-bright": "#2c3a4c",
        "surface-container-high": "#1c2b3c",
        "surface-container-low": "#0d1c2d",
        "surface-container-lowest": "#010f1f",
        "on-primary-fixed": "#181c22",
        "on-surface-variant": "#c6c6cb",
        "primary-container": "#0a0e14",
        "primary-fixed": "#dfe2eb",
        "secondary-fixed-dim": "#00dbe7",
        "tertiary": "#4fdbc8",
        "surface-tint": "#c3c6cf",
        "secondary-container": "#00f1fe",
        "tertiary-fixed-dim": "#4fdbc8",
        "secondary-fixed": "#74f5ff"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "margin-mobile": "16px",
        "unit": "4px",
        "gutter": "16px",
        "margin-desktop": "32px",
        "container-max": "1440px"
      },
      fontFamily: {
        "headline-lg": ["Inter", "sans-serif"],
        "label-md": ["JetBrains Mono", "monospace"],
        "headline-lg-mobile": ["Inter", "sans-serif"],
        "display-lg": ["Inter", "sans-serif"],
        "label-sm": ["JetBrains Mono", "monospace"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
