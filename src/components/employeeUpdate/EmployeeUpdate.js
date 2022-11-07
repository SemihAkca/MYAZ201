import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContex';

export default function EmployeeUpdate() {
    const navigate = useNavigate();
    const {employees,setList,selectedEmployee,setSelectedEmployee} = useContext(AppContext);
    
    const handleChange = (e) => {
        setSelectedEmployee({...selectedEmployee, [e.target.name]:e.target.value})
    }

    function handleSubmitUpdate(e) {
        e.preventDefault();
        setList([...employees.filter(emp=>emp.id!==selectedEmployee.id),
            selectedEmployee
        ])
        navigate(`/employees`) // select butonuna basınca employyes olarak belirttiğim EmployeeList e yönlendirir.
    }
    return (
    <div>
        <h2>Employee Update</h2>
        <p>{JSON.stringify(selectedEmployee)}</p>
        
        <form onSubmit={handleSubmitUpdate}>
            <input id="firstName" name="firstName" 
            on onChange={handleChange} 
            value={selectedEmployee.firstName}
            type="text" 
            placeholder='First Name' />

            <input id="lastName" name="lastName" 
            on onChange={handleChange} 
            value={selectedEmployee.lastName} 
            type="text" 
            placeholder='Last Name'/>
            <button type = 'submit'>Update</button>
        </form>
    </div>
  )
}
