import { Box, Divider, Grid, List, ListItemText, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import TagInput from '../TagInput/TagInput';
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
    studentInfoTable: {
        maxWidth: 200,
    },
    studentInfoTableCell: {
        borderBottom: 'none',
        paddingLeft: 0,
    },
    studentInfoTagContainer: {
        marginLeft: theme.spacing(2),
    },
    studentInfoTagContainerHidden: {
        display: 'none',
    },
    studentInfoTag: {
        backgroundColor: 'lightgrey',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        borderRadius: theme.spacing(1),
    }
}));

export default function StudentInfo(props) {
    const classes = useStyles();
    const student = props.student;
    const [isShown, setIsShown] = useState(false);
    const [tags, setTags] = useState(props.tags);

    function onTagAdded(tag) {
        tags.add(tag);
        setTags(new Set(tags));
        props.onTagAdded(tag);
    }

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
                        {isShown ?
                            <TableContainer>
                                <Table className={classes.studentInfoTable} size="small">
                                    <TableBody>
                                        {student.grades.map((grade, index) =>
                                            <TableRow key={index}>
                                                <TableCell align="left" className={classes.studentInfoTableCell}>{`Test ${index + 1}`} </TableCell>
                                                <TableCell className={classes.studentInfoTableCell}>{`${grade}%`}</TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            : <Box></Box>}
                    </List>
                    <div className={tags.size > 0 ? classes.studentInfoTagContainer : classes.studentInfoTagContainerHidden}>
                        {Array.from(tags).map((tag, id) =>
                            <Box className={classes.studentInfoTag} component="div" display="inline" key={id}>{tag}</Box>)}
                    </div>
                    <TagInput onTagAdded={onTagAdded} placeholder="Add a tag" />
                </Grid>
                <Grid item xs={1}>
                    <Box><ToggleButton isShown={isShown} onShownChange={(isShown) => setIsShown(isShown)} /></Box>
                </Grid>
            </Grid>
            <Divider />
        </>
    )
}
