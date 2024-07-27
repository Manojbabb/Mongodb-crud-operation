import React from 'react';
import './list.css';  // Import the CSS file

const EmployeeList = ({ employees, onEdit, onDelete }) => {
    return (
        <div className="table-container">
            <h2>Employee List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee._id}>
                            <td data-label="Name">{employee.name}</td>
                            <td data-label="Position">{employee.position}</td>
                            <td data-label="Department">{employee.department}</td>
                            <td data-label="Salary">{employee.salary}</td>
                            <td data-label="Actions">
                                <button className="button button-edit" onClick={() => onEdit(employee)}>Edit</button>
                                <button className="button button-delete" onClick={() => onDelete(employee._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
