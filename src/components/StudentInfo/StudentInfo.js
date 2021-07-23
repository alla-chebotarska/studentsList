import React from 'react';
import './style.css';

export default function StudentInfo(props) {
    const student = props.student;
    const getAvarage = (grades) => {
        var sum = 0;
        for (var i = 0; i < grades.length; i++) {
            sum += parseInt(grades[i], 10);
        }

        var average = sum / grades.length;
        return average;
    }
    return (
        <ul className="student-info-container">
            <li><img src={student.pic} alt="student" /></li>
            <li><b>{student.firstName} {student.lastName}</b></li>
            <li>Email: {student.email}</li>
            <li>Company: {student.company}</li>
            <li>Skill: {student.skill}</li>
            <li>Average: {getAvarage(student.grades)}%</li>
        </ul>
    )
}
