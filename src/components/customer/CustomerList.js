import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, []
    )


    return (
        <section className="customers">
            {
                customers.map(customer => {
                    return (
                        <div key={customer.id} className="customer" id={`customer--${customer.id}`}>
                            <div className="customer__name">
                                Name: {customer.name}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
