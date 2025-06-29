export const menuItems = [
  {label: "Home", href:"#"},
  {label: "Projects", href:"#projects"},
  {label: "Skills", href:"#skills"},
  {label: "About Me", href:"#about"},
  {label: "Contact", href:"#contact"},
]

export const intro = `With 10+ years of experience in the IT world, mostly in tech support, testing, and gathering business requirements. After working closely with dev teams for years, I decided to dive into coding myself—and I’ve been hooked since then.
Now, I'm focused on building clean, responsive web apps using React and modern front-end tools. This portfolio is a glimpse into what I’ve been working on as I grow in this new chapter of my tech career. Thanks for checking it out!`;


export const projects = [
  {
    id: 1,
    title: "My Shop - E-commerce App",
    overview:
      "My Shop is a sample e-commerce application designed to simulate a basic online shopping experience. While not fully functional, the app showcases the core flow of an online retail platform—from browsing products to placing an order.",
    images: [
      "./images/projects/myshop1.png",
      "./images/projects/myshop2.png",
      "./images/projects/myshop3.png",
      "./images/projects/myshop4.png"
    ],
    features: [
      "Homepage Browsing: Users can view a selection of items available for purchase on the homepage.",
      "Item Selection: Customers can select individual items to add to their cart for purchase.",
      "Checkout Process: The checkout page summarizes the selected products, including quantities and prices.",
      "Payment Summary: A simplified payment summary is displayed before order placement (no real transactions processed).",
      "Order Placement: Users can 'place' an order, completing the mock shopping flow."
    ],
    status:
      "This is a prototype and not a production-ready app. Backend functionality like user authentication, real payment integration, and order tracking is not implemented.",
  },

  {
    id: 2,
    title: "TaskMaster - To-Do App",
    overview:
      "TaskMaster is a simple to-do list application that allows users to create, edit, and delete tasks. It focuses on productivity and task management with a clean UI.",
    images: [
      "./images/projects/todopage1.png",
      "./images/projects/todopage2.png",
      "./images/projects/todopage3.png",
      "./images/projects/todopage4.png"
    ],
    features: [
      "Add, edit, and delete tasks.",
      "Mark tasks as complete/incomplete.",
      "Filter tasks by status (all, completed, pending).",
      "Responsive design for mobile and desktop.",
    ],
    status: "Fully functional front-end. No backend integration.",

  },
  // {
  //   id: 3,
  //   title: "DevBlog - Developer Blog Platform",
  //   overview:
  //     "DevBlog is a blogging platform where developers can write and share posts. It includes features like post creation, editing, and display with markdown support.",
  //   features: [
  //     "Create and edit blog posts with markdown.",
  //     "Tag and categorize posts.",
  //     "Responsive layout with code-friendly formatting.",
  //   ],
  //   status: "Prototype UI with dummy content and static data.",
  //   purpose:
  //     "A project to experiment with text editing and markdown rendering in a React environment."
  // }
];