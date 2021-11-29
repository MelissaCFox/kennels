import React, { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    const history = useHistory()

    useEffect(() => {
        getLocations()
    }, [])


    return (
        <article className="locations">

            <button className="btn btn-primary" onClick={() => {
                history.push("/locations/create")
            }}>
                Open a New Location
            </button>
            <h2>Locations</h2>

            {
                locations.map(location => {
                    return (
                        <>
                            <Link to={`/locations/detail/${location.id}`} key={location.id}>
                                {location.name}
                            </Link>
                            <div className="location-employeeNum">Number of Employees: {location.employees.length}</div>
                            <div className="location-animalNum">Number of Current Animal Guests: {location.animals.length}</div>
                        </>
                    )
                })
            }

        </article>
    )
}