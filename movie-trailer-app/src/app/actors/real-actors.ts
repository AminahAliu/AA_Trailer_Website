import { Actor } from './actor'
import { BLACK_PANTHER } from './real-movies';
import { A_WRINKLE_IN_TIME } from './real-movies';
import { MARSHALL } from './real-movies';
import { GET_ON_UP } from './real-movies';
import { SLEIGHT } from './real-movies';
import { A_HAPPENING_OF_MONUMENTAL_PROPORTIONS } from './real-movies';
import { THE_COLOR_PURPLE } from './real-movies';
import { THE_BUTLER } from './real-movies';

export const MRS_WHICH: Actor = {
  id: 1,
  name: 'Oprah Winfrey',
  movies: [A_WRINKLE_IN_TIME, THE_COLOR_PURPLE, THE_BUTLER],
  image: 'assets/img/OprahWinfrey.jpg',
  bio: 'Oprah Winfrey is an American media executive, actress, talk show host, television producer and philanthropist. She is best known for her talk show The Oprah Winfrey Show, which was the highest-rated television program of its kind in history and was nationally syndicated from 1986 to 2011 in Chicago.',
};
const PRINCE_TCHALLA: Actor = {
  id: 2,
  name: 'Chadwick Boseman',
  movies: [BLACK_PANTHER, MARSHALL, GET_ON_UP],
  image: 'assets/img/ChadwickBoseman.jpg',
  bio: 'Chadwick Boseman is an American actor. He is known for his portrayal of T\'Challa / Black Panther in the Marvel Cinematic Universe (since 2016), particularly in Black Panther (2018), and for his starring roles in as Jackie Robinson in 42 (2013), James Brown in Get on Up (2014), and Thurgood Marshall in Marshall (2017).',
};

const MEG_MURRY: Actor = {
  id: 3,
  name: 'Storm Reid',
  movies: [A_WRINKLE_IN_TIME, SLEIGHT, A_HAPPENING_OF_MONUMENTAL_PROPORTIONS],
  image: 'assets/img/StormReid.jpg',
  bio: 'Storm Reid is an American actress. She portrayed the lead role, Meg Murry, in the fantasy film A Wrinkle in Time.',
};

export const ALL_ACTORS: Actor[] = [
  MRS_WHICH,
  PRINCE_TCHALLA,
  MEG_MURRY
];
