import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Employee({employee,handleRemove,setSelectedEmployee}) {

  const navigate = useNavigate(); // useNavigate ile sayfalara arasında geçiş yapılır bu yapı huk yapısı
  const handleSelectedEmployee = (emp) =>{
    setSelectedEmployee(emp);
    navigate(`/employees/update ${emp.id} `) //burada select butonuna basınca EmployeeUpdate sayfasına yönlendirecek.

  }
  return (
    <div key={employee.id}>
        {employee.firstName} {employee.lastName}
        <button onClick={() => handleRemove(employee.id)}> Remove</button>
        <button onClick={() =>handleSelectedEmployee(employee)} >Select</button>
    </div>
  )
}
