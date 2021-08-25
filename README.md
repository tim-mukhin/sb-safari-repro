# Reproduction of Storybook issue with Safari

**Describe the bug**
The Composition on Safari browser (desktop and mobile) is broken. See the reproducing steps.

**To Reproduce**
1. First option with official storybook
Steps:
- Open [official storybook](https://next--storybookjs.netlify.app/official-storybook) from the docs.
- Scroll down on the left panel to external storybook, open any story, wait until it loads and select the Docs tab

![](/public/images/step1.png)

- Scroll stories back to top and choose any story from the current storybook
- Now the docs tab will stuck with docs from external storybook

![](/public/images/step2.png)

2. Second option with this repo
- Clone this repo
- Install dependencies
- Start storybook with `yarn storybook`
- Scroll down on the left panel to external storybook `sample2`, open any story, wait until it loads and select the Docs tab

![](/public/images/step3.png)

- Scroll stories back to top and choose any story from the current storybook
- Now you can see "No docs" block on any docs page

![](/public/images/step4.png)

- And after that you can also reproduce the issue from first oprion if you open external 'Official storybook'

**System**
```
System:
    OS: macOS 11.5
    CPU: (8) arm64 Apple M1
  Binaries:
    Node: 14.17.4 - ~/.nvm/versions/node/v14.17.4/bin/node
    Yarn: 3.0.1 - ~/.nvm/versions/node/v14.17.4/bin/yarn
    npm: 6.14.14 - ~/.nvm/versions/node/v14.17.4/bin/npm
  Browsers:
    Edge: 92.0.902.78
    Firefox: 90.0.2
    Safari: 14.1.2
  npmPackages:
    @storybook/addon-actions: ^6.4.0-alpha.32 => 6.4.0-alpha.32 
    @storybook/addon-docs: ^6.4.0-alpha.32 => 6.4.0-alpha.32 
    @storybook/addon-essentials: ^6.4.0-alpha.32 => 6.4.0-alpha.32 
    @storybook/addon-links: ^6.4.0-alpha.32 => 6.4.0-alpha.32 
    @storybook/node-logger: ^6.4.0-alpha.32 => 6.4.0-alpha.32 
    @storybook/preset-create-react-app: ^3.2.0 => 3.2.0 
    @storybook/react: ^6.4.0-alpha.32 => 6.4.0-alpha.32 
```

**Additional context**
The issue also reprodusable on MacOS Catalina and iOS 14
