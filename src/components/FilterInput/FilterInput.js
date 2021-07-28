import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    filterInput: {
        margin: theme.spacing(2, 0),
    },
}));

export default function FilterInput(props) {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState("");

    const onChange = (event) => {
        setInputValue(event.target.value);
        props.onFilterChange(event.target.value);
    }

    return (
        <div noValidate autoComplete="off" className={classes.filterInput}>
            <TextField fullWidth placeholder={props.placeholder} value={inputValue} onChange={onChange} />
        </div>
    )
}
