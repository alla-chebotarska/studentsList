import React, { useState, useEffect } from 'react';
import StudentService from '../../servises/StudentService';
import StudentInfo from '../StudentInfo/StudentInfo';
import './style.css';

export default function StudentsList(props) {

    const [studentsList, setStudentsList] = useState([]);

    useEffect(() => {
        const studentService = new StudentService('https://api.hatchways.io/assessment/students');
        studentService.getStudentsList()
            .then(students => setStudentsList(students));
    }, [])

    console.log(studentsList);

    return (
        <>
            {studentsList ?
                <div className="students-list-container">
                    {studentsList.map(student =>
                        <StudentInfo key={student.id} student={student} />)}

                </div>
                : <div></div>}
        </>
    )
}
