import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const EmailField = ({ label, value, onChange }) => {
    const [isValidEmail, setIsValidEmail] = useState(true);
    
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        onChange(newEmail); 
        setIsValidEmail(validateEmail(newEmail));
    };

    const handleBlur = () => {
        if (value && !isValidEmail) {
            onChange('');
        }
    };

    return (
        <div>
            <label>{label}:</label>
            <input
                type="email"
                value={value}
                onChange={handleEmailChange}
                onBlur={handleBlur}
                style={{
                    borderColor: isValidEmail ? 'initial' : 'red',
                }}
            />
            {!isValidEmail && <p style={{ color: 'red' }}>Invalid email format</p>}
        </div>
    );
};

export default EmailField;

