import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getAllEmployees().then((response)=>{
        setEmployees(response.data);
        console.log(response.data)
    }).catch(error =>{
        console.log(error)
    })
  }, [])
  
  return (
    <div className="container">
      <h2 className="text-center">List Employees</h2>
      <Link to='/addEmployee' className="btn btn-primary">Add Employee</Link>
      <table className="table ">
        <thead>
          <th>Employee ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email ID</th>
        </thead>
        <tbody>
            { employees.map(
                employee =>
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                </tr>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
