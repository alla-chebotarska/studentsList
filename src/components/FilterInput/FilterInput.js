import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

export default function FilterInput(props) {
    const [inputValue, setInputValue] = useState("");

    const onChange = (event) => {
        setInputValue(event.target.value);
        props.onFilterChange(event.target.value);
    }

    return (
        <form noValidate autoComplete="off">
            <TextField fullWidth label="Search by name" value={inputValue} onChange={onChange}/>
        </form>
    )
}
