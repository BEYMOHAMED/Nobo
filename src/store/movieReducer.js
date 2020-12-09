const initialState = {};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "show_movie":
      return (state = action.payload);
    default:
      return state;
  }
}

export default movieReducer;
