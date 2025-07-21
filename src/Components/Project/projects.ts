const projects = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dtf5nwiic/image/upload/v1752761247/portfolio_pic_ktmnja.png",
    title: "Portfolio Website",
    description: "Personal portfolio website built using HTML, Tailwind CSS, and JavaScript.",
    url: "https://abdulsamiportfolio.vercel.app/",
    repo: null, // Optional: add if hosted on GitHub
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dtf5nwiic/image/upload/v1752761247/internship-02_vtdxvi.png",
    title: "E-Commerce UI",
    description: "Responsive frontend e-commerce interface built with React and Tailwind CSS.",
    url: "https://internship-02.netlify.app/",
    repo: null,
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dtf5nwiic/image/upload/v1752761248/internship-03_zj72pk.png",
    title: "Cosmetics E-Commerce Site",
    description: "Full-stack cosmetics store with authentication, Redux Toolkit, and MERN stack.",
    url: "https://cosmetics-mocha.vercel.app/login",
    repo: null, // Private or internship code
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dtf5nwiic/image/upload/v1752761246/documentgpt_tewfql.png",
    title: "DocumentGPT",
    description: "RAG-based document chatbot using LLMs for question answering.",
    url: "https://ai-documentgpt.streamlit.app/",
    repo: null,
  },
  {
    id: 5,
    image: "/assets/projects/paklaw-gpt.png",
    title: "Pak-Law GPT",
    description: "Legal assistant chatbot using LLMs and custom RAG pipeline.",
    url: "#", // Add Streamlit/public link if available
    repo: null,
  },
  {
    id: 6,
    image: "/assets/projects/persona-chat.png",
    title: "Persona Chatbot",
    description: "Conversational chatbot with persona tuning using large language models.",
    url: "#",
    repo: null,
  },
  {
    id: 7,
    image: "/assets/projects/proposal-review.png",
    title: "Proposal Review Bot",
    description: "Academic research proposal evaluator using GPT and custom prompts.",
    url: "#",
    repo: null,
  },
  {
    id: 8,
    image: "/assets/projects/voting-system.png",
    title: "Console Voting System",
    description: "C++ terminal-based voting system project with candidate registration and results.",
    url: "#",
    repo: null,
  },
  {
    id: 9,
    image: "https://res.cloudinary.com/dtf5nwiic/image/upload/v1752761246/snakegame_nlceov.png",
    title: "Snake Game",
    description: "Classic snake game implemented in Java Swing.",
    url: "#",
    repo: null,
  },
  {
    id: 10,
    image: "https://res.cloudinary.com/dtf5nwiic/image/upload/v1752761246/chatapp_bpfmwf.png",
    title: "2-Person Chat App",
    description: "Chat system using Java sockets and Swing GUI for peer-to-peer messaging.",
    url: "#",
    repo: null,
  },
];

export default projects;

/*
const projects = [
  {
    id: 11,
    image: "/assets/projects/payplate.PNG",
    title: "PayPlate",
    description: "Modern payment platform",
    url: "https://payplate.vercel.app/",
    repo: null, // Closed source
  },
  {
    id: 12,
    image: "/assets/projects/drink-me.PNG",
    title: "Drink Me Splash Zone",
    description: "Interactive beverage experience",
    url: "https://preview--drink-me-splash-zone.lovable.app/",
    repo: "https://github.com/tejasnasre/drink_me",
  },
  {
    id: 1,
    image: "/assets/projects/nexmeet.png",
    title: "nexmeet",
    description: "a open source event platform",
    url: "https://www.nexmeet.social",
    repo: "https://github.com/TejasNasre/nexmeet",
  },
  {
    id: 2,
    image: "/assets/projects/freechatroom.png",
    title: "freechatroom",
    description: "free chat rooms",
    url: "https://freechatroom-three.vercel.app/",
    repo: "https://github.com/TejasNasre/freechatroom",
  },
  {
    id: 3,
    image: "/assets/projects/glitchdrop.png",
    title: "glitchdrop",
    description: "file sharing webapp",
    url: "https://glitchdrop.vercel.app/",
    repo: "https://github.com/soham-khedkar/glitchdrop",
  },
  {
    id: 4,
    image: "/assets/projects/logomaster.png",
    title: "logomaster",
    description: "logo maker and logo editing",
    url: "https://logomaster.vercel.app/",
    repo: "https://github.com/TejasNasre/Logo-Master",
  },
  {
    id: 5,
    image: "/assets/projects/todo.png",
    title: "todozen",
    description: "todo app",
    url: "https://todozen-lovat.vercel.app/",
    repo: "https://github.com/TejasNasre/Todo_App",
  },
  {
    id: 6,
    image: "/assets/projects/game-grid.png",
    title: "game grid",
    description: "game listing",
    url: "https://game-grid-phi.vercel.app/",
    repo: "https://github.com/TejasNasre/Game-Grid",
  },
  {
    id: 13,
    image: "/assets/projects/pdf-rag.png",
    title: "PDF RAG System",
    description: "PDF document retrieval and generation",
    url: "https://pdf-rag-demo.vercel.app/",
    repo: "https://github.com/tejasnasre/pdf-rag",
  },
  {
    id: 7,
    image: "/assets/projects/next-carbon.png",
    title: "next carbon",
    description: "carbon credit marketplace",
    url: "https://nextc-template-y6dy.vercel.app/",
    repo: "https://github.com/Nextc1/nextc_template",
  },
  {
    id: 8,
    image: "/assets/projects/carra.png",
    title: "cara",
    description: "ecommerce website ui",
    url: "https://tejasnasre.github.io/Cara-EcommerceWebsite/",
    repo: "https://github.com/TejasNasre/Cara-EcommerceWebsite",
  },
  {
    id: 9,
    image: "/assets/projects/qr-code.png",
    title: "qr-code",
    description: "simple qr code generator",
    url: "https://tejasnasre.github.io/qrcodeGenerator/",
    repo: "https://github.com/TejasNasre/qrcodeGenerator",
  },
  {
    id: 10,
    image: "/assets/projects/rps.png",
    title: "rock paper scissor",
    description: "simple game",
    url: "https://tejasnasre.github.io/RPS-Game/",
    repo: "https://github.com/TejasNasre/RPS-Game",
  },
];

export default projects;

*/