import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tagInput: {
        margin: theme.spacing(2, 3),
    },
}));

export default function TagInput(props) {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState("");

    const onChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.onTagAdded(inputValue);
            setInputValue("");
        }
      }

    return (
        <div noValidate autoComplete="off" className={classes.tagInput}>
            <TextField placeholder={props.placeholder} value={inputValue} onChange={onChange} onKeyDown={handleKeyDown} />
        </div>
    )
}
