import React, { useContext } from 'react'
import { AppContext } from '../context/AppContex'
import Employee from '../employe/Employee'

 function EmployeeList() {
    const  {employees,setList,data,setSelectedEmployee} =useContext(AppContext);

    const handeleClearAll= () =>{
        setList([])
    }
    function handleGetAll() 
    {
        setList(data)
    };

    function  handleRemove(id)
    {
        setList(employees.filter(emp => emp.id!==id))
    }
    return (
    <div>
        <h2>EmployeeList {employees.length} </h2>
        {employees.map((emp,index) => (
            <Employee key={index} employee = {emp} handleRemove = {handleRemove} setSelectedEmployee= {setSelectedEmployee} />
        ))}
        <button onClick={handeleClearAll}>ClearAll</button>
        <button onClick={handleGetAll}>GetAll</button>
        
    </div>

    
  )
}

export default EmployeeList;