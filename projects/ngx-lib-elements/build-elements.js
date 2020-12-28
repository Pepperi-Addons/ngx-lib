const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/ngx-lib-elements/runtime.js',
        './dist/ngx-lib-elements/polyfills.js',
        './dist/ngx-lib-elements/main.js',
        './dist/ngx-lib-elements/scripts.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/webcomponent.js');
    await fs.copyFile('./dist/ngx-charts/styles.css', 'elements/styles.css')
})()
