// src/data/projects.js

export const allProjects = [
  {
    id: 1,
    title: "E-commerce Storefront",
    description: "A full-featured e-commerce platform built with React and Node.js, featuring user authentication, product catalog, and secure checkout.",
    longDescription: "This project showcases a complete end-to-end shopping experience. Users can browse products, add items to their cart, proceed to checkout with integrated payment gateway (e.g., Stripe sandbox), and manage their orders. Admin panel for product management is also included. Key features: user roles, search & filter, order history, responsive design.",
    image: "https://placehold.co/600x400/1F2937/9CA3AF?text=E-commerce+Project", // Placeholder Image
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe API"],
    github: "https://github.com/yourusername/ecommerce-repo",
    live: "https://ecommerce-demo.vercel.app/",
    features: [
      "User Authentication (JWT)",
      "Product Catalog & Filtering",
      "Shopping Cart & Checkout",
      "Order Management",
      "Responsive Design"
    ]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio, designed to showcase my skills and projects, built with modern web technologies.",
    longDescription: "You're looking at it! This portfolio is a single-page application built with React and styled with Tailwind CSS. It features smooth scroll navigation, Framer Motion animations for dynamic content loading, and a responsive design that looks great on all devices.",
    image: "https://placehold.co/600x400/222222/EEEEEE?text=Portfolio+Site", // Placeholder Image
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/yourusername/portfolio-repo",
    live: "#",
    features: [
      "Interactive Navigation",
      "Dynamic Content Loading",
      "Project Filtering & Search"
    ]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, user roles, and intuitive drag-and-drop interface.",
    longDescription: "This application helps teams organize and track their tasks efficiently. It features user authentication, project creation, task assignment, due dates, and real-time updates using WebSockets. Users can create, update, and delete tasks, assign them to team members, and manage project progress through a Kanban board view. Technologies include React for the frontend, Node.js/Express for the backend, and Socket.IO for real-time communication.",
    image: "https://placehold.co/600x400/3A205C/FFFFFF?text=Task+Manager", // Placeholder Image
    tech: ["React", "Node.js", "Express", "Socket.IO", "PostgreSQL", "Material-UI"],
    github: "https://github.com/yourusername/task-manager-repo",
    live: "https://task-manager-demo.netlify.app/",
    features: [
      "Real-time Collaboration",
      "User Authentication & Authorization",
      "Drag-and-Drop Task Interface",
      "Project & Task Management",
      "Responsive Layout"
    ]
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A sleek, responsive web application displaying real-time weather data for any city using a public API.",
    longDescription: "This project fetches current weather conditions and a 5-day forecast using the OpenWeatherMap API. It features a search bar for cities, displays temperature, humidity, wind speed, and weather icons. The design is clean and responsive, providing a great user experience on both desktop and mobile devices. Built with React and styled with CSS modules for a component-scoped approach.",
    image: "https://placehold.co/600x400/406277/FFFFFF?text=Weather+App", // Placeholder Image
    tech: ["React", "CSS Modules", "OpenWeatherMap API", "JavaScript Fetch API"],
    github: "https://github.com/yourusername/weather-dashboard-repo",
    live: "https://your-weather-app-demo.vercel.app/",
    features: [
      "Current Weather Display",
      "5-Day Forecast",
      "City Search Functionality",
      "Dynamic Weather Icons",
      "Responsive Design"
    ]
  }
];