// const path = require('path');

module.exports = {
    "stories": [
        "../projects/ngx-lib/**/*.stories.mdx",
        "../projects/ngx-lib/**/*.stories.@(js|jsx|ts|tsx)",
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    "addons": [
        "@storybook/addon-links",
        // "@storybook/addon-essentials",
        {
            name: '@storybook/addon-essentials',
            // options: {
            //     docs: false,
            // }
        },
        // "@storybook/addon-knobs",
        // '@storybook/addon-storysource',
    ]
}