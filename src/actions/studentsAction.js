import { get } from "../modules/request";
import { LIST_STUDENTS } from '../reducers/studentsReducer/constants';


export const listStudents = () => dispatch => {
    return get('students')
    .then(data => (
        dispatch({
            type: LIST_STUDENTS,
            data
        })
    ))
    .catch(error => {
        throw new Error('Error in response request', error.message);
    })
}