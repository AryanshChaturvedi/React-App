import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const EmailField = ({ label, onChange }) => {
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [emailData, setemailData] = useState("");

    const validateEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    };

    const handleEmailChange = (event) => {
        console.log("handleEmailChange");
        const newEmail = event.target.value;
        const oldValue = emailData;
        onChange = setemailData(newEmail);
        setIsValidEmail(validateEmail(newEmail));
    };

    const handleBlur = () => {
        console.log("Handle blur");
        if (emailData && !isValidEmail) {
            onChange='';
        }
    };

    return (
        <div>
            <label>{label}:</label>
            <input
                type="email"
                value={emailData}
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

