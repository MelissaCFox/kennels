import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { LocationContext } from "./LocationProvider"


export const LocationDetail = () => {
    const {locations, getLocations} = useContext(LocationContext)
    const [location, setLocation] = useState({})
    const {locationId} = useParams()

    useEffect(() => {
        getLocations()
        .then(() => {
            const thisLocation = locations.find(location => location.id === parseInt(locationId)) || {}
            setLocation(thisLocation)
        })
    }, [locationId])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">Address: {location.address}</div>
            <div className="location__employees">Current Employees:</div>
                <div className="location__employees-list">
                    {
                        location.employees?.map(employee => {
                            return (
                                <div key={employee.id} className="employee">{employee.name}</div>
                            )
                        })
                    }
                </div>
            <div className="locatino__animals">Current Animals: </div>
                <div className="location_animals-list">
                {
                        location.animals?.map(animal => {
                            return (
                                <div key={animal.id} className="animal">{animal.name}</div>
                            )
                        })
                    }
                </div>
        </section>
    )
}