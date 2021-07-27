import { Box, List, ListItemText, Typography, Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';

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
    const [isShown, setIsShown] = useState(false);

    return (
        <>
            <Grid container className={classes.studentInfoContainer}>
                <Grid item xs={2} className={classes.studentInfoPicContainer}>
                    <img src={student.pic} alt="student" className={classes.studentInfoPic} />
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h4" className={classes.studentInfoName}>{student.getFullName()}</Typography>
                    <List className={classes.studentInfoList}>
                        <ListItemText>Email: {student.email}</ListItemText>
                        <ListItemText>Company: {student.company}</ListItemText>
                        <ListItemText>Skill: {student.skill}</ListItemText>
                        <ListItemText>Average: {student.getAvarage()}%</ListItemText>
                        <List>
                            {isShown ?
                                student.grades.map((grade, index) =>
                                    <ListItemText key={index}>{`Test ${index + 1}  ${grade}%`}</ListItemText>
                                ) : <Box></Box>}
                        </List>

                    </List>
                </Grid>
                <Grid item xs={1}>
                    <Box><ToggleButton isShown={isShown} onShownChange={(isShown) => setIsShown(isShown)} /></Box>
                </Grid>
            </Grid>
            <Divider />
        </>
    )
}
