import { get, post } from "../modules/request";
import { LIST_STUDENTS, ADD_STUDENTS } from '../reducers/studentsReducer/constants';


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

export const addStudents = body => dispatch => {
    return post("student", body)
      .then(data => {
        console.log(data)
        return dispatch({
          type: ADD_STUDENTS,
          data
        });
      })
      .catch(error => {
      });
  };
  