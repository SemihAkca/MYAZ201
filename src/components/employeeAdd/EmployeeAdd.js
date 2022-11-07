import { useContext, useState } from "react";
import { AppContext } from "../context/AppContex";

function EmployeeAdd() {
    const {employees,setList} = useContext(AppContext);
    const[values,setValues] = useState({firstName:"",lastName:""})
    
    const handleChange = (e) => {
        setValues({
            ...values, 
            [e.target.name] : e.target.value
        })
    };

    const handleClearValues = () => {
        setValues({firstName:"",lastName:""})
    };
   
    const handleSubmitAdd = (e) => {
        e.preventDefault(); // sayfanın yenilenmesini engeller
        setList([...employees,
            {
                id:employees.length,
                ...values
            }
        ])
        setValues({firstName:"",lastName:""})
    };
    
    return(
        <div>
            <h2>EmployeeAdd</h2>
            <form onSubmit={handleSubmitAdd}>
                <p>
                    <input 
                    id="firstName" 
                    name="firstName" 
                    type="text" 
                    placeholder="First Name" 
                    onChange={handleChange}
                    value = {values?.firstName} />
                </p>
                <p>
                    <input 
                    id="lastName"  
                    name="lastName" 
                    type="text" 
                    placeholder="Last Name"
                    onChange={handleChange}
                    value = {values?.lastName}/>
                </p>
                <button type="submit">Add</button>
                <button onClick={handleClearValues} type ="button" >Clear</button>
            </form>
        </div>
           
            
    )
}

export default EmployeeAdd;