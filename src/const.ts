import publisherImg from '../assets/svg/publisher.svg';
import storyImg from '../assets/svg/story.svg';
import defaultImg from '../assets/svg/defaultAvata.svg';

export interface Chapter {
  name: string;
  status: string;
  isLasted: boolean;
}
export interface IData {
  name: string;
  publisher: string;
  type: string;
  readNum: string;
  likeNum: string;
  types: string[];
  chapterNum: number;
  freeChapter: number;
  lockedChapter: number;
  price: number;
  promo: string;
  genres: string[];
  story: string;
  art: string;
  sumary: string;
  chapters: Chapter[];
}

export const data: IData = {
  name: 'Kasane',
  publisher: 'Kodansha',
  type: 'Drama',
  readNum: '74,483',
  likeNum: '15,863',
  types: ['18+', 'NEW', 'TRENDING', 'BESTSELLER', 'MANGA'],
  chapterNum: 10,
  freeChapter: 3,
  lockedChapter: 7,
  price: 35,
  promo: '-50%',
  genres: ['Horror', 'Psychological', 'Seinen'],
  story: 'Johnnie Christmas',
  art: 'Jack T. Cole',
  sumary: `Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. However, there is nothing to do with this.`,
  chapters: [
    {
      name: 'Chapter 1',
      status: 'free',
      isLasted: true,
    },
    {
      name: 'Chapter 2',
      status: 'free',
      isLasted: true,
    },
    {
      name: 'Chapter 3',
      status: 'free',
      isLasted: true,
    },
    {
      name: 'Chapter 4',
      status: 'locked',
      isLasted: true,
    },
    {
      name: 'Chapter 5',
      status: 'locked',
      isLasted: true,
    },
    {
      name: 'Chapter 6',
      status: 'locked',
      isLasted: true,
    },
    {
      name: 'Chapter 7',
      status: 'locked',
      isLasted: true,
    },
    {
      name: 'Chapter 8',
      status: 'locked',
      isLasted: true,
    },
    {
      name: 'Chapter 9',
      status: 'locked',
      isLasted: true,
    },
    {
      name: 'Chapter 10',
      status: 'locked',
      isLasted: true,
    },
  ],
};
export interface ICredit {
  type: string;
  name: string;
  avatar: string;
}
export const credits: ICredit[] = [
  { type: 'Publisher', name: 'Kodansha', avatar: publisherImg },
  { type: 'Story', name: 'Johnnie Christmas', avatar: storyImg },
  { type: 'Art', name: 'Jack T. Cole', avatar: defaultImg },
];

export interface IFact {
  type: string;
  content: string;
}

export const otherFacts: IFact[] = [
  {
    type: 'Last Updated',
    content: '2 days ago',
  },
  {
    type: 'Age Rating',
    content: 'Mature (18+)',
  },
  {
    type: 'Color',
    content: 'Black & White',
  },
  {
    type: 'Origin Media',
    content: 'Print',
  },
  {
    type: 'Style Origin',
    content: 'Japanese Comics (Manga)',
  },
  {
    type: 'Copyright',
    content: '© Daruma Matsuura / Kodansha Ltd.',
  },
  {
    type: 'Other Names',
    content: 'Kasane -voleuse de visage',
  },
];
