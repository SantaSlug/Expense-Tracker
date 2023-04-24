import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

export const Header = () => {
  const [name, setName] = useState("")
  useEffect(() => {
    localStorage.getItem("id") && loadUser()
  }, [])

  const loadUser = async () => {
    await axios.post("http://localhost:5001/api/v1/auth/user", { id: localStorage.getItem("id") }).then((res) => {
      console.log(res)
      setName(res.data.name)
    }).catch((res) => {
      console.log(res)
    })
  }
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link to="/" className="text-white flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {
              name ? <div className="flex-shrink-0 ">
                {name}
              </div> : <h2>Expense tracker</h2>
            }
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
              </div>
            </div>
          </Link>
          <div className="hidden sm:block sm:ml-6">
            {
              !localStorage.getItem("id") ?
                <div className="flex space-x-4">
                  <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">LOGIN</Link>
                  <Link to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">SIGNUP</Link>
                </div> : <button
                  onClick={() => {
                    localStorage.clear()
                    window.location.reload()
                  }}
                  to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">LOGOUT</button>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}
