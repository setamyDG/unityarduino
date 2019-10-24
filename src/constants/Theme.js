import { colors } from './Colors';
import { links } from './Links';
import { Cursor } from './Cursor';

export const theme = {
  colors,
  links,
  Cursor,
  font: {
    thin: 300,
    regular: 400,
    bold: 800,
  },
  fontSize: {
    big: 35,
    mid: 20,
    small: 12,
  },
  media: {
    desktop: '@media (min-width: 1024px)',
    tablet: '@media (max-width: 228px)',
    wide: '@media (min-width: 3840px)',
    iphone: '@media (min-width: 375px)',
  },
};
