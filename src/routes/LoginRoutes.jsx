import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../Hooks/usePath'
import { Login, Register } from '../pages'

function LoginRoutes() {
    return (
        <Routes>
            <Route path={PATH.login} element={<Login />} />
            <Route path={PATH.register} element={<Register />} />
        </Routes>
    )
}

export default LoginRoutes
