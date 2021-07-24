import { Box, Card, CardContent } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StudentService from '../../servises/StudentService';
import StudentInfo from '../StudentInfo/StudentInfo';

const useStyles = makeStyles((theme) => ({
    studentListContainer: {
    borderRadius: theme.spacing(2),
    }
}));

export default function StudentsList() {
    const [studentsList, setStudentsList] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const studentService = new StudentService('https://api.hatchways.io/assessment/students');
        studentService.getStudentsList()
            .then(students => setStudentsList(students));
    }, [])

    console.log(studentsList);

    return (
        <Card className={classes.studentListContainer}>
            <CardContent>
                {studentsList ?
                    <Box>
                        {studentsList.map(student =>
                            <StudentInfo key={student.id} student={student} />)}
                    </Box>
                    : <Box></Box>}
            </CardContent>
        </Card >
    )
}
