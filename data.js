// ============================================================
//  THIS IS THE FILE YOU'LL EDIT MOST.
//  Add an item by copying one { ... } block, pasting it below,
//  and changing the text. Keep the commas!
// ============================================================

// ---------- PROJECTS ----------
// The sub-tabs on the Projects page. "key" is what you put in a
// project's categories list; "label" is what shows on the button.
const PROJECT_CATEGORIES = [
  // { key: "cybersecurity", label: "Cybersecurity" },
  // { key: "software", label: "Software" },
  { key: "hardware", label: "Hardware" },
  { key: "systems", label: "Systems" },
  // { key: "networking-cloud", label: "Networking + Cloud Computing" },
  // { key: "computer-vision", label: "Computer Vision" },
];

// A project can be in more than one category.
const PROJECTS = [
  /*
  {
    title: "Key Management System",
    categories: ["cybersecurity", "software"],
    description:
      "A cryptographic key management system for generating, storing, rotating, and revoking keys.",
    tags: ["Cryptography", "Security"],
    links: { github: "https://github.com/your-username/kms" },
  },
  */
  /*
  {
    title: "ML Intrusion Detection System",
    categories: ["cybersecurity", "software", "networking-cloud"],
    description:
      "A machine-learning intrusion detection system that flags suspicious network traffic.",
    tags: ["Machine Learning", "Security", "Python"],
    links: { github: "https://github.com/your-username/ml-ids" },
  },
  */
  /*
  {
    title: "Coffee Shop Finder",
    categories: ["software"],
    description:
      "A web app for finding nearby coffee shops, built with Next.js, the Google Maps API, and PostgreSQL.",
    tags: ["Next.js", "PostgreSQL", "Google Maps API"],
    links: { github: "#", demo: "#" },
  },
  */
  {
    title: "Project FLORA",
    categories: ["hardware", "systems"],
    description:
      "A team-built, monitored, climate-controlled plant growth enclosure. I worked on the infrastructure team.",
    tags: ["Embedded", "IoT", "Team"],
    links: {},
  },
  {
    title: "Plant Tamagotchi",
    categories: ["hardware"],
    description:
      "A virtual pet on an ESP32 and a small display that reacts to a real plant's soil moisture. Soldered build in a 3D-printed case.",
    tags: ["ESP32", "Hardware", "3D Printing"],
    links: { devpost: "https://devpost.com/software/plantchi?ref_content=user-portfolio&ref_feature=in_progress"},
  },
  /*
  {
    title: "Computer Vision Wellness Pet",
    categories: ["computer-vision", "hardware"],
    description:
      "Built in 36 hours with a team of 4 for the embedded category: a digital pet that uses computer vision to encourage healthy habits.",
    tags: ["Computer Vision", "Embedded", "Hackathon"],
    links: { devpost: "#" },
  },
  */
];

// ---------- EXTRACURRICULARS ----------
const EXTRA_CATEGORIES = [
  { key: "clubs", label: "Clubs" },
  { key: "hackathons", label: "Hackathons" },
  { key: "competitions", label: "Competitions / CTFs" },
];

// Each item has ONE category from the list above.
// Example club entry to copy:
//   {
//     title: "Club Name",
//     category: "clubs",
//     description: "What the club is and what you do there.",
//     tags: ["Role"],
//     links: {},
//   },
const EXTRACURRICULARS = [
  {
    title: "Computer Vision Wellness Pet (Hackathon)",
    category: "hackathons",
    description:
      "Built in 36 hours with a team of 4 for the embedded category: a digital pet that uses computer vision to encourage healthy habits.",
    tags: ["Computer Vision", "Embedded", "Hackathon"],
    award: "", // e.g. "🏆 1st Place, Embedded" (leave "" if none)
    links: { devpost: "#" },
  },
];

// ---------- COURSES ----------
// Edit the descriptions to say what YOU did or learned in each class.
// Add  url: "courses/some-page.html"  to make a course card clickable.
const COURSES = [
  {
    code: "CNT 3004",
    title: "Computer Network Concepts",
    description: "How networks work, from the physical layer up through TCP/IP, routing, and common protocols.",
    tags: ["Networking", "TCP/IP"],
    url: "courses/cnt3004.html", // clicking the card opens this page
  },
  /*
  {
    code: "CIS 3362",
    title: "Intro to Cryptography",
    description: "Classical and modern ciphers and the number theory behind them: modular arithmetic, primality testing, RSA, and discrete logs.",
    tags: ["Cryptography", "Number Theory"],
  },
  */
  /*
  {
    code: "CDA 3103",
    title: "Computer Logic and Organization",
    description: "How computers work at the hardware level: binary arithmetic, IEEE-754, logic design, and MIPS assembly.",
    tags: ["Architecture", "MIPS", "Logic Design"],
  },
  */
  /*
  {
    code: "CGS 3763",
    title: "Operating Systems",
    description: "Processes, threads, scheduling, memory management, and file systems.",
    tags: ["Operating Systems"],
  },
  */
  /*
  {
    code: "CIS 4940",
    title: "AWS Academy Cloud Operations and Cloud Security Foundations",
    description: "Running and securing workloads on AWS: core services, monitoring, identity and access management, and cloud security practices.",
    tags: ["AWS", "Cloud", "Security"],
  },
  */
];

// ---------- MY THOUGHTS (BLOG) ----------
// Each thought links to its own page inside the /thoughts folder.
const THOUGHTS = [
  {
    title: "Why I got hooked on cryptography",
    date: "2026-11-17",
    summary: "A starter post. Replace this with your first real write-up.",
    url: "thoughts/first-post.html",
  },
];
