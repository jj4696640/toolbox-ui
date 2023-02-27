import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-info" style={{minHeight: "100vh"}}>
        <Outlet />
    </div>
  )
}

export default AuthLayout