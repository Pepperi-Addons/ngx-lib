// .storybook/preview.js

import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import pepperiTheme from './pepperiTheme';
import { componentWrapperDecorator } from '@storybook/angular';


setCompodocJson(docJson);

// Added theme style
import '!style-loader!css-loader!sass-loader!./theme.scss';
import '!style-loader!css-loader!sass-loader!./storybook-styles.scss';

// * Add a style to ALL stories 
export const decorators = [
    componentWrapperDecorator((story) => `<div class="all-this-max-width">${story}</div>`),
];

export const parameters = {
    options: {
        method: 'alphabetical',
        storySort: {
            order: ["Abstracts", "Components", "Services", "Example"],
        },
    },
    layout: 'centered',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color|fill)$/i,
            date: /Date$/,
        },
    },
    viewMode: 'docs',
    docs: {
        theme: pepperiTheme,
        inlineStories: true,
    },
}