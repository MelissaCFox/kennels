import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { EmployeeContext } from "./EmployeeProvider"



export const EmployeeList = () => {
    const history = useHistory()
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, []
    )

    return (
        <>
        <button className="btn btn-primary" onClick={() => {
            history.push("/employees/create")
        }}>Hire New Employee</button>

        <section className="employees">
            <h2>Current Employees</h2>
            {
                employees.map(employee => {
                    return (
                        <div key={employee.id}
                        className="employee" id={`employee--${employee.id}`}>
                            <div className="employee_name">
                                Name: {employee.name}
                                Location: {employee.location.name}
                            </div>
                        </div>
                    )
                })
            }

        </section>
        </>

    )
}