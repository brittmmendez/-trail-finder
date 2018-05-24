export default (state=[], action) => {
  let index;
  let trail;

  switch (action.type) {
    case 'ADD_TRAIL':
        return [...state, action.trail];

    case 'LIKE_TRAIL':
      index = state.findIndex(trail => trail.id === action.trailId);
      trail = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, trail, { votes: trail.votes += 1 }),
        ...state.slice(index + 1)
      ];

      case 'FETCH_TRAILS':
        return action.trails

    default:
      return state;
  }
}
