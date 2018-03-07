import {connect} from "react-redux";
import {addStudents, listStudents} from "../actions/studentsAction";

import AddStudents from "../components/Students/AddStudents";

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => ({
    addStudents: data => {
        return dispatch(addStudents())
    },
    listStudents: () => {
        return dispatch(listStudents())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddStudents);