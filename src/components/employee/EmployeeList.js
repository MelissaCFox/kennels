import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
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
                employees.map(employee => <Link to={`/employees/detail/${employee.id}`} key={employee.id}>
                { employee.name }
              </Link>)
            }
        </section>
        </>

    )
}