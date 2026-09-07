import RepoCard from "../RepoCard/RepoCard";

import "./RepoList.styles.scss";

type StaticRepo = {
  repo: string;
  image: string;

  description: string;
  technologies: string[];
  stars: number;
  forks: number;
};

const repos: StaticRepo[] = [
  {
    repo: "Test Scheduler Platform",
    
    description:
      "Web platform for planning and tracking automotive validation activities, developed with Angular, ASP.NET Core (.NET 8), and MongoDB. Features an interactive scheduling calendar, advanced filtering, PDF export, real-time tracking, and Web Push notifications.",
     technologies: [
      "Angular",
      "ASP.NET Core",
      ".NET 8",
      "MongoDB",
      "Docker",
      "GitLab CI/CD",
      "Web Push"
    ],
        image: "/assets/test-scheduler.png",

      stars: 0,
    forks: 0,
  },

  {
    repo: "Training Center Management Application",

    description:
      "Full-stack application built with React and Spring Boot, featuring Spring Security, REST APIs, MySQL, Docker, MVC architecture, and multi-role authentication.",
    technologies: [
      "React",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "REST API",
      "Docker"
    ],
        image: "/assets/training-center.png",

      stars: 0,
    forks: 0,
  },

  {
    repo: "Dentaire-Solution",
    description:
      "Full-stack dental appointment management application developed with React 18, Tailwind CSS, Node.js, Express, and MySQL, with automated email notifications.",
       technologies: [
      "React 18",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL"
    ],
        image: "/assets/dentaire.png",

      stars: 0,
    forks: 0,
  },

  {
    repo: "ShopX",
    description:
      "E-commerce application developed with ASP.NET Core for the backend and Angular for the frontend.",
     technologies: [
      "Angular",
      "ASP.NET Core",
      "C#",
      "REST API"
    ],
        image: "/assets/ShopX.png",

      stars: 0,
    forks: 0,
  },

  {
    repo: "ServiTounsi",
    description:
      "Home services platform developed with ASP.NET Core for the backend and React.js for the frontend.",
    
    technologies: [
      "React.js",
      "ASP.NET Core",
      "C#",
      "REST API"
    ],
        image: "/assets/ServiTounsi.png",

      stars: 0,
    forks: 0,
  },

  {
    repo: "Restaurant Website",
    description:
      "Restaurant website developed with ASP.NET Core for the backend and React.js for the frontend.",
    
    technologies: [
      "React.js",
      "ASP.NET Core",
      "C#"
    ],
    image: "/assets/Restaurant.png",

      stars: 0,
    forks: 0,
  },

  {
    repo: "Medical Imaging Diagnosis Assistance",
    description:
      "Responsive web platform developed with Django, SQLite, and Bootstrap, integrating pre-trained deep learning models including ResNet101, DenseNet101, and VGG19 for real-time AI predictions.",
      technologies: [
      "Python",
      "Django",
      "SQLite",
      "Bootstrap",
      "TensorFlow",
      "Keras",
      "Deep Learning"
    ],
        image: "/assets/Scan.png",

      stars: 0,
    forks: 0,
  },

  {
    repo: "Spa Management Web Application",
    description:
      "Web application for managing spa activities at Marhaba Palace Sousse, developed with React, Laravel, MySQL, and JWT authentication.",
   
    technologies: [
      "React",
      "Laravel",
      "PHP",
      "MySQL",
      "JWT"
    ],
        image: "/assets/Spa.png",

      stars: 0,
    forks: 0,
  },
];

export default function RepoList() {
  return (
    <>
      <div className="repos">
        {repos.map((repo) => (
          <RepoCard key={repo.repo} {...repo} />
        ))}
      </div>
    </>
  );
}