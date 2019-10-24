export const increment = (nr) => ({
  type: 'INCREMENT',
  data: nr,
});
export const decrement = () => ({
  type: 'DECREMENT',
});
export const show = () => ({
  type: 'VISIBLE',
});
export const hide = () => ({
  type: 'INVISIBLE',
});
