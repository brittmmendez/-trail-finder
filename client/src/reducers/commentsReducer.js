export default (state={comments:[]}, action) => {

  switch (action.type) {
    case 'GET_COMMENTS':
      return {...state, comments: action.comments}

    case 'ADD_COMMENT':
      return {comments: [...state.comments, action.comment]};

    default:
      return state;
  }
}
