import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './form.css';   

const EmployeeForm = ({ selectedEmployee, onSave }) => {
    const [employee, setEmployee] = useState({
        name: '',
        position: '',
        department: '',
        salary: ''
    });

    useEffect(() => {
        if (selectedEmployee) {
            setEmployee(selectedEmployee);
        } else {
            setEmployee({
                name: '',
                position: '',
                department: '',
                salary: ''
            });
        }
    }, [selectedEmployee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedEmployee) {
            await axios.put(`http://localhost:5009/employees/${selectedEmployee._id}`, employee);
        } else {
            await axios.post('http://localhost:5009/employees', employee);
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="position" value={employee.position} onChange={handleChange} placeholder="Position" required />
            <input type="text" name="department" value={employee.department} onChange={handleChange} placeholder="Department" required />
            <input type="number" name="salary" value={employee.salary} onChange={handleChange} placeholder="Salary" required />
            <button type="submit">Save</button>
        </form>
    );
};

export default EmployeeForm;
