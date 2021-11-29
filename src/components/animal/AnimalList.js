import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const AnimalList = () => {
    const { getAnimals, animals } = useContext(AnimalContext)

    const history = useHistory()

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>

            <div className="animals">
                {
                    animals.map(animal => <Link to={`/animals/detail/${animal.id}`} key={animal.id}>
                          { animal.name }
                        </Link>
                    )
                }
            </div>
        </>
    )
}
