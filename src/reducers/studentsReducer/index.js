import { LIST_STUDENTS, ADD_STUDENTS, REMOVE_STUDENT } from "./constants";

export const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_STUDENTS:
      return action.data;
    case ADD_STUDENTS:
      const { data } = action;
      const newData = state.concat(data);
      return newData;
    case REMOVE_STUDENT:
      state = [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
      console.log(state)
      return state;

    default:
      return state;
  }
};
export default studentsReducer;
