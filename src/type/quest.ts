import { Level, QuestType } from '../const';

type PeopleMinMax = [number, number]

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: keyof typeof Level ;
  type: keyof typeof QuestType;
  peopleMinMax: PeopleMinMax;
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type ShortQuest = Omit<Quest, 'description' | 'coverImg' | 'coverImgWebp'>
