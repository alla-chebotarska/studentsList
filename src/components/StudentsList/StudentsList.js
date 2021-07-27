import { Box, Card, CardContent } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StudentService from '../../servises/StudentService';
import StudentInfo from '../StudentInfo/StudentInfo';
import FilterInput from '../FilterInput/FilterInput';

const useStyles = makeStyles((theme) => ({
    studentListContainer: {
        borderRadius: theme.spacing(2),
        padding: theme.spacing(2),
    }
}));

export default function StudentsList() {
    const [studentsList, setStudentsList] = useState([]);
    const [filterName, setFilterName] = useState("");
    const classes = useStyles();

    useEffect(() => {
        const studentService = new StudentService('https://api.hatchways.io/assessment/students');
        studentService.getStudentsList()
            .then(students => setStudentsList(students));
    }, [])

    console.log(studentsList);

    return (
        <Card className={classes.studentListContainer}>
            <FilterInput onFilterChange = {(newFilter) => setFilterName(newFilter)} placeholder="Search by name" />
            <CardContent>
                {studentsList ?
                    <Box>
                        {studentsList.filter(student => filterName !== "" ? (student.getFullName()).toUpperCase().includes(filterName.toUpperCase()) : true)
                        .map(student =>
                            <StudentInfo key={student.id} student={student} />)}
                    </Box>
                    : <Box></Box>}
            </CardContent>
        </Card >
    )
}
