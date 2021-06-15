// .storybook/preview.js

import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

// Added theme style
import '!style-loader!css-loader!sass-loader!./theme.scss';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color|fill)$/i,
            date: /Date$/,
        },
    },
    viewMode: 'docs',
    // previewTabs: { 'storybook/docs/panel': { index: -1 } },
    docs: {
        inlineStories: true
    },
}

// import { addParameters } from '@storybook/angular';
// addParameters({
//     viewMode: 'docs',
//     previewTabs: { 'storybook/docs/panel': { index: -1 } },
//     docs: {
//         inlineStories: true
//     },
// });
