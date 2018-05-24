export default (state=[], action) => {
  let index;
  let trail;

  switch (action.type) {
    case 'GET_TRAILS':
      return action.trails;

    case 'ADD_TRAIL':
      return [...state, action.trail];

    case 'REMOVE_TRAIL':
      return state.filter(trail => trail.id !== action.trailId);

    case 'LIKE_TRAIL':
      return state.map((trail) => {
        if (trail.id === action.trail.id) {
          return action.trail
        } else {
          return trail
        }
      });

    default:
      return state;
  }
}
