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
    const [filterTag, setFilterTag] = useState("");
    const classes = useStyles();

    useEffect(() => {
        const studentService = new StudentService('https://api.hatchways.io/assessment/students');
        studentService.getStudentsList()
            .then(students => setStudentsList(students));
    }, []);

    const onTagAdded = (tags, index) => {
        let student = studentsList[index];
        student.tags = tags;
        setStudentsList([...studentsList]);
    }

    const filterByFullName = (student) => {
        let filteredStudents = (student.getFullName()).toUpperCase().includes(filterName.toUpperCase());
        return filteredStudents;
    }

    const filterByTag = (student) => {
        let tags = student.tags;
        let filteredStudents = tags.join(' ').toUpperCase().includes(filterTag.toUpperCase());
        return filteredStudents;
    }

    return (
        <Card className={classes.studentListContainer}>
            <FilterInput onFilterChange={(newFilter) => setFilterName(newFilter)} placeholder="Search by name" />
            <FilterInput onFilterChange={(newFilter) => setFilterTag(newFilter)} placeholder="Search by tag" />
            <CardContent>
                {studentsList ?
                    <Box>
                        {studentsList
                            .filter(student => filterName !== "" ? filterByFullName(student) : true)
                            .filter(student => filterTag !== "" ? filterByTag(student) : true)
                            .map((student, index) =>
                                <StudentInfo key={student.id} student={student} onTagAdded={(tags) => onTagAdded(tags, index)} />)}
                    </Box>
                    : <Box></Box>}
            </CardContent>
        </Card >
    )
}
