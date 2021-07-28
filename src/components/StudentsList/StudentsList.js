import { Box, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import StudentService from '../../servises/StudentService';
import FilterInput from '../FilterInput/FilterInput';
import StudentInfo from '../StudentInfo/StudentInfo';

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

    const onTagAdded = (tag, index) => {
        let student = studentsList[index];
        student.tags.add(tag);
        setStudentsList([...studentsList]);
    }

    const filterByFullName = (student) => {
        let filteredStudents = (student.getFullName()).toUpperCase().includes(filterName.toUpperCase());
        return filteredStudents;
    }

    const filterByTag = (student) => {
        let tags = student.tags;
        let filteredStudents = Array.from(tags).join(' ').toUpperCase().includes(filterTag.toUpperCase());
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
                                <StudentInfo key={student.id} student={student} tags={student.tags} onTagAdded={(tag) => onTagAdded(tag, index)} />)}
                    </Box>
                    : <Box></Box>}
            </CardContent>
        </Card >
    )
}
