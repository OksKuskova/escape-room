import { Level, QuestGenre } from '../const';

type PeopleMinMax = [number, number]

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: keyof typeof Level ;
  type: keyof typeof QuestGenre;
  peopleMinMax: PeopleMinMax;
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type ShortQuest = Omit<Quest, 'description' | 'coverImg' | 'coverImgWebp'>

export type PreviewImg = Pick<Quest, 'previewImg' | 'previewImgWebp'>

export type CoverImg = Pick<Quest, 'coverImg' | 'coverImgWebp'>
