import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"



export const LocationForm = () => {
    const { addLocation } = useContext(LocationContext)

    const [location, setLocation] = useState({
        name: "",
        address: ""
    })

    const history = useHistory()

    const saveLocation = () => {
        if (location.name === "" || location.address === "") {
            window.alert(`Please type in a name and address`)
        } else {
            const newLocation = {
                name: location.name,
                address: location.address
            }
            addLocation(newLocation)
                .then(() => history.push("/locations"))
        }
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location Name</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name" onChange={(event) => {
                        const copy = { ...location }
                        copy.name = event.target.value
                        setLocation(copy)
                    }} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="adress">Location Address</label>
                    <input type="text" id="address" required autoFocus className="form-control" placeholder="Location address" onChange={(event) => {
                        const copy = { ...location }
                        copy.address = event.target.value
                        setLocation(copy)
                    }} />
                </div>
            </fieldset>
  

            <button className="btn btn-primary" onClick={saveLocation}>Open New Location</button>

            <button className="btn btn-primary" onClick={() => {
                history.push("/locations")
            }}>
                Cancel
            </button>

        </form>
    )


}