import axios from 'axios'

const EMPLOYEE_BASE_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService {
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL,employee)
    }
}
export default new EmployeeService();