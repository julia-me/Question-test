const questopnInfoArr =[
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
      point: -0.5,
    },
    {
      title: 'Красное море',
      isTrue: false,
      point: -0.5,
    },
    {
      title: 'Адриатическое море',
      isTrue: false,
      point: -0.5,
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
        isTrue: false,
        point: 0,
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
        isTrue: true,
        point: 1,
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

export default questopnInfoArr