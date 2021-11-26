import { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"


export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, []
    )

    return (
        <section className="employees">
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

    )
}