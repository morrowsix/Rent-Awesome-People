import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<iframe id="${"coveto_iframe"}" src="${"https://k58053.coveto.de/public/jobs/"}" border="${"0"}" style="${"border: none;"}" width="${"100%"}" height="${"600"}"></iframe><p id="${"poweredbycoveto"}" style="${"margin-top:20px; text-align:right;"}"><a style="${"font-size: 10px; color: #AAA;text-decoration:none;"}" href="${"http://www.coveto.de"}" target="${"_blank"}" rel="${"noopener"}">powered by coveto, Software f\xFCr Bewerberverwaltung</a></p>

`;
});
export {
  Page as default
};
