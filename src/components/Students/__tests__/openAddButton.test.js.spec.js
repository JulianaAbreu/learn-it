import React from "react";
import { shallow } from 'enzyme';
import AddStudents from "../AddStudents"
import renderer from 'react-test-renderer';

describe('<AddStudents />', () => {
    it('should not have the filters visible', () => {
        const component = renderer.create(
            <AddStudents />,
        );
        let on = component.toJSON();
        expect(on).toMatchSnapshot();
    })

    it('should Change state of add button', () => {
        const component = renderer.create(
            <AddStudents />,
        );
        let on = component.toJSON();
        expect(on).toMatchSnapshot();
    });

    it('should have a New Student button', () => {
        const wrapper = shallow(<AddStudents />);
        expect(wrapper.find('button.btn-student')).toHaveLength(1);
    })

    it('should click on Novo Estudante button', () => {
        const wrapper = shallow(<AddStudents />);
        wrapper.find('button.btn-student').simulate('click');
        expect(wrapper.state().on).toBe(true);
    })
})
