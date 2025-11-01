import type { Testimonial } from "../types/testimonials";

export const TESTIMONIALS_1: Testimonial[] = [
  {
    handle: "@rezakarimi_dev",
    avatar: "https://avatars.githubusercontent.com/u/11530223?v=4",
    displayName: "Reza Karimi",
    bio: "Full-Stack Developer & DevOps Engineer",
    url: "https://x.com/rezakarimi_dev/status/1981112233445566777",
    content:
      "Amirali is one of those rare developers who truly understands both hardware and software. His approach to system design is clean, scalable, and elegant.",
  },
  {
    handle: "@saranazari",
    avatar: "https://avatars.githubusercontent.com/u/24680135?v=4",
    displayName: "Sara Nazari",
    bio: "Frontend Engineer | React Enthusiast",
    url: "https://x.com/saranazari/status/1982223344556677888",
    content:
      "Working with Amirali was inspiring — his deep understanding of React, Node.js, and Docker made our deployment workflow effortless.",
  },
  {
    handle: "@elina_mk",
    avatar: "https://avatars.githubusercontent.com/u/67452310?v=4",
    displayName: "Elina M.",
    bio: "Product Designer at NextUI Studio",
    url: "https://x.com/elina_mk/status/1984445566778899000",
    content:
      "Collaborating with Amirali was a joy — strong technical insight combined with a great eye for design. A true full-stack creator.",
  },
];

export const TESTIMONIALS_2: Testimonial[] = [
  {
    handle: "@mannupaaji",
    avatar:
      "https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg",
    displayName: "Manu Arora",
    bio: "Creator of ui.aceternity.com",
    url: "https://x.com/mannupaaji/status/1944755561117163597",
    content: "Great work on the portfolio",
  },
  {
    handle: "@MaxPrilutskiy",
    avatar:
      "https://pbs.twimg.com/profile_images/1913274259985854464/rWnStpCJ_400x400.jpg",
    displayName: "Max Prilutskiy",
    bio: "Creator of Lingo.dev",
    url: "https://x.com/MaxPrilutskiy/status/1923952193893466379",
    content: "i like your style! :)",
  },
  {
    handle: "@aaronmahlke",
    avatar:
      "https://pbs.twimg.com/profile_images/1900513355447603200/mDqwmkZT_400x400.jpg",
    displayName: "Aaron",
    bio: "Founding Design Engineer at Mail0",
    url: "https://x.com/aaronmahlke/status/1955606729657344490",
    content: "super cool portfolio!",
  },
  {
    handle: "@jordwalke",
    avatar:
      "https://pbs.twimg.com/profile_images/1333329963383103489/ee7VrWQy_400x400.jpg",
    displayName: "jordwalke",
    bio: "Creator of React",
    url: "https://x.com/jordwalke/status/1937165909778657589",
    content: "Looks great",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  ...TESTIMONIALS_1,
  ...TESTIMONIALS_2,
];
