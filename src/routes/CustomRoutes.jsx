import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Students, Create, Single, Home, Login, Register, Profile } from '../pages'
import { PATH } from '../Hooks/usePath'

function CustomRoutes() {
  return (
    <Routes>
      <Route path={PATH.login} element={<Login />} />
      <Route path={PATH.register} element={<Register />} />
      <Route path={PATH.home} element={<Home />} />
      <Route path={PATH.students} element={<Students />} />
      <Route path={PATH.addStudent} element={<Create />} />
      <Route path='/student/:id' element={<Single />} />
      <Route path={PATH.profile} element={<Profile />} />

    </Routes>
  )
}

export default CustomRoutes
