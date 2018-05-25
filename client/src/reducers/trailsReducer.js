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


// export default (state=[], action) => {
//
//   switch (action.type) {
//     case 'GET_TRAILS':
//       return action.trails;
//
//     case 'ADD_TRAIL':
//       return [...state, action.trail];
//
//     case 'REMOVE_TRAIL':
//       return state.filter(trail => trail.id !== action.trailId);
//
//     case 'LIKE_TRAIL':
//       return state.map((trail) => {
//         if (trail.id === action.trail.id) {
//           return action.trail
//         } else {
//           return trail
//         }
//       });
//
//     default:
//       return state;
//   }
// }
