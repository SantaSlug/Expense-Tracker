import React, { useEffect, useState } from 'react'
import { Balance } from './Balance'
import { IncomeExpenses } from './IncomeExpenses'
import { TransactionList } from './TransactionList'
import { AddTransaction } from './AddTransaction'

export const Home = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("id")) setShow(true)
    })
    return (
        <div className='bg-gray-100'>
            {
                show ?
                    <div>
                        <Balance />
                        <IncomeExpenses />
                        <TransactionList />
                        <AddTransaction />
                    </div> :
                    <>
                        <div className="text-center text-2xl py-24">
                            Create account or LogIn to continue
                        </div>
                    </>
            }
        </div>
    )
}
