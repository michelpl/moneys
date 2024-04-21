import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

export default function ColorPicker() {
    const [state, setState] = useState({
        background: '#825EE4',
    });

    const handleChangeComplete = (color) => {
        setState({ background: color.hex });
    };


    return (
        <ChromePicker
            color={state.background}
            onChangeComplete={handleChangeComplete}
        />
    );

}