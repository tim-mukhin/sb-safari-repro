module.exports = {
  refs: {
    official: {
      title: "Official storybook",
      url: 'https://next--storybookjs.netlify.app/official-storybook'
    },
    sample2: {
      title: "sample2",
      url: 'https://5be26744d2f6250024a9117d-ydeqctdlhf.chromatic.com/'
    },
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "webpackFinal": (config) => {
      const path = require('path');
      // add monorepo root as a valid directory to import modules from
      config.resolve.plugins.forEach((p) => {
        if (Array.isArray(p.appSrcs)) {
          p.appSrcs.push(path.join(__dirname, '..', '..', '..', 'storybook'));
        }
      });
      return config;
    }
    
}