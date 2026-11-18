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
    summary: "From a crytpogrpahy book in 8th grade and my first advanced class to my own research",
  },
];

// Courses show up as cards in the Courses section.
// Edit the descriptions to say what YOU did or learned in each class.
const COURSES = [
  {
    code: "CNT 3004",
    title: "Computer Network Concepts",
    description: "How networks work, from the physical layer up through TCP/IP, routing, and common protocols.",
    tags: ["Networking", "TCP/IP"],
  },
  {
    code: "CIS 3362",
    title: "Intro to Cryptography",
    description: "Classical and modern ciphers and the number theory behind them: modular arithmetic, primality testing, RSA, and discrete logs.",
    tags: ["Cryptography", "Number Theory"],
  },
  {
    code: "CDA 3103",
    title: "Computer Logic and Organization",
    description: "How computers work at the hardware level: binary arithmetic, IEEE-754, logic design, and MIPS assembly.",
    tags: ["Architecture", "MIPS", "Logic Design"],
  },
  {
    code: "CGS 3763",
    title: "Operating Systems",
    description: "Processes, threads, scheduling, memory management, and file systems.",
    tags: ["Operating Systems"],
  },
  {
    code: "CIS 4940",
    title: "AWS Academy Cloud Operations and Cloud Security Foundations",
    description: "Running and securing workloads on AWS: core services, monitoring, identity and access management, and cloud security practices.",
    tags: ["AWS", "Cloud", "Security"],
  },
];
