import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"


export const EmployeeDetail = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const [ employee, setEmployee ] = useState({location: {}})

    const {employeeId} = useParams()

    useEffect(() => {
        getEmployees()
         .then(() => {
             const thisEmployee = employees.find(employee => employee.id === parseInt(employeeId)) || {location: {}}
             setEmployee(thisEmployee)
         })
    }, [employeeId])

        return (
            <section className="employee">
                <h3 className="employee__name">Name: {employee.name}</h3>
                <div className="employee__location"> {employee.location.name} </div>
            </section>
        )

}