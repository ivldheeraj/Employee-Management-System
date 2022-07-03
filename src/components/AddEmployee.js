import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  let saveEmployee = (e) => {
    e.preventDefault();

    let employee = { firstName, lastName, email };

    EmployeeService.createEmployee(employee).then((response)=>{
        console.log(response.data)
        navigate('/')
    }).catch(error=>{
        console.log(error);
    })
  };

  return (
    <div><br/><br/>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Add Employee </h2>
            <div className="card-body">
              <form>
                <div className="form-group md-2">
                  <label className="form-label">First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter First name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group md-2">
                  <label className="form-label">Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter Last name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group md-2">
                  <label className="form-label"> Email :</label>
                  <input
                    type="text"
                    placeholder="Enter Email ID"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div><br/>
                <button
                  className="btn btn-primary"
                  onClick={(e) => saveEmployee(e)}
                >
                  Submit
                </button> &nbsp;
                <Link to='/' className="btn btn-danger" >Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
