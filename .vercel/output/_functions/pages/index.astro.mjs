/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as addAttribute, b as renderSlot, e as createAstro, f as renderComponent, g as renderHead } from '../chunks/astro/server_BubWXje0.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$a = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/Giron/Desktop/portfolio/node_modules/lucide-astro/dist/.Layout.astro", undefined);

const $$Astro$9 = createAstro();
const $$ArrowUpRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ArrowUpRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "arrow-up-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M7 7h10v10"></path> <path d="M7 17 17 7"></path> ` })}`;
}, "C:/Users/Giron/Desktop/portfolio/node_modules/lucide-astro/dist/ArrowUpRight.astro", undefined);

const $$Astro$8 = createAstro();
const $$BadgeCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BadgeCheck;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "badge-check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path> <path d="m9 12 2 2 4-4"></path> ` })}`;
}, "C:/Users/Giron/Desktop/portfolio/node_modules/lucide-astro/dist/BadgeCheck.astro", undefined);

const $$Astro$7 = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "code", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<polyline points="16 18 22 12 16 6"></polyline> <polyline points="8 6 2 12 8 18"></polyline> ` })}`;
}, "C:/Users/Giron/Desktop/portfolio/node_modules/lucide-astro/dist/Code.astro", undefined);

const $$Astro$6 = createAstro();
const $$Coffee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Coffee;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "coffee", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M10 2v2"></path> <path d="M14 2v2"></path> <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path> <path d="M6 2v2"></path> ` })}`;
}, "C:/Users/Giron/Desktop/portfolio/node_modules/lucide-astro/dist/Coffee.astro", undefined);

const $$Astro$5 = createAstro();
const $$GraduationCap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$GraduationCap;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "graduation-cap", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path> <path d="M22 10v6"></path> <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path> ` })}`;
}, "C:/Users/Giron/Desktop/portfolio/node_modules/lucide-astro/dist/GraduationCap.astro", undefined);

const $$Astro$4 = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mail", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="20" height="16" x="2" y="4" rx="2"></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> ` })}`;
}, "C:/Users/Giron/Desktop/portfolio/node_modules/lucide-astro/dist/Mail.astro", undefined);

const $$Astro$3 = createAstro();
const $$MapPin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MapPin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "map-pin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle> ` })}`;
}, "C:/Users/Giron/Desktop/portfolio/node_modules/lucide-astro/dist/MapPin.astro", undefined);

const $$Astro$2 = createAstro();
const $$Phone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "phone", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path> ` })}`;
}, "C:/Users/Giron/Desktop/portfolio/node_modules/lucide-astro/dist/Phone.astro", undefined);

const $$Astro$1 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-[#393b41] to-[#1a1b1e] text-white p-8 md:p-16 relative">  <div class="grid md:grid-cols-2 gap-12 sm:grid-cols-1"> <div class="space-y-8"> <div class="flex flex-col gap-2"> <img src="src/assets/img/logoGiron.svg" alt="Logo Personal" class="w-28 object-cover"> <div class="flex items-center gap-2 text-xs"> <span class="text-emerald-400">DESARROLLADOR WEB</span> <span class="text-zinc-500">|</span> <span class="text-zinc-500">BACKEND DEVELOPER</span> </div> </div> <header> <h1 class="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">
Explora mi trabajo y experiencia
</h1> <p class="text-zinc-400 text-sm md:text-xl mt-4 sm:text-base text-justify">
Gracias por visitar mi portafolio. Aquí podrás conocer más sobre mi trayectoria, habilidades y proyectos que me apasionan.
</p> </header> <section> <p class="text-zinc-400 text-sm text-justify">
Soy un desarrollador backend apasionado con más de 2 años de experiencia en el desarrollo de sistemas web escalables y funcionales. 
                Mi enfoque se centra en resolver problemas mediante soluciones tecnológicas eficientes y en contribuir al éxito de proyectos innovadores.
</p> </section> <section> <ul class="text-zinc-400 text-lg sm:text-base space-y-2"> <li class="flex items-center gap-2 text-sm"> ${renderComponent($$result, "MapPin", $$MapPin, { "class": "w-5 h-5" })}
Tuxtla Gutiérrez, Chiapas, México
</li> <li class="flex items-center gap-2"> ${renderComponent($$result, "Mail", $$Mail, { "class": "w-5 h-5" })} <a href="mailto:fran.giron04@gmail.com" class="text-[#34d399] hover:underline text-sm">
fran.giron04@gmail.com
</a> </li> <li class="flex items-center gap-2"> ${renderComponent($$result, "Phone", $$Phone, { "class": "w-5 h-5" })} <a href="tel:+529611207065" class="text-[#34d399] hover:underline text-sm">
+52 961 120 7065
</a> </li> </ul> </section> <section class="mt-8"> <h2 class="text-sm font-semibold mb-4 ">socials</h2> <ul class="flex space-x-6"> <li> <a href="https://github.com/Gironmv12" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-zinc-400 hover:text-emerald-400"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"${spreadAttributes(props)}><path fill="#ffffff" d="M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.4 15.4 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z"></path></svg>
GitHub
</a> </li> <li> <a href="https://www.linkedin.com/in/franciscogiron12/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-zinc-400 hover:text-emerald-400"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"${spreadAttributes(props)}><path fill="#ffffff" d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z"></path></svg>
LinkedIn
</a> </li> <li> <a href="https://www.tiktok.com/@giron.developer" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-zinc-400 hover:text-emerald-400"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"${spreadAttributes(props)}><path fill="#ffffff" d="M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22 22 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.62 4.62 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z"></path></svg>
TikTok
</a> </li> </ul> </section> </div>  <div class="relative flex justify-center items-center mt-8 md:mt-0"> <div class="rounded-3xl overflow-hidden w-full h-48 sm:h-64 md:w-[500px] md:h-[500px]"> <img src="src/assets/img/me-Photoroom.png" alt="Portrait in foggy forest" class="w-full h-full object-contain rounded-3xl"> </div> </div> </div> </div>`;
}, "C:/Users/Giron/Desktop/portfolio/src/components/about.astro", undefined);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-10 p-4 md:p-16">  <div class="flex flex-col md:flex-row justify-between items-center mb-12"> <div class="space-y-4 text-center md:text-left"> <span class="text-xs bg-[#131415] text-[#a7aab4] px-4 py-2 rounded-full">
PARADAS PROFESIONALES
</span> <h2 class="text-2xl md:text-4xl font-semibold text-white">Experiencia Profesional</h2> </div> <a href="/doc/cv_Actualizado_Giron.pdf" class="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors mt-4 md:mt-0" target="_blank">
Ver CV
${renderComponent($$result, "ArrowUpRight", $$ArrowUpRight, { "className": "w-4 h-4" })} </a> </div>  <div class="border-t border-zinc-800"> <div class="py-4 md:py-8 flex flex-col md:flex-row justify-between items-start"> <div> <h3 class="text-lg md:text-xl font-medium text-white">Secretaría de Identidad y Responsabilidad Universitaria (SIRESU)</h3> <p class="text-zinc-400 mt-1">Desarrollador FullStack</p> </div> <span class="text-zinc-400 text-sm md:text-base">Julio 2024 - Diciembre 2024 | Tuxtla Gutiérrez, Chiapas, México</span> </div> <ul class="list-none text-zinc-400 text-sm md:text-lg space-y-2"> <li class="flex items-start text-sm md:text-base"> ${renderComponent($$result, "BadgeCheck", $$BadgeCheck, { "class": "w-5 h-5 mr-2 text-[#34d399]" })}
Desarrollo y mantenimiento de aplicaciones web responsivas utilizando PHP y Laravel.
</li> <li class="flex items-start text-sm md:text-base"> ${renderComponent($$result, "BadgeCheck", $$BadgeCheck, { "class": "w-5 h-5 mr-2 text-[#34d399]" })}
Implementación de APIs Restful para funcionalidades avanzadas.
</li> <li class="flex items-start text-sm md:text-base"> ${renderComponent($$result, "BadgeCheck", $$BadgeCheck, { "class": "w-5 h-5 mr-2 text-[#34d399]" })}
Mantenimiento y optimización de la base de datos en MySQL.
</li> <li class="flex items-start text-sm md:text-base"> ${renderComponent($$result, "BadgeCheck", $$BadgeCheck, { "class": "w-5 h-5 mr-2 text-[#34d399]" })}
Creación de nuevas funcionalidades para mejorar la experiencia del usuario.
</li> <li class="flex items-start text-sm md:text-base"> ${renderComponent($$result, "BadgeCheck", $$BadgeCheck, { "class": "w-5 h-5 mr-2 text-[#34d399]" })}
Diseño de interfaces modernas y responsivas con Tailwind CSS.
</li> </ul> </div> </div>`;
}, "C:/Users/Giron/Desktop/portfolio/src/components/Experience.astro", undefined);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="md:p-16 p-4">  <div class="flex flex-col md:flex-row justify-between items-center mb-12"> <div class="flex items-center mb-4 md:mb-0"> ${renderComponent($$result, "GraduationCap", $$GraduationCap, { "class": "w-8 h-8 mr-4 text-[#34d399]" })} <h2 class="text-2xl md:text-4xl font-semibold text-white">Educación</h2> </div> </div>  <div class="border-t border-zinc-800"> <div class="py-4 md:py-8 flex flex-col md:flex-row justify-between items-start"> <div> <h3 class="text-lg md:text-xl font-medium text-white">Licenciatura en Sistemas Computacionales</h3> <p class="text-zinc-400 mt-1">Universidad Autónoma de Chiapas (UNACH)</p> </div> <span class="text-zinc-400 text-sm md:text-base">Agosto 2021 - Presente | Tuxtla Gutiérrez, Chiapas, México</span> </div> <ul class="list-none text-zinc-400 text-sm md:text-lg space-y-2"> <li class="flex items-start text-sm md:text-base"> ${renderComponent($$result, "Code", $$Code, { "class": "w-5 h-5 mr-2 text-[#34d399]" })}
Adquirí una sólida formación en desarrollo de software, bases de datos y metodologías ágiles.
</li> <li class="flex items-start text-sm md:text-base"> ${renderComponent($$result, "Code", $$Code, { "class": "w-5 h-5 mr-2 text-[#34d399]" })}
Participé en proyectos académicos relacionados con sistemas web y APIs Restful.
</li> <li class="flex items-start text-sm md:text-base"> ${renderComponent($$result, "Code", $$Code, { "class": "w-5 h-5 mr-2 text-[#34d399]" })}
Desarrollé habilidades técnicas en PHP, Laravel, MySQL y tecnologías de frontend como Tailwind CSS.
</li> <li class="flex items-start text-sm md:text-base"> ${renderComponent($$result, "Code", $$Code, { "class": "w-5 h-5 mr-2 text-[#34d399]" })}
Realicé prácticas profesionales en la Secretaría de Identidad y Responsabilidad Universitaria (SIRESU)
</li> </ul> </div> </div>`;
}, "C:/Users/Giron/Desktop/portfolio/src/components/Education.astro", undefined);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="p-4 md:p-16">  <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12"> <div class="space-y-4"> <div class="flex items-center gap-3"> <div class="bg-zinc-800 p-3 rounded-xl"> ${renderComponent($$result, "Coffee", $$Coffee, { "class": "w-6 h-6 text-[#34d399]" })} </div> <h2 class="text-2xl md:text-4xl font-semibold text-white">Personal Projects</h2> </div> <p class="text-zinc-400 text-sm md:text-base">Una recopilación de todos los proyectos que alimentan mi creatividad</p> </div> </div>  <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <a href="#" class="group" target="_blank"> <div class="relative bg-[#232529] border border-[#2f3037] rounded-2xl p-6 aspect-[4/5] overflow-hidden transition-transform hover:scale-[1.02]"> <span class="absolute top-4 right-4 text-sm bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full z-10 text-[#34d399]">
2025 - Presente
</span> <div class="h-full flex flex-col justify-between relative z-10"> <div class="mx-auto mt-8 relative"> <img src="src/assets/img/blackclassic.png" alt="Badges" class="w-2/4 object-cover mx-auto"> </div> <div> <h3 class="text-md font-semibold text-white truncate">Software Bar BlackClassic</h3> <p class="text-zinc-400 text-sm">Software Bar BlackClassic es un sistema integral de gestión diseñado específicamente para bares y restaurantes, que combina eficiencia y elegancia en cada función</p> <ul class="mt-2 text-sm text-zinc-300"> <li>Rol: Desarrollador Backend.</li> <li>Tecnologías: NODE JS, REACT JS, Tailwind CSS, MySQL, APIs Restful, Git, Postman.</li> <li>Funcionalidad destacada: Gestión de Reservas Dinámica,Generación Automática de Comandas y Tickets .</li> </ul> </div> </div> </div> </a>  <a href="https://github.com/Gironmv12/editorial.git" class="group" target="_blank"> <div class="relative bg-[#232529] border border-[#2f3037] rounded-2xl p-6 aspect-[4/5] overflow-hidden transition-transform hover:scale-[1.02]"> <span class="absolute top-4 right-4 text-sm bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full z-10 text-[#34d399]">
2024 - presente
</span> <div class="h-full flex flex-col justify-between relative z-10"> <div class="mx-auto mt-8 relative"> <img src="src/assets/img/logoSiresu.png" alt="Badges" class="w-2/4 object-cover mx-auto"> </div> <div> <h3 class="text-md font-semibold text-white truncate">Sistema de Biblioteca para la Editorial UNACH</h3> <p class="text-zinc-400 text-sm">Diseñé y desarrollé un sistema para administrar libros y gestionar la cartelera de publicaciones de la UNACH.</p> <ul class="mt-2 text-sm text-zinc-300"> <li>Rol: Desarrollador FullStack.</li> <li>Tecnologías: PHP, Laravel, Tailwind CSS, MySQL, APIs Restful, Git, Postman.</li> <li>Funcionalidad destacada: Creación de APIs para integrar el sistema con otras plataformas.</li> </ul> </div> </div> </div> </a>  <a href="https://github.com/Gironmv12/Fletex.git" class="group" target="_blank"> <div class="relative bg-[#232529] border border-[#2f3037] rounded-2xl p-6 aspect-[4/5] overflow-hidden transition-transform hover:scale-[1.02]"> <span class="absolute top-4 right-4 text-sm bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full z-10 text-[#34d399]">
2024
</span> <div class="h-full flex flex-col justify-between relative z-10"> <div class="mx-auto mt-8 relative"> <img src="src/assets/img/fletexlogo.png" alt="Badges" class="w-2/4 object-cover mx-auto"> </div> <div> <h3 class="text-md font-semibold text-white truncate">Sistema de Logistica y Transporte</h3> <p class="text-zinc-400 text-sm">Desarrollé un sistema integral de gestión logística y transporte enfocado en optimizar la planificación, seguimiento y control de recursos y flujos de transporte en toda la cadena de suministro.</p> <ul class="mt-2 text-sm text-zinc-300"> <li>Rol: Desarrollador FullStack.</li> <li>Tecnologías: Node.js, Express.js, React.js, Tailwind CSS.</li> <li>Funcionalidad destacada: Gestión eficiente de rutas y recursos logísticos.</li> </ul> </div> </div> </div> </a> </div> </div>`;
}, "C:/Users/Giron/Desktop/portfolio/src/components/Projects.astro", undefined);

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="container"> ${renderComponent($$result, "About", $$About, {})} ${renderComponent($$result, "Experience", $$Experience, {})} ${renderComponent($$result, "Education", $$Education, {})} ${renderComponent($$result, "Projects", $$Projects, {})} </div>`;
}, "C:/Users/Giron/Desktop/portfolio/src/components/Welcome.astro", undefined);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Mi portafolio</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Giron/Desktop/portfolio/src/layouts/Layout.astro", undefined);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "C:/Users/Giron/Desktop/portfolio/src/pages/index.astro", undefined);

const $$file = "C:/Users/Giron/Desktop/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
