let info = {
  name: "Hrishikesh Paul",
  logo_name: "Kontora",
  flat_picture: require("./src/assets/logo.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "<br>Мы - команда \"Контора\", специализирующаяся на разработке сложных информационных систем. Наш коллектив представляет " +
      "собой объединение опытных фронтенд-разработчиков, бэкенд-специалистов и фуллстек разработчиков под руководством опытного тимлида..<br><br>" +
      "Мы гордимся разносторонним опытом, охватывающим создание интуитивно понятных интерфейсов и реализацию сложных технических " +
      "проектов. Наш тимлид иногда утверждает, что у нас в кабинете больше кофейных чашек, чем строк кода, но мы уверены, " +
      "что именно это делает нас такими эффективными! Наша команда готова принять вызов любой сложности и предоставить инновационные " +
      "решения для ваших потребностей в сфере веб-разработки.",
  links: {
    linkedin: "https://www.linkedin.com/in/hrishikeshpaul/",
    github: "https://github.com/KontoraDevs",
    telegram: "https://t.me/santariver",
    mail: "mailto:kontoradevs@yandex.ru",
    angellist: "https://angel.co/u/hrishikesh-paul",
    resume:
      "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "Оренбургский государственный университет",
      place: "Россия",
      date: "Сентябрь, 2017 - Июнь, 2023",
      degree: "Математика и компьютерные науки",
      gpa: "Бакалавр",
      secondDegree: "Системы искусственного интеллекта",
      secondGpa: "Магистратура",
      description:
        "Закончил получение бакалавра по направлению Математика и компьютерные науки, основательно изучив основы математики " +
          "и программирования. Завершил обучение по магистратуре по направлению Системы искусственного интеллекта, где " +
          "специализировался в области машинного обучения и анализа данных.",
      skills: [
        "Искусственный интеллект",
        "Программная инженерия",
        "Алгоритмы",
        "Операционные системы",
        "Языки программирования",
      ]
    },
    {
      name: "Оренбургский государственный университет",
      place: "Россия",
      date: "Сентябрь, 2017 - Июнь, 2021",
      degree: "Математика и компьютерные науки",
      gpa: "Бакалавр",
      description:
        "С успехом завершил программу бакалавриата по направлению 'Математика и компьютерные науки', освоивший аспекты " +
          "аналитической математики и информатики. Этот фундаментальный курс укрепил мои навыки в алгоритмическом мышлении и " +
          "программировании, обеспечивая глубокое понимание базовых концепций.",
      skills: [
        "Математика",
        "Программирование",
        "Алгоритмы",
        "Искусственный Интеллект",
        "Data Science",
        "Анализ Данных",
        "Криптография"
      ]
    },
    {
      name: "Оренбургский государственный университет",
      place: "Россия",
      date: "Сентябрь, 2021 - Июнь, 2023",
      degree: "Системы искуственного интеллекта",
      gpa: "Магистратура",
      description:
          "Graduated from Manipal Institute of Technology, Manipal with a bachelors degree in Computer and Communications Engineering.",
      skills: [
        "AI",
        "Neural Netwroks",
        "Data Mining",
        "Computer Vision",
        "Pattern Recognition",
        "HCI",
        "Software Engineering"
      ]
    }
  ],
  experience: [
    {
      name: "Getpolis",
      place: "Россия, Ростов-на-Дону",
      date: "Декабрь, 2023 - Наст. время",
      position: "Full Stack Web Developer",
      description:
        "Работа над веб-проектом, который является агрегатором страховых предложений, сотрудничающий с 15 крупнейшими страховыми компаниями России, такие как: АльфаСтрахование, Ингосстрах, Росгосстрах и другие.",
      skills: ["PHP", "Laravel", "Docker", "Linux", "VUE", "PostgreSQL", "JavaScript", "HTML", "CSS", "Vuetify", "SASS", "Tailwind", "Bootstrap"]
    },
    {
      name: "OrbitSoft",
      place: "Россия, Ростов-на-Дону",
      date: "Февраль, 2022 - Ноябрь, 2023",
      position: "Full Stack Web Developer",
      description:
        "",
      skills: ["PHP", "Laravel", "PostgreSQL", "Linux", "VUE", "JavaScript", "Docker"]
    },
    {
      name: "Freelance",
      place: "Россия",
      date: "May, 2021 - Февраль, 2022",
      position: "Full Stack Web Developer",
      description:
        "3 месяца работы backend разработчиком в аутсорс команде над государственным проектом. С момента ухода и по сей день разработка и поддержка собственных (или на заказ) коммерческих проектов связанных с блокчейн разработкой (смарт-контракты, токены).",
      skills: ["PHP", "Laravel", "Blockchain", "PostgreSQL", "Solidity", "Linux", "Git", "Docker", "Nginx"]
    },
    {
      name: "Subbclub",
      place: "Россия, Оренбург",
      date: "Март, 2019 - Май, 2021",
      position: "Backend Developer",
      description:
        "Backend разработчик. Работал с CMS 1C-Bitrix. Работал над разными проектами под Silex.",
      skills: ["PHP", "CMS «1С-Битрикс»", "Silex", "Nginx", "JavaScript", "MongoDB"]
    }
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "Javascript",
        "TypeScript",
        "Java",
        "C",
        "C++",
        "SQL",
        "NoSQL",
        "Ruby"
      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "Keras",
        "Numpy",
        "Pandas",
        "OpenCV",
        "SciPy",
        "Sklearn",
        "LibROSA",
        "Pillow"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue", "Angular", "React", "Node", "Flask", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "OracleSQL", "Neo4j"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Android",
        "Agile",
        "Scrum",
        "JIRA",
        "Heroku",
        "Firebase",
        "AWS S3"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Степная История",
      pictures: [
        {
          img: require("./src/assets/portfolio/fest/one.png")
        },
        {
          img: require("./src/assets/portfolio/fest/two.png")
        },
        {
          img: require("./src/assets/portfolio/fest/three.png")
        },
      ],
      technologies: ["Computer Vision", "OpenCV", "AI", "Flask", "Sockets"],
      category: "Лендинг",
      date: "Август, 2022",
      github:
        "https://github.com/NoNameNoMeme/StepAndWind",
      visit: "https://fest.stepiveter.ru/",
      description:
        "Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Recognition, this tool is used to detect music notes and rests. It makes use of basic Computer Vision techniques such as Convolution, Edge Detections, Hough Transforms and Template Matching to detect notes and rests on a music sheet. "
    },
    {
      name: "Taproom",
      pictures: [
        {
          img: require("./src/assets/portfolio/taproom/one.png")
        },
        {
          img: require("./src/assets/portfolio/taproom/two.png")
        },
        {
          img: require("./src/assets/portfolio/taproom/three.png")
        },
        {
          img: require("./src/assets/portfolio/taproom/four.png")
        },
      ],
      technologies: ["Node", "Vue", "Express", "MongoDB", "Heroku"],
      category: "Лендинг-магазин",
      date: "Сентябрь 2023",
      github: "https://github.com/hrishikeshpaul/noq",
      visit: "https://noq-client.herokuapp.com/",
      description:
        "No Q, is a revolutionary tool which allows for both employers and students to skip the hassle seen in modern day career fairs. For the students, there is an intuitive profile builder where you can add things like education, skills, certifications, honors, and experiences. No Q is not only good for students, but employers as well! A common problem at modern career fairs is the number of unqualified candidates who waste their time when they could be chatting with someone else. With No Q, only the students who meet the positions’ criteria will be able to apply, and from there the recruiter can invite them to talk in more detail at the career fair through our intuitive messaging system."
    },
    {
      name: "Entomosphera",
      pictures: [
        {
          img: require("./src/assets/portfolio/ent/one.png")
        },
        {
          img: require("./src/assets/portfolio/ent/two.png")
        },
        {
          img: require("./src/assets/portfolio/ent/three.png")
        },
        {
          img: require("./src/assets/portfolio/ent/four.png")
        },
      ],
      technologies: [
        "Markov Models",
        "Python",
        "Artificial Intelligence",
        "Vue",
        "Heroku"
      ],
      category: "Магазин",
      github: "https://github.com/dwarf133/taproom-store",
      date: "Сентябрь, 2023 - Ноябрь, 2023",
      visit: "https://entomosphera.com/",
      description:
        "Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling."
    },
    {
      name: "Suicide Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/suicide/suicide-analyzer.png")
        },
        {
          img: require("./src/assets/portfolio/suicide/suicide2-original.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "Leaflet", "Pandas"],
      category: "Website",
      date: "Oct, 2018 - Nov, 2018",
      github: "https://github.com/hrishikeshpaul/whodata",
      visit: "https://skylarktiral.herokuapp.com/",
      description:
        "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent."
    },
    {
      name: "Sentiment Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/smit/one.png")
        },
        {
          img: require("./src/assets/portfolio/smit/two.png")
        },
        {
          img: require("./src/assets/portfolio/smit/three.png")
        },
        {
          img: require("./src/assets/portfolio/smit/four.png")
        }
      ],
      technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "https://github.com/hrishikeshpaul/sih",
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
      description:
        "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    },
    {
      name: "Clumpr",
      pictures: [
        {
          img: require("./src/assets/portfolio/clumpr/logo.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/one.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/two.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    },
    {
      name: "Nutricare",
      pictures: [
        {
          img: require("./src/assets/portfolio/nc/one.png")
        },
        {
          img: require("./src/assets/portfolio/nc/two.png")
        },
        {
          img: require("./src/assets/portfolio/nc/three.png")
        },
        {
          img: require("./src/assets/portfolio/nc/four.png")
        },
        {
          img: require("./src/assets/portfolio/nc/five.png")
        },
        {
          img: require("./src/assets/portfolio/nc/six.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    }
  ],
  githubs: [
    {
      name: "Руденко Павел, 24",
      pictures: [
        {
          img: require("./src/assets/portfolio/fest/one.png")
        },
      ],
      technologies: ["Computer Vision", "OpenCV", "AI", "Flask", "Sockets"],
      category: "Лендинг",
      date: "Август, 2022",
      github:
          "https://github.com/NoNameNoMeme/StepAndWind",
      visit: "https://fest.stepiveter.ru/",
      description:
          "Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Recognition, this tool is used to detect music notes and rests. It makes use of basic Computer Vision techniques such as Convolution, Edge Detections, Hough Transforms and Template Matching to detect notes and rests on a music sheet. "
    },
    {
      name: "Данильчук Михаил, 22",
      pictures: [
        {
          img: require("./src/assets/portfolio/taproom/one.png")
        },
      ],
      technologies: ["Node", "Vue", "Express", "MongoDB", "Heroku"],
      category: "Лендинг-магазин",
      date: "Сентябрь 2023",
      github: "https://github.com/hrishikeshpaul/noq",
      visit: "https://noq-client.herokuapp.com/",
      description:
          "No Q, is a revolutionary tool which allows for both employers and students to skip the hassle seen in modern day career fairs. For the students, there is an intuitive profile builder where you can add things like education, skills, certifications, honors, and experiences. No Q is not only good for students, but employers as well! A common problem at modern career fairs is the number of unqualified candidates who waste their time when they could be chatting with someone else. With No Q, only the students who meet the positions’ criteria will be able to apply, and from there the recruiter can invite them to talk in more detail at the career fair through our intuitive messaging system."
    },
    {
      name: "Валитов Хасан, 23",
      pictures: [
        {
          img: require("./src/assets/portfolio/ent/one.png")
        },
      ],
      technologies: [
        "Markov Models",
        "Python",
        "Artificial Intelligence",
        "Vue",
        "Heroku"
      ],
      category: "Магазин",
      github: "https://github.com/dwarf133/taproom-store",
      date: "Сентябрь, 2023 - Ноябрь, 2023",
      visit: "https://entomosphera.com/",
      description:
          "Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling."
    },
  ],
  portfolio_design: [
    {
      name: "Guituna",
      title: "Guituna - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
          title: "App Elements"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]
};

export default info;
