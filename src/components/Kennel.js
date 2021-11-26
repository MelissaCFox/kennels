import React from "react"
import { LocationList } from "./location/LocationList.js"
import "./Kennel.css"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { LocationProvider } from "./location/LocationProvider.js"
import { CustomerProvider } from "./customer/CustomerProvider.js"
import { CustomerList } from "./customer/CustomerList.js"
import { EmployeeProvider } from "./employee/EmployeeProvider.js"
import { EmployeeList } from "./employee/EmployeeList.js"


export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>

        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>

        <EmployeeProvider>
            <EmployeeList />
        </EmployeeProvider>

    </>
)
