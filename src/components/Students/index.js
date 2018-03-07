import React, { Component } from "react";
import { Table } from "antd";

import "./students.less";

const columns = [
  {
    title: "Estudante",
    dataIndex: "name",
    width: 150
  },
  {
    title: "Série",
    dataIndex: "classroom",
    width: 120
  },
  {
    title: "Matrícula",
    dataIndex: "registration",
    width: 120
  },
  {
    title: "Data de nascimento",
    dataIndex: "dateOfBirth",
    width: 120
  }
];

class Students extends Component {
  componentWillMount() {
    this.props.listStudents();
  }

  render() {
    const { students } = this.props;
    console.log(students.length)
    
    return (
      <div>
        <Table
          columns={columns}
          dataSource={[...students]}
          pagination={50}
          rowKey={(students, index) => index}
        />
      </div>
    );
  }
}

export default Students;
