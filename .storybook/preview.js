/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    // Intercetta automaticamente le funzioni che iniziano con "on"
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
      // Abilita i controlli per le props di tipo colore
       color: /(background|color)$/i,
       // Abilita i controlli per le props di tipo data
       date: /Date$/,
      },
    },
  },
};

export default preview;