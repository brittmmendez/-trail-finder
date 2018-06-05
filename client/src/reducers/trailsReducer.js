export default (state={trails:[]}, action) => {

  switch (action.type) {
    case 'GET_TRAILS':
      return {...state, trails: action.trails}

    case 'ADD_TRAIL':
      return {trails: [...state.trails, action.trail]};

    case 'REMOVE_TRAIL':
      return {trails: state.trails.filter(trail => trail.id !== action.trail)};

    case 'EDIT_TRAIL':
      state.trails.map((trail) => {
        if (trail.id === action.trail.id) {
          trail.name = action.trail.name
          trail.distance = action.trail.distance
          trail.description = action.trail.description
        }
      });
      return {...state, trail: action.trail};

    case 'LIKE_TRAIL':
      const updatedTrails = state.trails.map((trail) => {
        if (trail.id === action.trail.id) {
          return action.trail
        } else {
          return trail
        }
      });
      return {...state, trails: updatedTrails, };

    default:
      return state;
  }
}
