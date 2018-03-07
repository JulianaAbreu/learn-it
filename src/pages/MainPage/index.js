import React from "react";
import { Row, Col } from "antd";

import AddStudentsContainer from "../../containers/AddStudentContainer";
import StudentsContainer from "../../containers/StudentsContainer"

const MainPage = () => {
  return (
    <Row className="content-mainpage">
      <Col span={16} offset={4}>
        <div className="add-student">
            <AddStudentsContainer/>
        </div>
        <div>
            <StudentsContainer />          
       </div>
      </Col>
    </Row>
  );
};

export default MainPage;
