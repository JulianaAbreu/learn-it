import { connect } from "react-redux";
import Students from "../components/Students";
import { listStudents } from "../actions/studentsAction";

const mapStateToProps = state => {
  return {
    students: state.studentsReducer
  };
};

const mapDispatchToProps = dispatch => ({
  listStudents: () => {
    return dispatch(listStudents());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
