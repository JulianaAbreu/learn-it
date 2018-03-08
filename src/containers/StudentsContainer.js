import { connect } from "react-redux";
import Students from "../components/Students";
import { listStudents, removeStudent } from "../actions/studentsAction";

const mapStateToProps = state => {
  return {
    students: state.studentsReducer
  };
};

const mapDispatchToProps = dispatch => ({
    
    removeStudent: (index) => {
      dispatch(removeStudent(index))
    },
    listStudents: () => {
      dispatch(listStudents())
    },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
