import { EventProps } from "../types/type";

export const navItems = [
  {
    title: "nav.home",
    path: "/",
  },

  {
    title: "nav.about",
    path: "/about",
  },

  {
    title: "nav.products",
    path: "/products",
  },

  {
    title: "Technical Solutions",
    path: "/technical-solutions",
  },

  {
    title: "Contact Us",
    path: "/contact",
  },
];

export const homeItems = [
  {
    id: 1,
    path: "/first",
    title: "products.firstTitle",
    pic: "./images/Reverse.jpeg",
  },

  {
    id: 2,
    path: "/second",
    title: "products.secondTitle",
    pic: "./images/Wastewater.jpeg",
  },

  {
    id: 3,
    path: "/third",
    title: "products.thirdTitle",
    pic: "./images/IndustrialCleaning.jpeg",
  },

  {
    id: 4,
    path: "/fourth",
    title: "products.fourthTitle",
    pic: "./images/Bolier water.jpeg",
  },
];

export const firstComponentItems = [
  { path: "/firstCom", title: "Title 1", pic: "./images/Kurumsal.png" },

  {
    path: "/secondCom",
    title: "Title 2",
    pic: "./images/atiksu-aritma02.jpeg",
  },
];

export const aboutText = [
  "Bimaks is a leading company established in Istanbul in 2006. It provides reliable service to its customers by combining the production and sales of water treatment chemicals and industrial cleaning and maintenance chemicals. Bimaks, which continues its research and development activities in line with the developing technology and aims to move forward with its active staff, began to make a difference with the product quality-price ratio in a very short period of time. With its ever-growing product range, it offers rational and practical solutions to the needs. Bimaks was able to announce its name not only in Turkey, but also in many foreign countries and it has proved the quality of its products. In the spirit of ”Team Work” concept, every solution we create for our customers is a source of success and pride for us having a structure that attaches the importance to information sharing and being open to developments.",
];

export const events: EventProps[] = [
  {
    image: "/images/Kurumsal.png",
    title: "Event 1",
    subtitle: "This is the subtitle for Event 1.",
    id: 1,
  },
  {
    image: "/images/Kurumsal.png",
    title: "Event 2",
    subtitle: "This is the subtitle for Event 2.",
    id: 2,
  },
  {
    image: "/images/Kurumsal.png",
    title: "Event 3",
    subtitle: "This is the subtitle for Event 3.",
    id: 3,
  },
];
