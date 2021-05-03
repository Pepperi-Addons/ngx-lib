import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color|fill)$/i,
            date: /Date$/,
        },
    },
}

import { addParameters } from '@storybook/angular';
addParameters({
    docs: {
        inlineStories: true
    },
});

// export const parameters = {
//     // automatically create action args for all props that start with "on"
//     actions: { argTypesRegex: '^on.*' },
//     dependencies: {
//         // display only dependencies/dependents that have a story in storybook
//         // by default this is false
//         withStoriesOnly: true,
    
//         // completely hide a dependency/dependents block if it has no elements
//         // by default this is false
//         hideEmpty: true,
//     },
// };

// import '!style-loader!css-loader!sass-loader!./theme.scss';
// Note: To see the global decorator applied to your stories you'll need to include the template key with the component's selector with each story you have.

// export const decorators = [
//     (storyFunc) => {
//       const story = storyFunc();
  
//       return {
//         ...story,
//         template: `<div class="pepperi-theme">${story.template}</div>`,
//       };
//     },
//   ];