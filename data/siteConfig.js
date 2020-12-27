module.exports = {
  siteTitle: '',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Yosra Bouazizi',
  twitterUsername: '_franciscodf',
  githubUsername: 'yosrabz',
  authorAvatar: '/images/yossra.jpg',
  authorDescription: ` Je suis étudiante en 3 éme année cycle ingénieur en génie logiciel et systèmes d’informations (GLSI) à l’institut supérieur d’informatique (ISI), passionnée par le développement des sites web et par les nouvelles technologies`,
  authorEducation:` Je suis étudiante en 3 éme année cycle ingénieur en génie logiciel et systèmes d’informations (GLSI) à l’institut supérieur d’informatique (ISI), passionnée par le développement des sites web et par les nouvelles technologies`,
  skills: [
    {
      name: 'Java/JEE',
      level: 70
    },
    {
      name: 'SpringBoot',
      level: 60
    },
    {
      name: 'Angular',
      level: 50
    },
    {
      name: 'Asp.net',
      level: 40
    },
    {
      name: 'Docker',
      level: 60
    },
    {
      name: 'VB.net',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "IPrecision",
      begin: {
        month: 'Jul',
        year: '2020'
      },
      duration: '1 month',
      occupation: "Stage d'été",
      description: "Sécurité d’une Api Java en utilisant les protocoles : OAuth2.0, OpenID Connect, API key et faire la dockerisation des solutions en utiliant les technologies : Spring Boot, Docker"
  
    },  {
      company: "NIDA Outsource Center",
      begin: {
        month: 'Feb',
        year: '2018'
      },
      duration: '4 months',
      occupation: "Stage PFE",
      description: "Conception et développement d’une application de gestion des factures en utilisant la technologie Java/ JEE et les Framework: Hibernate, JSF, Primefaces, Bootsfaces"
  
    }, {
      company: "Société Industrielle d’Aluminium",
      begin: {
        month: 'Jul',
        year: '2016'
      },
      duration: '1 month',
      occupation: "Stage d'été",
      description: "Développement d’une application de gestion de pointage du personnel en utilisant la Technologie Java"
    }, {
      company: "Pharmacie Centrale de Tunis",
      begin: {
        month: 'Jun',
        year: '2016'
      },
      duration: '1 month',
      occupation: "Stage d'été",
      description: "Développement d’une application de gestion de médicaments en utilisant la Technologie VB.net"
  
    },
  ],
  
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/yosrabz/openid"
    },
    /* more portifolio items here */
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/yosra-bouazizi-6b5bb318b/",
    github: "https://github.com/yosrabz/",
    email: "yosrabouazizi7@gmail.com"
  },
  siteUrl: 'https://github.com/yosrabz/openid',
  pathPrefix: '/openid', // Note: it must *not* have a trailing slash.
  siteCover: '/images/blanc.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#2c439e',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Resume',
      url: '/',
    },

  ]
}