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
};
export const PRINCE_TCHALLA: Actor = {
  id: 2,
  name: 'Chadwick Boseman',
  movies: [BLACK_PANTHER, MARSHALL, GET_ON_UP],
  image: 'assets/img/ChadwickBoseman.jpg'
};

export const MEG_MURRY: Actor = {
  id: 3,
  name: 'Storm Reid',
  movies: [A_WRINKLE_IN_TIME, SLEIGHT, A_HAPPENING_OF_MONUMENTAL_PROPORTIONS],
  image: 'assets/img/StormReid.jpg'
};
