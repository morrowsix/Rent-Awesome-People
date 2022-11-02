import { c as create_ssr_component, b as subscribe, e as each, d as add_attribute, f as escape, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let path;
  let navlinks = [
    { title: "Startseite", url: "/" },
    {
      title: "Arbeitnehmer",
      url: "/arbeitnehmer"
    },
    {
      title: "Arbeitgeber",
      url: "/arbeitgeber"
    },
    { title: "Jobs", url: "/jobs" },
    { title: "\xDCber uns", url: "/ueberuns" },
    { title: "Kontakt", url: "/kontakt" }
  ];
  path = $page.url.pathname;
  $$unsubscribe_page();
  return `<nav class="${"relative max-w-container mx-auto flex flex-wrap items-center justify-between py-4 text-primary text-2xl navbar navbar-expand-lg navbar-light uppercase "}"><div class="${"container-fluid w-full flex flex-wrap items-center justify-between"}"><button class="${"navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline "}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarSupportedContent"}" aria-controls="${"navbarSupportedContent"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><svg aria-hidden="${"true"}" focusable="${"false"}" data-prefix="${"fas"}" data-icon="${"bars"}" class="${"w-6"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}"><path fill="${"currentColor"}" d="${"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}"></path></svg></button>
    <div class="${"collapse navbar-collapse flex-grow items-center"}" id="${"navbarSupportedContent"}"><a class="${"flex items-center pr-20 text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 "}" href="${"/"}"><img src="${"/rap-logo.png"}" alt="${"Rent Awesome People Logo"}" loading="${"lazy"}"></a>
      
      <ul class="${"navbar-nav flex flex-grow justify-between flex-col pl-0 list-style-none mx-auto font-medium"}">${each(navlinks, (navlink) => {
    return `<li${add_attribute("class", path === navlink.url ? "text-secondary" : "", 0)}><a class="${"nav-link p-0 hover:text-secondary"}"${add_attribute("href", navlink.url, 0)}>${escape(navlink.title)}</a>
          </li>`;
  })}</ul>
      </div>
    </div></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-primary w-full h-auto"}"><div class="${"max-w-container flex justify-between m-auto pt-10 pb-10"}"><img src="${"/rap-logo-weiss.png"}" alt="${"Logo Wei\xDF"}" class="${"w-[308px] h-[127px]"}">
        <div class="${"text-xl font-light"}"><div class="${"h-12"}"><h6 class="${"uppercase text-white text-xl font-bold"}">Rent awesome people GmbH:
                </h6></div>
            <p class="${"text-white"}">Beatrix Westphal</p>
            <p class="${"text-white"}">c/o neue Denkerei</p>
            <p class="${"text-white"}">Friedrichsstra\xDFe 28</p>
            <p class="${"text-white"}">34117 Kassel</p></div>
        <div class="${"text-xl font-light"}"><div class="${"h-12"}"><h6 class="${"uppercase text-white text-xl font-bold"}">Kontakt</h6></div>
            <a href="${"mailto:info@rent-awesome-people.de"}" class="${"text-white"}">info@rent-awesomde-people.de</a>
            <p class="${"text-white"}"></p>
            <br>
            <a href="${"tel:056058791598"}" class="${"text-white"}">Tel.: +49 05605 8791598</a><br>
            <a href="${"tel:017630304739"}" class="${"text-white"}">Mobil: +49 0176 30304739</a></div>
        <div class="${"text-xl font-light text-right"}"><div class="${"flex justify-end h-12"}"><a href="${""}" class="${"mr-4"}"><img src="${"/facebook-icon.png"}" alt="${"Facebook Icon"}"></a>
                <a href="${""}"><img src="${"/insta-icon.png"}" alt="${"Instagram Icon"}"></a></div>
            <a href="${""}" class="${"text-white"}">Datenschutzerkl\xE4rung</a><br>
            <a href="${""}" class="${"text-white"}">AGB</a><br>
            <a href="${""}" class="${"text-white"}">Impressum</a></div></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"app"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

  <main>${slots.default ? slots.default({}) : ``}</main>

  <footer>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</footer></div>`;
});
export {
  Layout as default
};
