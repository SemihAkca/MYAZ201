import { data } from "./Data"
//import React, { useState } from 'react'
import EmployeeList from "./components/employeeList/EmployeeList";
import { useContext, useState } from "react";
import EmployeeAdd from "./components/employeeAdd/EmployeeAdd";
import EmployeeUpdate from "./components/employeeUpdate/EmployeeUpdate";
import { AppContext } from "./components/context/AppContex";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Counter from './components/counter/Counter';
import Contact from "./components/contact/Contact";

export default function App() {
  const { appName, employees, setList, selectedEmployee, setSelectedEmployee } = useContext(AppContext);
  return (
    <div>
        <h1>{appName}</h1>
        
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/employees">Employee</Link></li>
          <li><Link to="/employees/add">Add Employee</Link></li>
          <li><Link to="/employees/update/:id">Employee Update</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
        <Routes>
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/add" element={<EmployeeAdd />} />
          <Route path="/employees/update/:id" element={<EmployeeUpdate />} />
          <Route path="/counter" element={<Counter />} />
          <Route path= "/contact" element = {<Contact/> }/>
        </Routes>
          
        
    </div>
  );
}

