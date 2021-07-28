import { mount } from 'enzyme';
import React from 'react';
import StudentsList from '../StudentsList/StudentsList';

const mountStudentsList = () => mount(<StudentsList />);

describe('StudentsList', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mountStudentsList();
    });

    it('should render', () => {
        expect(wrapper.find(StudentsList)).not.toHaveLength(0);
    });
});