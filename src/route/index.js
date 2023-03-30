// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'Ukraine, Bahmyt',
}

var footer = {
  social: {
    mail: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'linkedin',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume_Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume_Skills',
    },
    header,
    main: {
     skills: [
      {name: "HTML", point: 10, isTop: true, }, 
      {name: "Handlebars", point: 10, isTop: true, },
      {name: "VS code", point: 8, isTop: false, },
      {name: "Git", point: 7, isTop: false, },
      {name: "Terminal", point: 6, isTop: false, },
      {name: "NPM", point: 5, },
      {name: "React.js", point: 0, },
      {name: "PHP", point: null, },
     ],
     hobbies: [
      {name: "name1", isMain: true,},
      {name: "name2", isMain: false,},
      {name: "name2", isMain: true,},
     ],
    },
    footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume_Education',
    },
    header,
    main: {
     educations: [
      {name: "ChildHouse", isEnd: true,},
      {name: "School_31",isEnd: true,},
      {name: "KPI",isEnd: true,},
      {name: "IT-BRAINS",isEnd: false,},
    ],
    certification: [
      {name: "certf1", id: 1001,},
      {name: "certf2", id: 1002,},
      {name: "certf3", id: 1003,},
    ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: "big",
    page: {
      title: 'Resume_Work',
    },
    header,
    main: {
      works: [{
        position: "Junior Fullstack Developer",
        company: {
          name: "IT Brains",
          url: null,
        },
        duration: {
          from: "01.01.2000",
          to: null,
        },
        projectAmount: 3,
        projects: [{
          name: "Resume",
          url: "https://uz.gov.ua/",
          about: "Mega-Super Project",
          stacks: [
            {name: "React.js",},
            {name: "HTML / CSS",},
            {name: "Nodejs",},
          ],
          awards: [
            {name: 'First awards Spring 2023',},
            {name: 'Best start in Academy by Johnny Silverhand',},
          ],
          stackAmount: 3,
          awardAmount: 2,
        },],
      },],
    },
    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
