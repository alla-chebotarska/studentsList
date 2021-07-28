import { mount } from 'enzyme';
import React from 'react';
import StudentInfo from '../StudentInfo/StudentInfo';
import Student from '../../model/Student';

const studentJson = '{"city":"Fush\u00eb-Muhurr","company":"Yadel","email":"iorton0@imdb.com","firstName":"Ingaberg","grades":["78","100","92","86","89","88","91","87"],"id":"1","lastName":"Orton","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg","skill":"Oracle"}';

const mountStudentInfo = () => mount(<StudentInfo student = {new Student(JSON.parse(studentJson))}/>);

describe('StudentInfo', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mountStudentInfo();
    });

    it('should render', () => {
        expect(wrapper.find(StudentInfo)).not.toHaveLength(0);
    });
});