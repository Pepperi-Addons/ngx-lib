// .storybook/manager.js

import { addons } from '@storybook/addons';
import pepperiTheme from './pepperiTheme';

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    enableShortcuts: true,
    isToolshown: true,
    theme: pepperiTheme,
    selectedPanel: undefined,
    initialActive: 'sidebar',
    sidebar: {
        showRoots: true,
        collapsedRoots: ['other'],
    },
});