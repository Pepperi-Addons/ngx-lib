export default (target, indexHtml) => {
    const modifiedIndexHtml = indexHtml.replace(`<script src="runtime.js" defer></script><script src="polyfills.js" defer></script><script src="main.js" defer></script>`, '');
    return modifiedIndexHtml;
};
