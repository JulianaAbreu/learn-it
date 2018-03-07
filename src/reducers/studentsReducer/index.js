import { LIST_STUDENTS, ADD_STUDENTS } from "./constants";

export const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_STUDENTS:
      return action.data;
    case ADD_STUDENTS:
      const { data } = action;
      const newData = state.concat(data);
      return newData;

    default:
      return state;
  }
};
export default studentsReducer;
