export default (target, indexHtml) => {
    const modifiedIndexHtml =
        indexHtml
            .replace(`<script src="runtime.js" defer></script>`, '')
            .replace(`<script src="polyfills.js" defer></script>`, '')
            .replace(`<script src="styles.js" defer></script>`, '')
            .replace(`<script src="vendor.js" defer></script>`, '')
            .replace(`<script src="main.js" defer></script>`, '');
    return modifiedIndexHtml;
};
