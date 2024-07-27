import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

const App = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:5009/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleSave = () => {
        fetchEmployees();
        setSelectedEmployee(null);
    };

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5009/employees/${id}`);
            fetchEmployees();
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <div>
            <h1>Employee Management</h1>
            <EmployeeForm selectedEmployee={selectedEmployee} onSave={handleSave} />
            <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default App;
