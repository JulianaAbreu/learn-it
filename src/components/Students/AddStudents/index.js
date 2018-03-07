import React, { Component } from "react";
import { Input, InputNumber, Button, Row, Col } from "antd";

import "./addStudents.less";

class AddStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      registration: "",
      classroom: "",
      rg: "",
      on: false
    };
  }

  onClickAddStudent = () => {
    this.setState({
      on: !this.state.on
    });
  };

  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleChangeRegistration = number => {
    this.setState({
      registration: number
    });
  };

  handleChangeClassroom = e => {
    this.setState({
      classroom: e.target.value
    });
  };

  handleChangeRg = e => {
    this.setState({
      rg: e.target.value
    });
  };

  validFieldsStudent = () => {
    const { name, registration, classroom, rg } = this.state;
    if (!name || !registration || !classroom || !rg) {
      console.log("Preencha os campos");
      return false;
    } else {
      return true;
    }
  };

  submitStudents = () => {
    const { name, registration, classroom, rg } = this.state;
    const { listStudents, addStudents } = this.props;

    if (this.validFieldsStudent()) {
      const dataStudent = {
        name: name,
        registration: registration,
        classroom: classroom,
        rg: rg
      };
      addStudents(dataStudent).then(() => {
        listStudents();
      });
    }
    this.setState({
      name: name,
      registration: registration,
      classroom: classroom,
      rg: rg
    });
  };

  render() {
    const onButton = this.state;

    return (
      <div className="content-student">
        <h1>Estudantes</h1>
        <Button
          type="primary"
          ghost
          className={onButton.on ? "clicked-btn" : "btn-student"}
          onClick={this.onClickAddStudent}
        >
          Novo Estudante
        </Button>
        {onButton.on ? (
          <section className="add-students">
            <Row gutter={12}>
              <Col span={6}>
                <label>Estudante</label>
                <Input
                  placeholder="Juliana Cerqueira"
                  className="input-name"
                  row={2}
                  onChange={this.handleChangeName}
                />
              </Col>
              <Col span={3}>
                <label>Matrícula</label>
                <InputNumber
                  min={1}
                  placeholder="31894712"
                  onChange={this.handleChangeRegistration}
                />
              </Col>
              <Col span={4}>
                <label>Série</label>
                <Input
                  placeholder="3A"
                  className="classroom"
                  onChange={this.handleChangeClassroom}
                />
              </Col>
              <Col span={4}>
                <label>Registro geral</label>
                <Input
                  placeholder="37.216.589-8"
                  className="classroom"
                  onChange={this.handleChangeRg}
                />
              </Col>
              <Button
                type="primary"
                className="btn-add"
                onClick={this.submitStudents}
              >
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
