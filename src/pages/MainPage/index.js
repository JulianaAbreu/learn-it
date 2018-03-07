import React from "react";
import { Row, Col } from "antd";

import AddStudents from "../../components/Students/AddStudents"
import StudentsContainer from "../../containers/StudentsContainer"

const MainPage = () => {
  return (
    <Row className="content-mainpage">
      <Col span={16} offset={4}>
        <div className="add-student">
            <AddStudents/>
        </div>
        <div>
            <StudentsContainer />          
       </div>
      </Col>
    </Row>
  );
};

export default MainPage;
