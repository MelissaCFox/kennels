import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { useHistory } from 'react-router-dom';


export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0
    })

    const history = useHistory()

    const saveEmployee = (event) => {
        event.preventDefault()
        if (employee.name === "" || employee.locationId === 0) {
            window.alert("Please type in a name and assign a location")
        } else {
            const newEmployee = {
                name: employee.name,
                locationId: employee.locationId
            }
            addEmployee(newEmployee)
                .then(() => history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee name" onChange={(event) => {
                        const copy = { ...employee }
                        copy.name = event.target.value
                        setEmployee(copy)
                    }} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to Location</label>
                    <select name="locationId" id="locationId" className="form-control" onChange={(event) => {
                        const copy = { ...employee }
                        copy.locationId = parseInt(event.target.value)
                        setEmployee(copy)
                    }}>
                        <option vaue="0">Select a Location</option>

                        {
                            locations.map(
                                (location) => {
                                    return <option key={`location--${location.id}`} value={location.id}>{location.name}</option>
                                }
                            )
                        }
                    </select>
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={saveEmployee}>Hire Employee</button>

            <button className="btn btn-primary" onClick={() => {
                history.push("/employees")
            }}>
                Cancel
            </button>

        </form>
    )

}