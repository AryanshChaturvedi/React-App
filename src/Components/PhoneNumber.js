import React from 'react';
import InputMask from 'react-input-mask';

const PhoneNumberField = ({ label, value, onChange }) => {
    return (
        <div>
            <label>{label}:</label>
            <InputMask
                mask="+1 (999) 999-9999"
                maskChar="_"
                value={value}
                onChange={onChange}
                placeholder="+1 (123) 456-7890"
            />
        </div>
    );
};

export default PhoneNumberField;

