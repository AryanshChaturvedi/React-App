import React, { useState } from 'react';


const SecondForm = () => {
    const [formData, setFormData] = useState({
        address: '',
        phoneNumber: '',
        

    });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
};

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="address">Address:</label>
            <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
                type="text"
                id="phonenumber"
                value={formData.phoneNumber}
                onChange={handleChange}
            />
        </div>
        <button type="submit">Submit Second Form</button>
    </form>
);

};

export default SecondForm;
