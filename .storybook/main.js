// .storybook/main.js

module.exports = {
    "core": {
        "builder": "webpack5"
    },
    "stories": [
        "../projects/ngx-lib/**/*.stories.mdx",
        "../projects/ngx-lib/**/*.stories.@(js|jsx|ts|tsx)",
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-a11y"
        // {
        //     name: '@storybook/addon-essentials',
        //     // options: {
        //     //     docs: false,
        //     // }
        // },
        // '@storybook/addon-storysource',
    ],
    angularOptions: {
        enableIvy: false,
    },
}
