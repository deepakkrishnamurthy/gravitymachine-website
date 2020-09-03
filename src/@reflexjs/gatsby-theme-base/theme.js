import base from "@reflexjs/preset-base"

export default {
  preset: base,
  initialColorModeName: 'dark',
  colors: {
    primary: "#4361ee",
    modes: {
      dark: {
        background: '#091e1f'
      }
    }
  },

  pre: {
    ...base.styles.pre,
  },
  container: {
    maxWidth: 1100,
  },
  h2: {
    a: {
      color: "primary",
      textDecoration: "underline",
    },
  },
}
