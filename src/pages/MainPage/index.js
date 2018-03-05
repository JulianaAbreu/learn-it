import React from "react";
import { Row, Col } from "antd";

import AddStudents from "../../components/Students/AddStudents"
import Students from "../../components/Students"

const MainPage = () => {
  return (
    <Row className="content-mainpage">
      <Col span={16} offset={4}>
        <div className="add-student">
            <AddStudents/>
        </div>
        <div>
            <Students />          
       </div>
      </Col>
    </Row>
  );
};

export default MainPage;
