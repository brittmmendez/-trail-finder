export default (state=[], action) => {
  switch (action.type) {
    case 'ADD_TRAIL':
        return [...state, action.trail];
      case 'FETCH_TRAILS':
        return action.trails
    default:
      return state;
  }
}
