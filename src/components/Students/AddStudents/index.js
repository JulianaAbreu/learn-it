import React, { Component } from "react";
import { Input, InputNumber, DatePicker, Button } from "antd";
import moment from "moment";
import { Row, Col } from "antd";

import "./addStudents.less";

class AddStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }

  onClickAddStudent = () => {
    this.setState({
      on: !this.state.on
    });
    console.log(this.state.on);
  };

  render() {
    const onButton = this.state;
    const dateFormat = "DD/MM/YYYY";

    return (
      <div className="content-student">
        <h1>Estudantes</h1>
        <Button type="primary" ghost  className={onButton.on ? 'clicked-btn' : 'btn-student'} onClick={this.onClickAddStudent} >Novo Estudante</Button>

      
        {onButton.on ? (
          <section className="add-students">
            <Row gutter={12}>
              <Col span={6}>
                <Input
                  placeholder="Nome do estudante"
                  className="input-name"
                  Row={2}
                />
              </Col>
              <Col span={3}>
                <Input
                  min={1}
                  max={10}
                  placeholder="31894712"
                  className="input-date"
                />
              </Col>
              <Col span={4}>
                <Input placeholder="3A" className="registration" />
              </Col>
              <DatePicker
                defaultValue={moment("2015/01/01", dateFormat)}
                format={dateFormat}
              />
              <Button type="primary" className="btn-add">
                Inserir
              </Button>
            </Row>
          </section>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default AddStudents;
