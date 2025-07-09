export const menuItems = [
  {label: "Home", href:"#"},
  {label: "Projects", href:"#projects"},
  {label: "Skills", href:"#skills"},
  {label: "About Me", href:"#aboutme"},
  {label: "Contact", href:"#contact"},
]

export const intro = `With 10+ years of experience in the IT world, mostly in tech support, testing, and gathering business requirements. After working closely with dev teams for years, I decided to dive into coding myself—and I’ve been hooked since then.
Now, I'm focused on building clean, responsive web apps using React and modern front-end tools. This portfolio is a glimpse into what I’ve been working on as I grow in this new chapter of my tech career. Thanks for checking it out!`;


export const projects = [
  {
    id: 1,
    icon: "./images/projects/shopping-cart.png",
    name: "E-commerce App",
    description: "React + CSS with Media Queries",
    projects: [
      {
        id: "p1",
        title: "My Shop",
        link: "https://wonderful-wisp-5be402.netlify.app/",
        git: "https://github.com/maryGel/myshop",
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
          "This is a prototype and not a production-ready app. Backend functionality like user authentication, real payment integration, and order tracking is not implemented."
      }
    ]
  },

  {
    id: 2,
    icon: "./images/projects/todo.png",
    name: "To-Do App",
    description: "React + Tailwind",

    projects: [
      {
        id: "p2",
        title: "TaskMaster",
        link: "https://glittering-toffee-a1662b.netlify.app/",
        git: "https://github.com/maryGel/creative-apps",
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
        status: "Fully functional front-end. No backend integration."
      }
    ]
  }
];

export const skills = [
  {
    id: 1,
    icons: [
      "./images/skills/html.png",
      "./images/skills/css.png",
      "./images/skills/js.png",
      "./images/skills/react.png",
      "./images/skills/tailwind.png",
      "./images/skills/MUI.jpeg",
    ],
    name: "Frontend Development",
    items: [
      {
        id: 1,
        item: "Languages & Frameworks",
        description: "JavaScript (ES6+), React.js, JSX, HTML5, CSS3",
        icon: "./images/skills/html.png"
      },
      {
        id: 2,
        item: "Styling Libraries",
        description: "Tailwind CSS, Bootstrap, Material-UI",
        icon: "./images/skills/css.png"
      },
      {
        id: 3,
        item: "Tools & Build Systems",
        description: "npm, Vite, Git, GitHub",
        icon: "./images/skills/javascript.png"
      }
    ]
  },
  {
    id: 2,
    icons: [
      "./images/skills/sap.png",
      "./images/skills/oracle.png",
    ],
    name: "ERP Systems",
    items: [
      {
        id: 1,
        item: "SAP ECC",
        description: "Modules: FICO, MM, Treasury",
        icon: "./images/skills/html.png"
      },
      {
        id: 2,
        item: "Oracle NetSuite",
        description: "General System setups and Navigation, Supply Chain Management",
        icon: "./images/skills/css.png"
      },
      {
        id: 3,
        item: "Other Custom System integration",
        description: "MAIA, FIORI, and other custom systems",
        icon: "./images/skills/javascript.png"
      }
    ]
  },
  {
    id: 3,
    icons: [
      "./images/skills/excel.png",
      "./images/skills/ETL.png",
    ],
    name: "Data & Reporting Tools",
    items: [
      {
        id: 1,
        item: "Microsoft Excel (Advanced)",
        description: "Pivot Tables, Data Analysis, Macros",
        icon: "./images/skills/html.png"
      },
      {
        id: 2,
        item: "ETL Tools",
        description: "Experience with data extraction, transformation, and loading processes",
        icon: "./images/skills/css.png"
      },
      {
        id: 3,
        item: "SAP FI Reports",
        description: "Generation of standard and custom financial reports",
        icon: "./images/skills/javascript.png"
      }
    ]
  },
  {
    id: 4,
    icons: [
      "./images/skills/jira.png",
      "./images/skills/confluence.png",
      "./images/skills/vscode.png",
      "./images/skills/github.png",
    ],
    name: "Project & Collaboration Tools",
    items: [
      {
        id: 1,
        item: "JIRA",
        description: "Agile task tracking and project management",
        icon: "./images/skills/html.png"
      },
      {
        id: 2,
        item: "Confluence",
        description: "Documentation and knowledge sharing",
        icon: "./images/skills/css.png"
      },
      {
        id: 3,
        item: "VS Code, GitHub, Git",
        description: "Version control, collaborative development, and deployment workflows",
        icon: "./images/skills/javascript.png"
      }
    ]
  }
];

export const aboutme =[
  {
    id: 1,
    description: (
      <>
        <p>
        Driven by curiosity and a desire to build practical, meaningful solutions, I'm a self-taught React developer with a background in Accountancy.
        Although I hold a <strong className='text-yellow-300'>Bachelor of Science in Accountancy</strong>, much of my professional journey has revolved around project development—particularly in  
        <strong className='text-yellow-300'> testing, business requirements gathering, and technical support</strong>. In my most recent role, I provided technical support for <strong className='text-yellow-300'>ERP Systems</strong>, 
        with a special focus on the Financial (FI) modules. These experiences introduced me to the powerful connection between business needs and technical solutions, 
        ultimately inspiring me to start learning how to code.
        <br/>
        <br/>
        As an introvert, I find deep focus and fulfillment in creating thoughtful, efficient software. I may still be early in my developer journey, 
        but my curiosity and dedication keep me moving forward. My goal is to one day build applications that help people work smarter and more efficiently. 
        <strong className='text-yellow-300'> I'm constantly learning, improving, and building—and I'm excited to grow into the developer I aspire to be.</strong>
        </p>      
      </>
    ),
    links: [
      "https://www.coursera.org/account/accomplishments/verify/7Q6ZLQJ9611D",
      "https://www.coursera.org/account/accomplishments/verify/JC1TU3W4B4AS",
      "https://coursera.org/share/6a9abc96d3e07dcbede0badf0408e834",
      "https://coursera.org/share/64e66e8e64a42f6ef51682a46414d234"
    ]
  }
]