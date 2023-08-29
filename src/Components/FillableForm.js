import React, { useState } from 'react';
import InputField from './InputField'; 
import Button from './Button'; 
import styled from 'styled-components';
import PhoneNumberField from './PhoneNumber';
import EmailField from './EmailValidation';


const FillableForm = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        button: '',
        phoneNumber: '',
    });
    const handlePhoneNumberChange = (e) => {
        const rawPhoneNumber = e.target.value;
        const formattedPhoneNumber = rawPhoneNumber.replace(/[^0-9]/g, '');
        setFormData({
            ...formData,
            phoneNumber: formattedPhoneNumber,
        });
    };   

    const handleChange = ({ target }) => {
        console.log(target);
        setFormData({ ...formData, [target.name]: target.value });       
    }

    const onClick = (e) => {
        e.preventDefault();
        console.log("Button is clicked");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <InputField
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <EmailField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
               // onChange={handleChange}
            />
            <PhoneNumberField
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handlePhoneNumberChange}
            />
            <div>
                <label htmlFor="message" style={{ marginRight: "20px" }}>Message:</label>
                <textarea
                    id="message"
                    name="message"
                    style={{ color: "blue", marginTop: "39px", marginRight: "45px" }}
                    value={formData.message}
                    onChange={handleChange}
                />

            </div>
            
            <Button id="btn" onClick={onClick}>Submit</Button>
        </form>

    );
};

export default FillableForm;

