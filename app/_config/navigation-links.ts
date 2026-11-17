const homeLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "What we offer" },
  { href: "/#availability", label: "Walks and prices" },
  { href: "/#book", label: "Get in touch" },
];

const availability = { href: "/availability", label: "Availability" };
const about = { href: "/about", label: "About us" };
const moreLinks = [
  { href: "/faqs", label: "FAQs" },
  { href: "/blog", label: "Blog" },
];

export const navigationLinks = {
  desktop: [...homeLinks, availability, about, ...moreLinks],
  mobile: [...homeLinks, about, availability, ...moreLinks],
};