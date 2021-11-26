import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    },[])


    return (
        <article className="locations">
            <h2>Locations</h2>

            {
                locations.map(location => {
                    return (
                        <div key={location.id} className="location" id={`location--${location.id}`}>
                            <div className="location__name">
                                Facility: {location.name}
                            </div>
                            <div className="location__address">
                                Address: {location.address}
                            </div>

                        </div>
                    )
                })
            }

        </article>
    )
}