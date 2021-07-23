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
        <>
        <div className="student-info-container">
            <div className="student-info-pic-container">
                <img src={student.pic} alt="student" className="student-info-pic" />
            </div>
            <div>
                <h1 className="student-info-name">{student.firstName} {student.lastName}</h1>
                <ul className="student-info-list">
                    <li>Email: {student.email}</li>
                    <li>Company: {student.company}</li>
                    <li>Skill: {student.skill}</li>
                    <li>Average: {getAvarage(student.grades)}%</li>
                </ul>
            </div>
            <div></div>
        </div>
        <hr />
        </>
    )
}
