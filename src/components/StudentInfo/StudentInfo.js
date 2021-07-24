import { Box, List, ListItemText, Typography, Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    studentInfoContainer: {
        padding: theme.spacing(2),
    },
    studentInfoName: {
        textTransform: 'uppercase',
        fontWeight: '600',
    },
    studentInfoPicContainer: {
        padding: theme.spacing(1),
    },
    studentInfoPic: {
        width: '100%',
        borderRadius: '50%',
        border: '1px solid lightgray'
    },
    studentInfoList: {
        marginLeft: theme.spacing(3),
    },
}));

export default function StudentInfo(props) {
    const classes = useStyles();
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
            <Grid container className={classes.studentInfoContainer}>
                <Grid item xs={2} className={classes.studentInfoPicContainer}>
                    <img src={student.pic} alt="student" className={classes.studentInfoPic} />
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h4" className={classes.studentInfoName}>{student.firstName} {student.lastName}</Typography>
                    <List className={classes.studentInfoList}>
                        <ListItemText>Email: {student.email}</ListItemText>
                        <ListItemText>Company: {student.company}</ListItemText>
                        <ListItemText>Skill: {student.skill}</ListItemText>
                        <ListItemText>Average: {getAvarage(student.grades)}%</ListItemText>
                    </List>
                </Grid>
                <Grid item xs={1}>
                    <Box>1</Box>
                </Grid>
            </Grid>
            <Divider />
        </>
    )
}
