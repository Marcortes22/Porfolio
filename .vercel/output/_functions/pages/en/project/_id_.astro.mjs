import { c as createComponent, a as createAstro, d as renderComponent, e as createTransitionScope, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_DpUHH7pj.mjs';
import 'kleur/colors';
import { g as getTranslation, a as getRelativeLocaleUrl, $ as $$Layout, b as $$ShinyButton } from '../../../chunks/ShinyButton_BJE45UjX.mjs';
import { $ as $$Carousel } from '../../../chunks/Carousel_CfWFFA9U.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const languaje = Astro2.url.pathname.includes("/en") ? "en" : "es";
  const projectId = Number(id) ?? 0;
  const currentLocale = getTranslation(Astro2.url.pathname);
  const singleProjectUrl = getRelativeLocaleUrl(languaje);
  const { secctions } = currentLocale;
  const { projectsSection } = secctions[1] || {};
  const project = projectsSection?.projects?.[projectId];
  return renderTemplate`${project && renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-transition-persist": createTransitionScope($$result, "k4n2jkwn") }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<a class="inline-block mt-5  px-2 py-2 rounded-md font-semibold shadow transition-colors duration-300 bg-gray-200 border-gray-300 text-gray-800 hover:bg-gray-100  dark:bg-violet-800 dark:text-white dark:hover:bg-violet-950"${addAttribute(`${singleProjectUrl}#projects`, "href")}>
Back Home
</a><div class="w-full h-full flex flex-col lg:flex-row justify-start sm:justify-between sm:items-start items-center gap-10 py-4"><div class="flex flex-col w-full flex-1 items-center gap-5 "><h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 cursor-default text-center">${project.title}</h3>${renderComponent($$result2, "Carousel", $$Carousel, { "images": project.images })}<div class="flex gap-1 mt-[35px] w-full justify-center">${renderComponent($$result2, "ShinyButton", $$ShinyButton, { "buttonLink": project.links.frontend, "buttonText": "Frontend", "buttonIcon": "/socialMediaIcons/github-dark.svg" })}${renderComponent($$result2, "ShinyButton", $$ShinyButton, { "buttonLink": project.links.demo, "buttonText": "Demo", "buttonIcon": "/socialMediaIcons/Vercel_wordmark_dark.svg" })}${renderComponent($$result2, "ShinyButton", $$ShinyButton, { "buttonLink": project.links.backend, "buttonText": "Backend", "buttonIcon": "/socialMediaIcons/github-dark.svg" })}</div></div><div class="flex flex-col flex-1 w-full  items-center justify-center "><div class="prose prose-ul:mt-0 dark:prose-headings:text-white dark:text-white "><div class="flex items-center justify-center gap-5"><p class="text-lg">My role: </p><p class="px-2 py-1 bg-gray-200 dark:bg-violet-900 rounded">${project.myRole}</p></div><h3 class="text-center lg:text-left">${project.useDescription.title}</h3><p class="text-center lg:text-left">${project.useDescription.description}</p><ul>${project.useDescription.itemsDescription.map((item, index) => renderTemplate`<li${addAttribute(index, "data-key")}>${item}</li>`)}</ul><h3 class="text-center lg:text-left">${project.tecnicDescription.title}</h3><p class="text-center lg:text-left">${project.tecnicDescription.description}</p><ul>${project.tecnicDescription.itemsDescription.map((item, index) => renderTemplate`<li${addAttribute(index, "data-key")}>${item}</li>`)}</ul></div></div></div>` })}`}`;
}, "C:/Users/marco/Desktop/personalProjects/Porfolio/src/pages/en/project/[id].astro", "self");

const $$file = "C:/Users/marco/Desktop/personalProjects/Porfolio/src/pages/en/project/[id].astro";
const $$url = "/en/project/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
