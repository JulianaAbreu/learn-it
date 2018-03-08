import React, { Component } from "react";
import { Table, Icon, Button } from "antd";

import "./students.less";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
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
        },
        {
          render: this.btnRemoveStudent,
          width: 120
        }
      ]
    };
  }

  componentDidMount() {
    this.props.listStudents();
    this.props.removeStudent();
  }
  
  btnRemoveStudent = (value, data, index) => {
    const { removeStudent } = this.props;

    return (
      <Icon
        type="close"
        className="btn-remove"
        onClick={() => removeStudent(index)}
      />
    );
  };
  render() {
    const { students } = this.props;
    const { columns } = this.state;

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
