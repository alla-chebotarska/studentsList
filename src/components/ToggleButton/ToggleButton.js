import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    toggleButton: {
        border: 'none',
        backgroundColor: 'white',
    },
}));

export default function ToggleButton(props) {
    const classes = useStyles();
    const [isShown, setToggle] = useState(props.isShown);

    function onClick() {
        props.onShownChange(!isShown);
        setToggle(!isShown);
    }

    return (
        <button onClick={onClick} className={classes.toggleButton}>{isShown ? <RemoveIcon /> : <AddIcon />}</button>
    )
}
