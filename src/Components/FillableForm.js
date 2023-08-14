import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import styled from 'styled-components';


const FillableForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        button: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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
           
          
            <InputField
            
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                
            />
            <div>
                <label htmlFor="message" style={{ marginRight: "25px"}}>Message:</label>
                <textarea
                    id="message"
                    name="message"
                    style={{ color:"blue", marginTop:"9px", marginRight:"35px"}}   
                    value={formData.message}
                    onChange={handleChange}
                />
                
            </div>
         
            <Button id = "btn" onClick={ onClick } >Submit</Button>
            

        </form>
        
    );
};

export default FillableForm;