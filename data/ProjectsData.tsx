//    data of projects

export interface project {
  id: string;
  title: string;
  descriptionKey: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projectsData: project[] = [
  {
    id: "E-commerce-full",
    title: "E-commerce-full",
    descriptionKey: "E-commerce-full",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Redux Toolkit"],
    image: "/projects/E-commerce-full.png",
    liveUrl: "https://e-commerce-full-nu.vercel.app",
    githubUrl: "https://github.com/Abdogoher/E-commerce-full",
    featured: true,
  },
  {
    id: "Movies",
    title: "Movies",
    descriptionKey: "movies",
    technologies: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "Axios",
      "Pagination",
    ],
    image: "/projects/Movies.png",
    liveUrl: "https://movies-dun-ten.vercel.app/",
    githubUrl: "https://github.com/Abdogoher/Movies",
    featured: true,
  },
  {
    id: "koshari-eltahrir",
    title: "koshari-eltahrir",
    descriptionKey: "koshari-eltahrir",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS CDN",
      "Font Awesome",
    ],
    image: "/projects/koshari-eltahrir.png",
    liveUrl: "https://koshari-eltahrir-ochre.vercel.app/",
    githubUrl: "https://github.com/Abdogoher/koshari-eltahrir",
    featured: true,
  },
  {
    id: "E-commerce-f",
    title: "E-commerce-full",
    descriptionKey: "E-commerce-full",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Redux Toolkit"],
    image: "/projects/E-commerce-full.png",
    liveUrl: "https://e-commerce-full-nu.vercel.app",
    githubUrl: "https://github.com/Abdogoher/E-commerce-full",
    featured: true,
  },
  {
    id: "E-commerce",
    title: "E-commerce-full",
    descriptionKey: "E-commerce-full",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Redux Toolkit"],
    image: "/projects/E-commerce-full.png",
    liveUrl: "https://e-commerce-full-nu.vercel.app",
    githubUrl: "https://github.com/Abdogoher/E-commerce-full",
    featured: true,
  },
];
