// ============================================================
//  THIS IS THE FILE YOU'LL EDIT MOST.
//  Add a project or a thought by copying one { ... } block,
//  pasting it below, and changing the text. Keep the commas!
// ============================================================

const PROJECTS = [
  {
    title: "Key Management System",
    type: "project", // "project" or "competition"
    description:
      "A cryptographic key management system for generating, storing, rotating, and revoking keys.",
    tags: ["Cryptography", "Security"],
    links: { github: "https://github.com/your-username/kms" },
  },
  {
    title: "ML Intrusion Detection System",
    type: "project",
    description:
      "A machine-learning intrusion detection system that flags suspicious network traffic.",
    tags: ["Machine Learning", "Security", "Python"],
    links: { github: "https://github.com/your-username/ml-ids" },
  },
  {
    title: "Coffee Shop Finder",
    type: "project",
    description:
      "A web app for finding nearby coffee shops, built with Next.js, the Google Maps API, and PostgreSQL.",
    tags: ["Next.js", "PostgreSQL", "Google Maps API"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "Project FLORA",
    type: "project",
    description:
      "A team-built, monitored, climate-controlled plant growth enclosure. I worked on the infrastructure team.",
    tags: ["Embedded", "IoT", "Team"],
    links: {},
  },
  {
    title: "Plant Tamagotchi",
    type: "project",
    description:
      "A virtual pet on an ESP32 and a small display that reacts to a real plant's soil moisture. Soldered build in a 3D-printed case.",
    tags: ["ESP32", "Hardware", "3D Printing"],
    links: {},
  },
  {
    title: "Computer Vision Wellness Pet (Hackathon)",
    type: "competition",
    description:
      "Built in 36 hours with a team of 4 for the embedded category: a digital pet that uses computer vision to encourage healthy habits.",
    tags: ["Computer Vision", "Embedded", "Hackathon"],
    award: "", // e.g. "🏆 1st Place, Embedded" (leave "" if none)
    links: { devpost: "#" },
  },
];

// Each thought links to its own page inside the /thoughts folder.
const THOUGHTS = [
  {
    title: "Why I got hooked on cryptography",
    date: "2026-11-17",
    summary: "A starter post. Replace this with your first real write-up.",
    url: "thoughts/first-post.html",
  },
];
