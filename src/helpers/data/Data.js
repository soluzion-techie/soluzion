import { Instagram } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const ROUTES = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },

  {
    id: 2,
    name: "About",
    path: "#about",
  },

  {
    id: 3,
    name: "Services",
    path: "#services",
  },

  {
    id: 4,
    name: "Projects",
    path: "#projects",
  },

  {
    id: 5,
    name: "Contact",
    path: "#contact",
  },
];

export const SOCIAL_MEDIA = [
  {
    icon: FaXTwitter,
    link: "https://twitter.com",
  },
  {
    icon: FaLinkedin,
    link: "https://linkedin.com",
  },
  {
    icon: Instagram,
    link: "https://instagram.com",
  },
];

export const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of services including web development, mobile app development, UX design, backend development, and content creation.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline for a project depends on its complexity. Typically, small projects take 2-4 weeks, while larger projects may take several months.",
  },
  {
    question: "Can you customize a project according to our needs?",
    answer:
      "Yes, we tailor every project to meet the specific needs and goals of our clients.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing is project-based and depends on the scope and complexity of the work. Contact us for a detailed quote.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer post-launch support and maintenance to ensure your project runs smoothly.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Revolution",
    description:
      "A scalable and intuitive e-commerce platform built with ReactJS and Node.js, providing seamless user experiences and robust backend integration. Perfect for businesses aiming to go digital with style and efficiency.",
    techStack: ["ReactJS", "Node.js", "MongoDB", "TailwindCSS"],
    projectImage: "ecommerce-revolution.png", // Image file or URL
  },
  {
    id: 2,
    title: "Mobile Productivity App",
    description:
      "A cross-platform mobile app designed to enhance productivity for teams and individuals. Developed using React Native, it features task management, calendar integration, and real-time collaboration tools.",
    techStack: ["React Native", "Firebase", "Redux"],
    projectImage: "mobile-productivity.png",
  },
  {
    id: 3,
    title: "Portfolio Showcase",
    description:
      "A sleek, visually appealing portfolio website designed for creative professionals. Focused on highlighting skills, projects, and testimonials in an interactive format.",
    techStack: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    projectImage: "portfolio-showcase.png",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description:
      "An advanced analytics dashboard for a SaaS product, providing real-time data visualization and user management capabilities. Built with scalability and performance in mind.",
    techStack: ["ReactJS", "Express", "Chart.js", "TailwindCSS"],
    projectImage: "saas-dashboard.png",
  },
  {
    id: 5,
    title: "Content Creation Hub",
    description:
      "A centralized platform for content creators to manage their work, collaborate with others, and distribute their creations efficiently. Includes cloud integration and a robust CMS.",
    techStack: ["Next.js", "AWS S3", "Prisma"],
    projectImage: "content-creation.png",
  },
  {
    id: 6,
    title: "Health & Wellness Tracker",
    description:
      "A modern health and wellness app designed to help users track their fitness goals, monitor progress, and stay motivated. Includes personalized dashboards and integration with wearables.",
    techStack: ["Flutter", "Firebase", "GraphQL"],
    projectImage: "health-tracker.png",
  },
];

export const FOOTER_DATA = [
  {
    id: 1,
    name: "Quick Links",
    child: [
      { id: 1, name: "Home", path: "/" },
      { id: 2, name: "About", path: "#about" },
      { id: 3, name: "Services", path: "#services" },
      { id: 4, name: "Projects", path: "#projects" },
      { id: 5, name: "Contact", path: "#contact" },
    ],
  },
  {
    id: 2,
    name: "Services",
    child: [
      { id: 1, name: "Web Development", path: "#" },
      { id: 2, name: "Mobile App Development", path: "#" },
      { id: 3, name: "UX Design", path: "#" },
      { id: 4, name: "Backend Development", path: "#" },
      { id: 5, name: "Content Creation", path: "#" },
    ],
  },

  {
    id: 3,
    name: "Policies",
    child: [
      { id: 1, name: "Terms & Conditions", path: "#" },
      { id: 2, name: "Privacy Policy", path: "#" },
      { id: 3, name: "Cookie Policy", path: "#" },
    ],
  },
];
