import React, { useState } from 'react';
import { TextField, Autocomplete, Button } from '@mui/material';
import { Fruits } from '../../../../SharedData';
import styled from 'styled-components';

const FruitSurvey = () => {

    const [name, setName] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, selectedValue);
    };


    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                style={{ marginBottom: '10px' }}
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
            />
            <Autocomplete
                style={{ width: '250px', marginBottom: '10px' }}
                value={selectedValue}
                onChange={(_, newValue) => setSelectedValue(newValue)}
                options={Fruits}
                renderInput={(params) => (
                    <TextField {...params} label="Fruits" variant="outlined" />
                )}
            />
            <Button type='submit'>Submit</Button>
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default FruitSurvey;