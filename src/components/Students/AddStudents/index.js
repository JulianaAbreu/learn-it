import React, { Component } from "react";
import { Input, Button, Row, Col } from "antd";

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
    console.log(this.state.on);
  };

  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleChangeRegistration = e => {
    this.setState({
      registration: e.target.value
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
                <Input
                  placeholder="Nome do estudante"
                  className="input-name"
                  Row={2}
                  onChange={this.handleChangeName}
                />
              </Col>
              <Col span={3}>
                <Input
                  min={1}
                  max={10}
                  placeholder="Matrícula"
                  className="input-date"
                  onChange={this.handleChangeRegistration}
                />
              </Col>
              <Col span={4}>
                <Input
                  placeholder="3A"
                  className="classroom"
                  onChange={this.handleChangeClassroom}
                />
              </Col>
              <Col span={4}>
                <Input
                  placeholder="RG"
                  className="classroom"
                  onChange={this.handleChangeRg}
                />
              </Col>
              <Button type="primary" className="btn-add" onClick={this.submitStudents}>
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
