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
      fio: "Руденко Павел",
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
      fio: "Данильчук Михаил",
      name: "Оренбургский государственный университет",
      place: "Россия",
      date: "Сентябрь, 2019 - Настоящее время",
      degree: "Фундаментальная информатика и информационные технологии",
      gpa: "Бакалавр",
      secondDegree: "Гибкие технологии разработки корпоративных систем",
      secondGpa: "Магистратура",
      description:
          "Фундаментальная информатика и информационные технологии - комплексное изучение фундаментальных основ информатики " +
          "с акцентом на разработку и оптимизацию информационных технологий. Гибкие технологии разработки корпоративных систем - " +
          "методы и подходы, направленные на гибкую и эффективную разработку и поддержку корпоративных систем.",
      skills: [
        "Алгоритмы",
        "Операционные системы",
        "Data Mining",
        "Data Science",
        "Языки программирования",
        "Криптография",
        "Анализ Данных"
      ]
    },
    {
      fio: "Валитов Хасан",
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
        "C++",
        "C#",
        "SQL",
        "NoSQL",
        "PHP",
        "Go",
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
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Laravel", "Vue", "VueX", "Node", "Flask", "HTML", "CSS", "SASS", "LiveWire"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MySQL", "PostgreSQL", "MongoDB", "ClickHouse", "Sphinx", "Manticore"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Docker",
        "Agile",
        "Scrum",
        "JIRA",
        "Firebase",
        "AWS S3",
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Figma", "XD", "Photoshop", "Premiere Pro", "After Effects"],
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
        "Лендинг"
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
      category: "Магазин-лендинг",
      date: "Сентябрь 2023",
      github: "https://github.com/hrishikeshpaul/noq",
      visit: "https://noq-client.herokuapp.com/",
      description:
        "Магазин-лендинг"
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
      category: "Магазин-лендинг",
      github: "https://github.com/dwarf133/taproom-store",
      date: "Сентябрь, 2023 - Ноябрь, 2023",
      visit: "https://entomosphera.com/",
      description:
        "Магазин-лендинг"
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
          img: require("./src/assets/portfolio/we/pasha.jpg")
        },
      ],
      technologies: ["TeamLead", "Fullstack", "PHP", "Laravel", "MySQL", "Vue"],
      category: "Лендинг",
      date: "Август, 2022",
      github: "https://github.com/SantaRiver",
      visit: "https://github.com/SantaRiver",
      description:
          "С резюме можете ознакомиться в профиле ГитХаб, для этого нажмите кнопку - 'Посетить сайт'."
    },
    {
      name: "Данильчук Михаил, 22",
      pictures: [
        {
          img: require("./src/assets/portfolio/we/misha.png")
        },
      ],
      technologies: ["Backend", "Python", "PHP", "Laravel", "Postgres", "FastAPI", "Pandas"],
      category: "Лендинг-магазин",
      date: "Сентябрь 2023",
      github: "https://github.com/dwarf133",
      visit: "https://github.com/dwarf133",
      description:
          "С резюме можете ознакомиться в профиле ГитХаб, для этого нажмите кнопку - 'Посетить сайт'."
    },
    {
      name: "Валитов Хасан, 23",
      pictures: [
        {
          img: require("./src/assets/portfolio/we/khasan.jpg")
        },
      ],
      technologies: ["Frontend", "HTML", "SASS", "JavaScript", "Vue", "Vuex"],
      category: "Магазин",
      github: "https://github.com/NoNameNoMeme",
      date: "23 Декабря, 1999",
      visit: "https://github.com/NoNameNoMeme",
      description:
          "С резюме можете ознакомиться в профиле ГитХаб, для этого нажмите кнопку - 'Посетить сайт'."
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
        "Kontora's team is exceptional! Their creativity and dedication shine in every detail. Their work exceeds expectations. Working with them was a delight. I wholeheartedly recommend Kontora for their outstanding expertise.",
      author: "Elon Musk",
      position: "CEO",
      company: "SpaceX, Tesla",
      location: "USA"
    },
    {
      title:
          "Контора - высший класс. Их работа – воплощение искусства в дизайне и разработке. Работать с ними - настоящее удовольствие. Рекомендую всем, кто ценит качество и профессионализм.",
      author: "Павел Дуров",
      position: "Генеральный директор",
      company: "ВК, Telegram",
      location: "Россия"
    },
    {
      title:
        "Kontora is phenomenal! Their innovative approach and precision are unmatched. Their work is transformative and sets new standards. Collaborating with them was brilliant. I highly endorse Kontora for their unparalleled skillset.",
      author: "Mark Zuckerberg",
      position: "CEO",
      company: "Facebook",
      location: "USA"
    },
    {
      title:
        "Kontora’s brilliance is unparalleled. Their precision and dedication redefine excellence. Working with them was exceptional—truly a transformative experience. I highly recommend Kontora for their outstanding expertise and professionalism.",
      author: "Bill Gates",
      position: "CEO",
      company: "Microsoft",
      location: "USA"
    },
  ]
};

export default info;
