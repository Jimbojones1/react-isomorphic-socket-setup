import { UPDATE_MESSAGE, ADD_MESSAGE } from '../actions/message-actions';

export default function (initialState) {
  return (state=initialState, action) => {
    switch(action.type) {
      case UPDATE_MESSAGE:
        return Object.assign({}, state, { currentMessage: action.message });
      case ADD_MESSAGE:
        const text = state.currentMessage.trim();

        if (text) {
          return {
            messages: [...state.messages, {id: state.messages.length + 1, text}],
            currentMessage: ''
          };
        }
      default:
        return state;
    }
  }
}
