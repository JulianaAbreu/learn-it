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
    title: "RG",
    dataIndex: "rg",
    width: 120
  }
];

class Students extends Component {
  componentDidMount() {
    this.props.listStudents();
  }

  render() {
    const { students } = this.props;

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
