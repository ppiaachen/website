import halloween1 from "@/assets/gallery/halloween-1.jpg";
import halloween2 from "@/assets/gallery/halloween-2.jpg";
import halloween3 from "@/assets/gallery/halloween-3.jpg";
import halloween4 from "@/assets/gallery/halloween-4.jpg";
import halloween5 from "@/assets/gallery/halloween-5.jpg";
import halloween6 from "@/assets/gallery/halloween-6.jpg";

import welcoming1 from "@/assets/gallery/welcoming-1.jpg";
import welcoming2 from "@/assets/gallery/welcoming-2.jpg";
import welcoming3 from "@/assets/gallery/welcoming-3.jpg";
import welcoming4 from "@/assets/gallery/welcoming-4.jpg";
import welcoming5 from "@/assets/gallery/welcoming-5.jpg";
import welcoming6 from "@/assets/gallery/welcoming-6.jpg";

import athan1 from "@/assets/gallery/athan-1.jpg";
import athan2 from "@/assets/gallery/athan-2.jpg";
import athan3 from "@/assets/gallery/athan-3.jpg";
import athan4 from "@/assets/gallery/athan-4.jpg";
import athan5 from "@/assets/gallery/athan-5.jpg";
import athan6 from "@/assets/gallery/athan-6.jpg";

import hut77_1 from "@/assets/gallery/hut77-1.jpg";
import hut77_2 from "@/assets/gallery/hut77-2.jpg";
import hut77_3 from "@/assets/gallery/hut77-3.jpg";
import hut77_4 from "@/assets/gallery/hut77-4.jpg";
import hut77_5 from "@/assets/gallery/hut77-5.jpg";
import hut77_6 from "@/assets/gallery/hut77-6.jpg";

import iconic2022_1 from "@/assets/gallery/iconic2022-1.jpg";
import iconic2022_2 from "@/assets/gallery/iconic2022-2.jpg";
import iconic2022_3 from "@/assets/gallery/iconic2022-3.jpg";
import iconic2022_4 from "@/assets/gallery/iconic2022-4.jpg";
import iconic2022_5 from "@/assets/gallery/iconic2022-5.jpg";
import iconic2022_6 from "@/assets/gallery/iconic2022-6.jpg";

import sommergrill2022_1 from "@/assets/gallery/sommergrill2022-1.jpg";
import sommergrill2022_2 from "@/assets/gallery/sommergrill2022-2.jpg";
import sommergrill2022_3 from "@/assets/gallery/sommergrill2022-3.jpg";
import sommergrill2022_4 from "@/assets/gallery/sommergrill2022-4.jpg";
import sommergrill2022_5 from "@/assets/gallery/sommergrill2022-5.jpg";
import sommergrill2022_6 from "@/assets/gallery/sommergrill2022-6.jpg";

const shuffle = (array: GalleryImages[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const images = shuffle([
  {
    src: halloween1,
    alt: "Halloween Party KMKI x PPI Aachen",
    eventUrl: "/events/2023/halloween-x-kmki",
  },
  {
    src: halloween2,
    alt: "Halloween Party KMKI x PPI Aachen",
    eventUrl: "/events/2023/halloween-x-kmki",
  },
  {
    src: halloween3,
    alt: "Halloween Party KMKI x PPI Aachen",
    eventUrl: "/events/2023/halloween-x-kmki",
  },
  {
    src: halloween4,
    alt: "Halloween Party KMKI x PPI Aachen",
    eventUrl: "/events/2023/halloween-x-kmki",
  },
  {
    src: halloween5,
    alt: "Halloween Party KMKI x PPI Aachen",
    eventUrl: "/events/2023/halloween-x-kmki",
  },
  {
    src: halloween6,
    alt: "Halloween Party KMKI x PPI Aachen",
    eventUrl: "/events/2023/halloween-x-kmki",
  },
  {
    src: welcoming1,
    alt: "Pesta Penjamboetan",
    eventUrl: "/events/2023/welcoming-party",
  },
  {
    src: welcoming2,
    alt: "Pesta Penjamboetan",
    eventUrl: "/events/2023/welcoming-party",
  },
  {
    src: welcoming3,
    alt: "Pesta Penjamboetan",
    eventUrl: "/events/2023/welcoming-party",
  },
  {
    src: welcoming4,
    alt: "Pesta Penjamboetan",
    eventUrl: "/events/2023/welcoming-party",
  },
  {
    src: welcoming5,
    alt: "Pesta Penjamboetan",
    eventUrl: "/events/2023/welcoming-party",
  },
  {
    src: welcoming6,
    alt: "Pesta Penjamboetan",
    eventUrl: "/events/2023/welcoming-party",
  },
  { src: athan1, alt: "Athan Cup", eventUrl: "#" },
  { src: athan2, alt: "Athan Cup", eventUrl: "#" },
  { src: athan3, alt: "Athan Cup", eventUrl: "#" },
  { src: athan4, alt: "Athan Cup", eventUrl: "#" },
  { src: athan5, alt: "Athan Cup", eventUrl: "#" },
  { src: athan6, alt: "Athan Cup", eventUrl: "#" },
  { src: hut77_1, alt: "Perayaan Kemerdekaan Indonesia ke-77", eventUrl: "#" },
  { src: hut77_2, alt: "Perayaan Kemerdekaan Indonesia ke-77", eventUrl: "#" },
  { src: hut77_3, alt: "Perayaan Kemerdekaan Indonesia ke-77", eventUrl: "#" },
  { src: hut77_4, alt: "Perayaan Kemerdekaan Indonesia ke-77", eventUrl: "#" },
  { src: hut77_5, alt: "Perayaan Kemerdekaan Indonesia ke-77", eventUrl: "#" },
  { src: hut77_6, alt: "Perayaan Kemerdekaan Indonesia ke-77", eventUrl: "#" },
  { src: iconic2022_1, alt: "ICONIC 2022", eventUrl: "#" },
  { src: iconic2022_2, alt: "ICONIC 2022", eventUrl: "#" },
  { src: iconic2022_3, alt: "ICONIC 2022", eventUrl: "#" },
  { src: iconic2022_4, alt: "ICONIC 2022", eventUrl: "#" },
  { src: iconic2022_5, alt: "ICONIC 2022", eventUrl: "#" },
  { src: iconic2022_6, alt: "ICONIC 2022", eventUrl: "#" },
  { src: sommergrill2022_1, alt: "Sommergrillen 2022", eventUrl: "#" },
  { src: sommergrill2022_2, alt: "Sommergrillen 2022", eventUrl: "#" },
  { src: sommergrill2022_3, alt: "Sommergrillen 2022", eventUrl: "#" },
  { src: sommergrill2022_4, alt: "Sommergrillen 2022", eventUrl: "#" },
  { src: sommergrill2022_5, alt: "Sommergrillen 2022", eventUrl: "#" },
  { src: sommergrill2022_6, alt: "Sommergrillen 2022", eventUrl: "#" },
]);

export type GalleryImages = {
  src: ImageMetadata;
  alt: string;
  eventUrl: string;
};
