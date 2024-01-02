import { meta, shopify, logo, CodeForChange,LogoInsoft,MyImage} from "../assets/images";
import axios from 'axios';
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    react,
    summiz,
    tailwindcss,
    threads,
    typescript,
    Sql,
    dotnet,
    jquery,
    python,
    django,
    scikit,
    bootstrap,
    facebook,
    instagram
} from "../assets/icons";


const iconArray = [car, estate, pricewise, threads, Sql, dotnet, python, django, scikit, bootstrap];
const randomIndex = Math.floor(Math.random() * iconArray.length);
const randomizedArray = [...iconArray.slice(0, randomIndex), github, ...iconArray.slice(randomIndex)];


export const skills = [
    {
        imageUrl: dotnet,
        name: "Dotnet",
        type: "Backend",
    },
    {
        imageUrl: Sql,
        name: "Sql",
        type: "Backend",
    },
    {
        imageUrl: jquery,
        name: "JQuery",
        type: "Frontend",
    },
    {
        imageUrl: scikit,
        name: "Scikit Learn",
        type: "Machine Learning",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },

    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },


    
];

export const experiences = [
    {
        title: "Technical Lead ",
        company_name: "Code For Change",
        icon: CodeForChange,
        iconBg: "#f3bf21",
        date: "Jan 2023 - Jan 2024",
        points: [
            "Being a team member of IT students in the implementation of various technologies for Social Change.",
            "Fostering a collaborative team environment, emphasizing teamwork, and providing mentorship to team members.",
            "Utilizing graphic design skills to enhance the user interface and overall user experience of web applications.",
            "Leveraging automation tools like AppScript and Power Automate for process optimization.",
        ],
        website: "https://www.codeforchangenepal.com", 
    },
    {
        title: "Software Developer",
        company_name: "Insoft Research and Development",
        icon: LogoInsoft,
        iconBg: "#ffffff",
        date: "Jul 2023 - Present",
        points: [
            "Developing and maintaining web applications, including ERP systems, using ASP.NET, Web API, AJAX calls, jQuery, SQL, and payment integration.",
            "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Managing server configuration and optimizing performance for efficient application delivery.",
            "Contributing to the process of Android app development, ensuring seamless integration with web-based systems.",
        ],
        website: "https://www.insoftnepal.com", 
    },
];


export const socialLinks = [

    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/dyells07',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/bipin-khanal-495617184/',
    },
    {
        name: 'Facebook',
        iconUrl: facebook,
        link: 'https://www.facebook.com/dyells.07/',
    },
    {
        name: 'Instagram',
        iconUrl: instagram,
        link: 'https://www.instagram.com/dy_ells/',
    },
];

// export const fetchGithubProjects = async (username) => {
//     try {
//       const response = await fetch(`https://api.github.com/users/${username}/repos`);
//       if (response.ok) {
//         const repoData = await response.json();
//         repoData.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  
//         return repoData.map((repo) => ({
//           iconUrl : snapgram,
//           theme: 'btn-back-default', 
//           name: repo.name,
//           description: repo.description || 'No description available',
//           link: repo.html_url,
//         }));
//       } else {
//         throw new Error('Failed to fetch repository data');
//       }
//     } catch (error) {
//       console.error(error);
//       return [];
//     }
//   };

//   export const projects = await fetchGithubProjects(import.meta.env.VITE_APP_GITHUB_USERNAME);
  // Function to fetch GitHub projects
export const fetchGithubProjects = (username) => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        if (response.status === 200) {
          const repoData = response.data;
          repoData.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  
          const projects = repoData.map((repo) => ({
            iconUrl: summiz,
            theme: 'btn-back-default',
            name: repo.name,
            description: repo.description || 'No description available',
            link: repo.html_url,
          }));
          localStorage.setItem('githubProjects', JSON.stringify(projects));
  
          return projects;
        } else {
          throw new Error('Failed to fetch repository data');
        }
      })
      .catch((error) => {
        console.error(error);
        return [];
      });
  };
  
  export let projects = JSON.parse(localStorage.getItem('githubProjects')) || [];
  
  if (projects.length === 0) {
    fetchGithubProjects(import.meta.env.VITE_APP_GITHUB_USERNAME)
      .then((result) => {
        projects = result;
      });
  }
  

  