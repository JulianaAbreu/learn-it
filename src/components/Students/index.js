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
    title: "Matrícula",
    dataIndex: "matricula",
    width: 120
  },
  {
    title: "Série",
    dataIndex: "serie",
    width:120
  },
  {
    title: "Data de nascimento",
    dataIndex: "date",
    width: 120
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    matricula: 31894712,
    serie: `3A`,
    date:`1999-18-22`
  });
}

class Students extends Component {
  render() {
    return (
      <div>
         <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 500 }} />
         
      </div>
    );
  }
}

export default Students;
