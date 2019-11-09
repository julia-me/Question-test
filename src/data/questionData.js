const geographyAQuestionsArr =[
  {
    title: 'Столица Украины',
    type: 'Text',
    answer: [{
      title: 'Киев',
      isTrue: true,
      point: 1,
    }]
  },
  {
    title: 'Столица Германии',
    type: 'Radio',
    answer: [{
      title: 'Берлин',
      isTrue: true,
      point: 1,
    },
    {
      title: 'Мэн',
      isTrue: false,
      point: 0,
    },
    {
      title: 'Барселона',
      isTrue: false,
      point: 0,
    },
    {
      title: 'Харьков',
      isTrue: false,
      point: 0,
    }]
  },
  {
    title: 'Моря Атлантического океана, омывающие Россию:',
    type: 'Checkbox',
    answer: [{
      title: 'Балтийское море',
      isTrue: true,
      point: 0.5,
    },
    {
      title: 'Чёрное море',
      isTrue: true,
      point: 0.5,
    },
    {
      title: 'Азовское море',
      isTrue: true,
      point: 0.5,
    },
    {
      title: 'Мертвое море',
      isTrue: false,
      point: 0,
    },
    {
      title: 'Красное море',
      isTrue: false,
      point: 0,
    },
    {
      title: 'Адриатическое море',
      isTrue: false,
      point: 0,
    },
  ]
  },
  {
    title: 'Вода на планете Земля образует',
    type: 'Select',
    answer: [{
      title: 'гидросферу',
      isTrue: true,
      point: 1,
    },
    {
      title: 'стратосферу',
      isTrue: false,
      point: 0,
    },
    {
      title: 'сферу',
      isTrue: false,
      point: 0,
    },
  ]
  },
  {
    title: `Континент, находящийся только в южном полушарии это`,
    type: 'Select',
    answer: [
      {
        title: 'Евразия',
        isTrue: false,
        point: 0,
      },
      {
        title: 'Африка',
        isTrue: false,
        point: 0,
      },
      {
        title: 'Австралия',
        isTrue: true,
        point: 1,
      },
      {
        title: 'Антарктида',
        isTrue: false,
        point: 0,
      },
    ]
  },
  {
    title: `Солнце – это `,
    type: 'Radio',
    answer: [
      {
        title: 'звезда',
        isTrue: true,
        point: 1,
      },
      {
        title: 'спутник',
        isTrue: false,
        point: 0,
      },
      {
        title: 'комета',
        isTrue: false,
        point: 0,
      },
      {
        title: 'планета',
        isTrue: false,
        point: 0,
      },

    ]
  },
  {
    title: 'Изображение какого животного можно увидеть на гербе Австралии',
    type: 'Checkbox',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7A2xQM2MB_gj5DKhZFTRn9Q8OqA3eBo_Q7oCLW5I7v4hd0KFkg',
    answer: [
    {
        title: 'панда',
        isTrue: false,
        point: 0,
    },
    {
      title: 'кенгуру',
      isTrue: true,
      point: 0.5,
    },
    {
      title: 'орел',
      isTrue: false,
      point: 0,
    },
    {
      title: 'эму',
      isTrue: true,
      point: 0.5,
    },
    {
      title: 'коала',
      isTrue: false,
      point: 0,
    },
  ]
  },
  {
    title: 'Какая часть света омывается всеми четырьмя океанами',
    type: 'Text',
    answer: [{
      title: 'Азия',
      isTrue: true,
      point: 1,
    }]
  },
  {
    title: 'Определи страну по её характеристике: «Это карликовое государство с населением около 1 тыс. человек имеет свое правительство, свой банк, гвардию, законы, валюту и монарха. Сфера деятельности этого государства – весь мир».',
    type: 'Radio',
    url: "https://moeobrazovanie.ru/data/prof_tests/test_272/exercise_4981/exercise_pic.jpg",
    answer: [
      {
        title: 'Андорра',
        isTrue: false,
        point: 0,
      },
      {
        title: 'Ватикан',
        isTrue: true,
        point: 1,
      },
      {
        title: 'Люксембург',
        isTrue: false,
        point: 0,
      },
      {
        title: 'Лихтенштейн',
        isTrue: false,
        point: 0,
      },
    ]
  },
]
const biologyQuestionsArr = [
  {
    title: 'Хранителем наследственной информации являются:',
    type: "Text",
    answer: [{ title: 'хромосомы', isTrue: true, point: 1 }],
  },

  {
    title: 'Защиту внутреннего содержимого клетки обеспечивает:',
    type: "Radio",
    answer: [
              { title: 'рибосома', isTrue: false, point: 0 },
              { title: 'мембрана', isTrue: true, point: 1 },
              { title: 'митохондрия', isTrue: false, point: 0 },
              { title: 'пластида', isTrue: false, point: 0 }
    ],
  },

  {
    title: 'В делении клеток принимают участие:',
    type: "Checkbox",
    answer: [{ title: ' клеточный центр ', isTrue: true, point: 0.5  },
              { title: 'рибосома', isTrue: true, point: 0.5 },
              { title: 'хлоропласт', isTrue: false, point: 0 },
              { title: 'вакуоли', isTrue: false, point: 0 }
    ],
  },

  {
    title: 'Самые маленькие косточки тела человека располагаются в:',
    type: "Radio",
    answer: [{ title: 'наружном ухе', isTrue: false, point: 0 },
              { title: 'внутреннем ухе ', isTrue: true, point: 1 },
              { title: 'среднем ухе', isTrue: false, point: 0 },
              { title: 'малом ухе', isTrue: false, point: 0 },
    ],
  },

  {
    title: 'Гипофиз выделяет:',
    type: "Select",
    answer: [{ title: 'адреналин', isTrue: false, point: 0 },
              { title: 'тироксин', isTrue: false, point: 0 },
              { title: 'гормон роста', isTrue: true, point: 1 },
              { title: 'инсулин', isTrue: false, point: 0 },
    ],
  },

  {
    title: 'В каком отделе пищеварительного тракта имеются ворсинки?',
    type: "Select",
    answer: [{ title: 'в пищеводе', isTrue: false, point: 0 },
              { title: 'в толстой кишке', isTrue: false, point: 0 },
              { title: 'в тонкой кишке', isTrue: true, point: 1 },
              { title: 'в желудке', isTrue: false, point: 0 },
    ],
  },

  {
    title: 'Что происходит под действием ферментов?',
    type: "Checkbox",
    answer: [{ title: 'разрушение клеток', isTrue: true, point: 0.5  },
              { title: 'синтез и распад веществ в клетке', isTrue: true, point: 0.5  },
              { title: 'деление клеток', isTrue: false, point: 0 },
              { title: 'сокращение клеток', isTrue: false, point: 0 }
    ],
  },
];
const randomQuestionsArr = [
  {
    title: 'Первая столица Украины',
    type: 'Text',
    answer: [{
      title: 'Харьков',
      isTrue: true,
      point: 1,
    }]
  },
  {
    title: 'Столица США',
    type: 'Text',
    answer: [{
      title: 'Вашингтон',
      isTrue: true,
      point: 1,
    }]
  },
  {
      type: "Checkbox",
      title: "Выберите страны в Европе",
      answer: [
          {
            title: "Франция",
              isTrue: true,
              point: 0.5 ,
          },
          {
            title: "Германия",
              isTrue: true,
              point: 0.5 ,
          },
          {
            title: "Греция",
              isTrue: true,
              point: 0.5 ,
          },
          {
            title: "Замбия",
              isTrue: false,
              point: 0,
          },
          {
            title: "Занзибар",
              isTrue: false,
              point: 0,
          }
      ]
  },
  {
      type: "Radio",
      title: "Выберите страны в Азии",
      answer: [
          {
            title: "Вьетнам",
              isTrue: true,
              point: 1,
          },
          {
            title: "США",
              isTrue: false,
              point: 0,
          },
          {
            title: "Украина",
              isTrue: false,
              point: 0,
          },
      ]
  },

  {
      type: "Select",
      title: "Солнце - это",
      answer: [
          {
            title: "Планета",
              isTrue: false,
              point: 0,
          },
          {
            title: "Звезда",
              isTrue: true,
              point: 1,
          },
          {
            title: "Комета",
              isTrue: false,
              point: 0,
          },
      ]
  },

  {
      type: "Radio",
      title: "Гренландия - это...",
      answer: [
          {
            title: "Остров",
              isTrue: true,
              point: 1,
          },
          {
            title: "Страна",
              isTrue: false,
              point: 0,
          },
          {
            title: "Материк",
              isTrue: false,
              point: 0,
          },
      ]
  },
  {
      type: "Checkbox",
      title: "Выберите из списка драгоценный металл...",
      answer: [
          {
            title: "Золото",
              isTrue: true,
              point: 0.5 ,
          },
          {
            title: "Платина",
              isTrue: true,
              point: 0.5 ,
          },
          {
            title: "Железо",
              isTrue: false,
              point: 0,
          },
          {
            title: "Медь",
              isTrue: false,
              point: 0,
          },
          {
            title: "Олово",
              isTrue: false,
              point: 0,
          },
      ]
  },
]

// localStorage.setItem('dataAnswers', JSON.stringify([geographyAQuestionsArr, biologyQuestionsArr, randomQuestionsArr])) 
export  {geographyAQuestionsArr, biologyQuestionsArr, randomQuestionsArr}