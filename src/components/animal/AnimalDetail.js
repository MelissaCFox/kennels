import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams } from "react-router-dom"

export const AnimalDetail = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const [ animal, setAnimal ] = useState({ location: {}, customer: {} })

    const {animalId}  = useParams()


    useEffect(() => {

        getAnimals()
        .then(() => {

            const thisAnimal = animals.find(a => a.id === parseInt(animalId)) || { location: {}, customer: {} }
            setAnimal(thisAnimal)

        })
    }, [animalId])


    return (
    <section className="animal">
        <h3 className="animal__name">Name: { animal.name }</h3>
        <div className="animal__breed">Breed: { animal.breed }</div>
        <div className="animal__owner">Customer: { animal.customer.name }</div>
        <div className="animal__location">Location: { animal.location.name }</div>
    </section>
    )
}

