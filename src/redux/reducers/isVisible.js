const isVisibleReducer = (state = false, action) => {
  switch (action.type) {
  case 'INVISIBLE':
    return state = false;
  case 'VISIBLE':
    return !state;
  default:
    return state;
  }
};
export default isVisibleReducer;
