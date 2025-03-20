import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_DpUHH7pj.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Wlx_0OJk.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/marco/Desktop/personalProjects/Porfolio/","cacheDir":"file:///C:/Users/marco/Desktop/personalProjects/Porfolio/node_modules/.astro/","outDir":"file:///C:/Users/marco/Desktop/personalProjects/Porfolio/dist/","srcDir":"file:///C:/Users/marco/Desktop/personalProjects/Porfolio/src/","publicDir":"file:///C:/Users/marco/Desktop/personalProjects/Porfolio/public/","buildClientDir":"file:///C:/Users/marco/Desktop/personalProjects/Porfolio/dist/client/","buildServerDir":"file:///C:/Users/marco/Desktop/personalProjects/Porfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"en/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CqOcek-U.css"},{"type":"external","src":"/_astro/ChangeLanguageSelect.Co02PZLv.css"}],"routeData":{"route":"/en/project/[id]","isIndex":false,"type":"page","pattern":"^\\/en\\/project\\/([^/]+?)\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"project","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/en/project/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CqOcek-U.css"},{"type":"external","src":"/_astro/ChangeLanguageSelect.Co02PZLv.css"}],"routeData":{"route":"/project/[id]","isIndex":false,"type":"page","pattern":"^\\/project\\/([^/]+?)\\/?$","segments":[[{"content":"project","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/project/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/marco/Desktop/personalProjects/Porfolio/src/pages/en/project/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/en/project/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/marco/Desktop/personalProjects/Porfolio/src/pages/project/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/project/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/marco/Desktop/personalProjects/Porfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/marco/Desktop/personalProjects/Porfolio/src/pages/en/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/marco/Desktop/personalProjects/Porfolio/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/en/project/[id]@_@astro":"pages/en/project/_id_.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/project/[id]@_@astro":"pages/project/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/marco/Desktop/personalProjects/Porfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D5E_FcTB.mjs","\u0000@astrojs-manifest":"manifest_a9Mimowr.mjs","@Components/magicui/icon-cloud":"_astro/icon-cloud.PgHuJ2d0.js","@Components/React/ChangeThemeButton/ChangeThemeButton":"_astro/ChangeThemeButton.CO_i24mi.js","@Components/React/ChangeLanguageSelect/ChangeLanguageSelect":"_astro/ChangeLanguageSelect.BGt1yNqJ.js","@astrojs/react/client.js":"_astro/client.nVW_KDdW.js","@analogjs/astro-angular/client.js":"_astro/client.DZiQwmvq.js","C:/Users/marco/Desktop/personalProjects/Porfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BdYPFXNg.js","C:/Users/marco/Desktop/personalProjects/Porfolio/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.zRAVNeH5.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/marco/Desktop/personalProjects/Porfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","(function(){const t=localStorage.getItem(\"theme\")||\"dark\";document.documentElement.setAttribute(\"data-theme\",t)})();"],["C:/Users/marco/Desktop/personalProjects/Porfolio/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts","document.addEventListener(\"astro:after-swap\",()=>{const e=localStorage.getItem(\"theme\")||\"dark\";document.documentElement.setAttribute(\"data-theme\",e),console.log(\"astro:after-swap\")});"]],"assets":["/_astro/Diplomado.BJGyJfDo.jpg","/_astro/index.CqOcek-U.css","/astro.svg","/Porfolio.png","/backGrounds/darkBackground.svg","/favicons/android-chrome-192x192.png","/favicons/android-chrome-512x512.png","/favicons/apple-touch-icon.png","/favicons/favicon-16x16.png","/favicons/favicon-32x32.png","/favicons/favicon.ico","/favicons/site.webmanifest","/cv/spanishCV.pdf","/socialMediaIcons/files.svg","/socialMediaIcons/github-dark.svg","/socialMediaIcons/Github_dark.svg","/socialMediaIcons/Github_light.svg","/socialMediaIcons/gmail.svg","/socialMediaIcons/linkedin.svg","/socialMediaIcons/pdf.svg","/socialMediaIcons/Vercel_wordmark_dark.svg","/socialMediaIcons/Vercel_wordmark_light.svg","/_astro/ad.CIfEhclW.svg","/_astro/ad.qYbAAoSh.svg","/_astro/af.BuMBUgKS.svg","/_astro/af.tPgUcn__.svg","/_astro/arab.BKFOg4OI.svg","/_astro/arab.ChR_bGdP.svg","/_astro/as.B62a7WAl.svg","/_astro/as.CbXv4jzJ.svg","/_astro/aw.CLCX8uk5.svg","/_astro/aw.W0PWLK5p.svg","/_astro/bm.-cEKCVOn.svg","/_astro/bm.BvR3egAp.svg","/_astro/bn.BSuaq1Wb.svg","/_astro/bn.ChzTadRh.svg","/_astro/bo.6ClBJX69.svg","/_astro/bo.BuzOw5h1.svg","/_astro/br.Dr5rMAMb.svg","/_astro/br.PVuHDLSp.svg","/_astro/bt.BTo4qm10.svg","/_astro/bt.BVgHscRH.svg","/_astro/ButtonBase.Crp_rIu0.js","/_astro/bz.CLHtXBeg.svg","/_astro/bz.UeIMOdYC.svg","/_astro/ChangeLanguageSelect.BGt1yNqJ.js","/_astro/ChangeLanguageSelect.Co02PZLv.css","/_astro/ChangeThemeButton.CO_i24mi.js","/_astro/client.DZiQwmvq.js","/_astro/client.nVW_KDdW.js","/_astro/cy.BcNgb04z.svg","/_astro/cy.bZuP8hmf.svg","/_astro/dg.CJPJrjiZ.svg","/_astro/dg.DqkWLbnk.svg","/_astro/dm.Cbhezfe1.svg","/_astro/dm.DPPHwW2M.svg","/_astro/do.BLjaam8q.svg","/_astro/do.CYuBDYHN.svg","/_astro/eac.5Fo6OcTF.svg","/_astro/eac.C2q2INia.svg","/_astro/ec.CaVOFQ3t.svg","/_astro/ec.cwfBJlvF.svg","/_astro/eg.CN2tu5fg.svg","/_astro/eg.DoP9inAL.svg","/_astro/es-ga.DgBiTHPZ.svg","/_astro/es-ga.DHM04YZf.svg","/_astro/es.BbeAXIxn.svg","/_astro/es.ByLEL5u9.svg","/_astro/fj.cXjcl0Fp.svg","/_astro/fj.DDs3CkjB.svg","/_astro/fk.BSxkPvcy.svg","/_astro/fk.D8T6Bfyo.svg","/_astro/gb-nir.C71_G4bk.svg","/_astro/gb-nir.D4gikpNq.svg","/_astro/gb-wls.Bxz9hxvX.svg","/_astro/gb-wls.CK0XlKT-.svg","/_astro/gq.Cag8QTk2.svg","/_astro/gq.CPnMO1hT.svg","/_astro/gs.BGaO-uAi.svg","/_astro/gs.Dhhdhm-N.svg","/_astro/gt.LfEoDgMu.svg","/_astro/gt.yQJojBBZ.svg","/_astro/gu.Di1JYREk.svg","/_astro/gu.SbvrH0uZ.svg","/_astro/hr.CrDyIZ9c.svg","/_astro/hr.Dk1jfI3h.svg","/_astro/ht.CJRwLnD5.svg","/_astro/ht.OaXW6Ckh.svg","/_astro/icon-cloud.PgHuJ2d0.js","/_astro/im.BZvIo3_m.svg","/_astro/im.DYDp4oLw.svg","/_astro/index.bABWFkZu.js","/_astro/index.DU5konRZ.js","/_astro/io.13HOfeJD.svg","/_astro/io.BImhNBcd.svg","/_astro/ir.cCIgaNf6.svg","/_astro/ir.Q03Mij62.svg","/_astro/je.B8TEOR8T.svg","/_astro/je.Bq_hazPl.svg","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/kg.CLcIyImU.svg","/_astro/kg.DE1OcCNa.svg","/_astro/kh.BBvObpUS.svg","/_astro/kh.BeWfuE30.svg","/_astro/ki.fuIMkEYQ.svg","/_astro/ki.p_fAQGbS.svg","/_astro/ky.Bl4EUcuf.svg","/_astro/ky.CNNivbEu.svg","/_astro/kz.BhJ_sx4z.svg","/_astro/kz.fSbQQwqU.svg","/_astro/li.D--sPAzE.svg","/_astro/li.nRBCb42X.svg","/_astro/lk.DSQoDxn_.svg","/_astro/lk.DUkgV9Tq.svg","/_astro/md.DRlxvNwm.svg","/_astro/md.DTi94M3M.svg","/_astro/me.C4rJAeaB.svg","/_astro/me.DN-JqxqQ.svg","/_astro/mp.CrOApEqW.svg","/_astro/mp.CuaQmCLf.svg","/_astro/ms.B-w7hFKu.svg","/_astro/ms.DxciGbUu.svg","/_astro/mt.CCEaFgc1.svg","/_astro/mt.CptT5Up5.svg","/_astro/mx.BKTT9Zsn.svg","/_astro/mx.CgANr7Hc.svg","/_astro/nf.DGrQb42O.svg","/_astro/nf.Dl00mlk2.svg","/_astro/ni.BYCxSj-P.svg","/_astro/ni.CuGv--Gp.svg","/_astro/om.BGRA2mJE.svg","/_astro/om.DzR0by_O.svg","/_astro/pn.Bc8nPEwi.svg","/_astro/pn.BKudj2S6.svg","/_astro/pt.CQVtB-Le.svg","/_astro/pt.DYRGW68h.svg","/_astro/py.CUzV776d.svg","/_astro/py.DVcr39IT.svg","/_astro/rs.BvFrCUNm.svg","/_astro/rs.ZwZi-SR6.svg","/_astro/sa.CwDtCY_e.svg","/_astro/sa.DMELvfVN.svg","/_astro/sh-ac.BZX-YwYa.svg","/_astro/sh-ac.ZZIgADsm.svg","/_astro/sh-hl.auMKbIRo.svg","/_astro/sh-hl.ypSwBFIf.svg","/_astro/sh-ta.COZj1_Fv.svg","/_astro/sh-ta.euBwJYlc.svg","/_astro/sm.CfuSEhAf.svg","/_astro/sm.DGBIRFB_.svg","/_astro/sv.B3Xyu71P.svg","/_astro/sv.DwXt4tfO.svg","/_astro/sx.BCb2l4FV.svg","/_astro/sx.BV89-FB1.svg","/_astro/sz.D39eIL5d.svg","/_astro/sz.qxMwa2gs.svg","/_astro/tc.CJHJmJj1.svg","/_astro/tc.dtelpZmc.svg","/_astro/tm.C_WSgUcv.svg","/_astro/tm.DGBJvQay.svg","/_astro/un.Bzc8jJt-.svg","/_astro/un.BZVtxNUo.svg","/_astro/va.B1737jVh.svg","/_astro/va.BcsDw49H.svg","/_astro/vg.9wqmkANB.svg","/_astro/vg.CIMyeXjw.svg","/_astro/vi.BC_zcciE.svg","/_astro/vi.BSdsyIxY.svg","/_astro/xk.BKj_MEGI.svg","/_astro/xk.C19ckn1k.svg","/_astro/zm.BmsW91ne.svg","/_astro/zm.D8B-0kdx.svg","/_astro/zw.BsTZ3ABm.svg","/_astro/zw.C6mc_0DL.svg","/projectImages/taskManager/taskManager1.webp","/projectImages/taskManager/taskManager2.webp","/projectImages/taskManager/taskManager3.webp","/projectImages/taskManager/taskManager4.webp","/projectImages/taskManager/taskManager5.webp","/projectImages/taskManager/taskManager6.webp","/en/index.html","/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Hma5F0P4Y2uYJ0WUiluuEcofb9XUktd0o3bIH1diatA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
