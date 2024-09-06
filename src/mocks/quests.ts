import { Quest } from '../type/quest';

const quests: Quest[] = [
  {
    'id': '535cb1c6-b8c5-456f-84cd-3d5011075adb',
    'title': 'Склеп',
    'description': 'Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?',
    'previewImg': 'https://grading.design.htmlacademy.pro/static/quest/crypt.jpg',
    'previewImgWebp': 'https://grading.design.htmlacademy.pro/static/quest/crypt.webp',
    'coverImg': 'https://grading.design.htmlacademy.pro/static/quest/crypt@2x.jpg',
    'coverImgWebp': 'https://grading.design.htmlacademy.pro/static/quest/crypt@2x.webp',
    'level': 'hard',
    'type': 'horror',
    'peopleMinMax': [
      2,
      5
    ]
  },
  {
    'id': 'b57d4ee7-722e-4f33-bff7-bf45b2aaeccb',
    'title': 'Маньяк',
    'description': 'В комнате с приглушённым светом несколько человек, незнакомых друг с другом, приходят в себя. Никто не помнит, что произошло прошлым вечером. Руки и ноги связаны, но одному из вас получилось освободиться. На стене висит пугающий таймер и запущен отсчёт 60 минут. Сможете ли вы разобраться в стрессовой ситуации, помочь другим, разобраться что произошло и выбраться из комнаты?',
    'previewImg': 'https://grading.design.htmlacademy.pro/static/quest/maniac.jpg',
    'previewImgWebp': 'https://grading.design.htmlacademy.pro/static/quest/maniac.webp',
    'coverImg': 'https://grading.design.htmlacademy.pro/static/quest/maniac@2x.jpg',
    'coverImgWebp': 'https://grading.design.htmlacademy.pro/static/quest/maniac@2x.webp',
    'level': 'medium',
    'type': 'horror',
    'peopleMinMax': [
      3,
      6
    ]
  },
  {
    'id': 'dbab654a-9202-4b38-8bd5-9c817a7ec78a',
    'title': 'Ритуал',
    'description': 'Тяжелый воздух угнетает, в ночи вы оказываетесь запертыми в сыром помещении вместе с другими ничего не понимающими жертвами. Сквозь щель в двери вы видите, как некто в капюшоне готовит площадку как будто для проведения мистического обряда. Удастся ли вам выбраться, пока вы не станете жертвой ритуала?',
    'previewImg': 'https://grading.design.htmlacademy.pro/static/quest/ritual.jpg',
    'previewImgWebp': 'https://grading.design.htmlacademy.pro/static/quest/ritual.webp',
    'coverImg': 'https://grading.design.htmlacademy.pro/static/quest/ritual@2x.jpg',
    'coverImgWebp': 'https://grading.design.htmlacademy.pro/static/quest/ritual@2x.webp',
    'level': 'hard',
    'type': 'mystic',
    'peopleMinMax': [
      3,
      5
    ]
  },
  {
    'id': 'c4bae3e3-343f-40dd-9fa6-55faf90cd538',
    'title': 'Тайны старого особняка',
    'description': 'Погрузитесь в атмосферу служебных помещений закулисья, которые хранят множество тайн и загадок. Вы окажитесь в старом особняке и увидите все, что скрывают его запутанные коридоры.',
    'previewImg': 'https://grading.design.htmlacademy.pro/static/quest/palace.jpg',
    'previewImgWebp': 'https://grading.design.htmlacademy.pro/static/quest/palace.webp',
    'coverImg': 'https://grading.design.htmlacademy.pro/static/quest/palace@2x.jpg',
    'coverImgWebp': 'https://grading.design.htmlacademy.pro/static/quest/palace@2x.webp',
    'level': 'easy',
    'type': 'detective',
    'peopleMinMax': [
      2,
      5
    ]
  }
];

export const getQuestById = (id: string) => {
  const index = quests.findIndex((quest) => quest.id === id);
  if (index >= 0) {
    return quests[index];
  }
};
