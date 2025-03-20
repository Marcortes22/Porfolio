import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BasBhBvf.mjs';
import { manifest } from './manifest_BUIpnY6r.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/en/project/_id_.astro.mjs');
const _page2 = () => import('./pages/en.astro.mjs');
const _page3 = () => import('./pages/project/_id_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/en/project/[id].astro", _page1],
    ["src/pages/en/index.astro", _page2],
    ["src/pages/project/[id].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7b1d9047-4115-4da0-a8ac-f243ef3d6ad2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
