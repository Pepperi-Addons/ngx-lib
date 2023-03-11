// .storybook/preview.js

import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { styled } from '@storybook/theming';

setCompodocJson(docJson);

// Added theme style
import '!style-loader!css-loader!sass-loader!./theme.scss';
import '!style-loader!css-loader!sass-loader!./storybook-styles.scss';


const divEmpty = styled.div(({ theme }) => ({
}));
const pEmpty = styled.p(({ theme }) => ({
//example of custom font
fontFamily: "Inter"
}));
const spanEmpty = styled.span(({ theme }) => ({
}));
const inputEmpty = styled.input(({ theme }) => ({
}));

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
    // previewTabs: { 'storybook/docs/panel': { index: -1 } },
    docs: {
        inlineStories: true,
        components: {
            p: pEmpty,
            div: divEmpty,
            span: spanEmpty,
            input: inputEmpty
        },
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
