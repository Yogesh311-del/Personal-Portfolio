import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    carrent,
    docker,
    meta,
    starbucks,
    linkin,
    shopify,
    port,
    insta,
    threejs,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Structures and Algorithm",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Front End Developer",
      icon: backend,
    },
    {
      title: "ReactJs",
      icon: reactjs,
    },
    // {
    //   title: "Javascript",
    //   icon: reactjs,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Learned React Js and its functionalities in web development.",
        "Developed and maintained websited using React.js and other related technologies.",
        "Implementing responsive design and ensuring compatibility.",
        "Participating in code reviews and providing constructive solutions.",
      ],
    },
    {
      title: "Front-End Web Development",
      company_name: "",
      icon: javascript,
      iconBg: "#383E56",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as this, but Yogesh proved me wrong.",
      name: "Aryan",
      designation: "CFO",
      company: "Dubils",
      image: "https://media.licdn.com/dms/image/D4D03AQF8m-OJTSVX5A/profile-displayphoto-shrink_400_400/0/1695844296388?e=1701302400&v=beta&t=AKq1tcFrUqH08UvCMR-2p3jQHuZmdcB_hexoY6Bwh-o",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Yogesh does.",
      name: "Daksh",
      designation: "COO",
      company: "Merd",
      image: "https://i.ibb.co/VSFmNxM/Screenshot-2023-09-28-180801-fotor-2023092818942.jpg",
    },
    {
      testimonial:
        "After Yogesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Vaibhav",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://media.licdn.com/dms/image/D4D03AQEUIeh2x84SaA/profile-displayphoto-shrink_400_400/0/1690008476254?e=1701302400&v=beta&t=uCArolC8Ye1LRa_juryt5kNBwCQbvvw078wQIUhfdOE",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "It is my portfolio website, where I invite you to explore a visual journey through my professional and creative endeavors. This digital showcase is a reflection of who I am, what I've accomplished, and where I'm headed in my career and personal projects.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/",
    },
    {
      name: "Get-Hired | Hiring Platform",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react native",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: insta,
      source_code_link: "https://github.com/",
    },
    {
      name: "Social-Media website | Social Snapshot",
      description:
        "Welcome to Social Snapshots, your gateway to a vibrant and immersive digital world. This front-end project, inspired by platforms like Instagram, offers you a space to share your life's moments, connect with friends.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: linkin,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };