import { ShortQuest } from '../type/quest';

const shortQuests: ShortQuest[] = [
  {
    'id': '535cb1c6-b8c5-456f-84cd-3d5011075adb',
    'title': 'Склеп',
    'previewImg': 'https://grading.design.htmlacademy.pro/static/quest/crypt.jpg',
    'previewImgWebp': 'https://grading.design.htmlacademy.pro/static/quest/crypt.webp',
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
    'previewImg': 'https://grading.design.htmlacademy.pro/static/quest/maniac.jpg',
    'previewImgWebp': 'https://grading.design.htmlacademy.pro/static/quest/maniac.webp',
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
    'previewImg': 'https://grading.design.htmlacademy.pro/static/quest/ritual.jpg',
    'previewImgWebp': 'https://grading.design.htmlacademy.pro/static/quest/ritual.webp',
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
    'previewImg': 'https://grading.design.htmlacademy.pro/static/quest/palace.jpg',
    'previewImgWebp': 'https://grading.design.htmlacademy.pro/static/quest/palace.webp',
    'level': 'easy',
    'type': 'detective',
    'peopleMinMax': [
      2,
      5
    ]
  },
];

export const getQuests = () => shortQuests;
