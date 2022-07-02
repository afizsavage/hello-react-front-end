const GET_MESSAGE_REQUEST = 'greet/GET_MESSAGE_REQUEST';
const GET_MESSAGE_SUCCESS = 'greet/GET_MESSAGE_SUCCESS';

// initial state
const initialState = {
  message: null,
};

// Actions
export const getMessagesAction = () => ({
  type: GET_MESSAGE_REQUEST,
});

export const getMessageSuccessAction = (data) => ({
  type: GET_MESSAGE_SUCCESS,
  data,
});

// reducer
export const greetReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case GET_MESSAGE_SUCCESS:
      return { ...state, message: action.data.message };
    default:
      return state;
  }
};
