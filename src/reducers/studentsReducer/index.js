import {LIST_STUDENTS} from "./constants";

export const studentsReducer = (state = [], action) => {
    switch(action.type) {
        case LIST_STUDENTS:
            return action.data
        default:
        return state
    }
}
export default studentsReducer;