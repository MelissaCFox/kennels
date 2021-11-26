import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        getAnimals()
    }, []
    )


    return (
        <section className="animals">
            <h2>Current Animal Friends</h2>
            {
                animals.map(animal => {
                    return (
                        <div key={animal.id} className="animal" id={`animal--${animal.id}`}>
                            <div className="animal__name">
                                Name: {animal.name}
                            </div>
                            <div className="animal__breed">
                                Breed: {animal.breed}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
