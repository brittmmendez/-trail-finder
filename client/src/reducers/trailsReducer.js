export default (state={trails:[], trail: "" }, action) => {

  switch (action.type) {
    case 'GET_TRAILS':
      return {...state, trails: action.trails}

    case 'GET_TRAIL':
      return {...state, trail: action.trail}

    case 'ADD_TRAIL':
      return {trails: [...state.trails, action.trail], trail: action.trail};

    case 'REMOVE_TRAIL':
      return {trails: state.trails.filter(trail => trail.id !== action.trail), trail:""};

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
      state.trails.map((trail) => {
        if (trail.id === action.trail.id) {
          trail.likes= action.trail.likes
        }
      });
      return {...state, trail: action.trail};

    default:
      return state;
  }
}
