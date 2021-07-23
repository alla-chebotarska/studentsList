import React, { useState, useEffect } from 'react';
import StudentService from '../../servises/StudentService';
import StudentInfo from '../StudentInfo/StudentInfo';


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
            {studentsList ? <div>
                {studentsList.map(student => 
                    <StudentInfo key={student.id}  student={student} />)}
                    
            </div>
                 : <div></div>}
        </>
    )
}
