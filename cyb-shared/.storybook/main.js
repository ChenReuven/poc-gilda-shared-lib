module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
  // your Storybook configuration
  refs: {
    // react: {
    //   title: 'React',
    //   url: 'http://localhost:7007',
    // },
    angular: {
      title: 'Angular',
      url: 'http://localhost:7008',
    },
  },
};
