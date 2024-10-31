import { Button } from 'antd'
import React, { useState } from 'react'
import StudentsImg from '../assets/images/students.png'
import { useFormik } from 'formik'
import { LoginSchema } from '../validation/LoginSchema'
import { Link, useNavigate } from 'react-router-dom'


function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
  localStorage.setItem('users', JSON.stringify(users))
  const navigate = useNavigate()
  const { values, errors, handleSubmit, handleChange, handleBlur, touched } = useFormik({
    initialValues: {
      username: '',
      useremail: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (data) => {
      setIsLoading(true)

      if(users.some(user => user.username === data.username)) { 
        alert('Username already exists')
        setIsLoading(false)
        return
      }
      else {
        setTimeout(() => {
          navigate('/')
          setIsLoading(false)
        },1000)
        setUsers([...users, data])
      }
    },

  })



  return (
    <div className='flex'>
      <div className='bg-[#1C1D21] px-[90px] h-[100vh] overflow-y-auto w-[45%] '>
        <h2 className='text-[48px]  mb-3 mt-[100px] text-white font-bold'>Sign up</h2>
        <form onSubmit={handleSubmit} className='w-[500px] mb-12 p-4 flex flex-col ' >
          <label className='block mb-5 relative pb-2' htmlFor='username'>
            <input autoComplete='off' value={values.username} onChange={handleChange} onBlur={handleBlur} className={`${errors.username && touched.username ? "border-red-500 placeholder:text-red-500" : "border-gray-400"} border-b-2 text-white  bg-transparent p-3 w-full outline-none  text-[18px]`} placeholder={`Enter Username`} type='text' id='username' name='username' />
            {touched.username && errors.username && <p className='text-red-500 text-[14px] absolute bottom-[-15px]'>{errors.username}</p>}
          </label>
          <label className='block mb-5 relative pb-2' htmlFor='useremail'>
            <input autoComplete='off' value={values.useremail} onChange={handleChange} onBlur={handleBlur} className={`${errors.useremail && touched.useremail ? "border-red-500 placeholder:text-red-500" : "border-gray-400"} border-b-2 text-white  bg-transparent p-3 w-full outline-none  text-[18px]`} placeholder={`Enter Email`} type='email' id='useremail' name='useremail' />
            {touched.useremail && errors.useremail && <p className='text-red-500 text-[14px] absolute bottom-[-15px]'>{errors.useremail}</p>}
          </label>
          <label className='block mb-8 relative pb-2' htmlFor='password'>
            <input autoComplete='off' value={values.password} onChange={handleChange} onBlur={handleBlur} className={`${errors.password && touched.password ? "border-red-500 placeholder:text-red-500" : "border-gray-400"} border-b-2 text-white  bg-transparent p-3 w-full outline-none  text-[18px]`} placeholder={`Enter Password`} type='password' id='password' name='password' />
            {touched.password && errors.password && <p className='text-red-500 text-[14px] absolute bottom-[-15px]'>{errors.password}</p>}
          </label>
          <Button size='large' type='primary' className='!bg-[#9C6FE4]' htmlType='submit' >{isLoading ? <span className="loader !scale-[0.5]"></span> : "Sign up"}</Button>
        </form>
        <div className='space-x-10 flex items-center '>
          <p className='text-white opacity-50 text-[16px] '>have an account?</p>
          <Link to={'/login'} className='block text-center text-[16px] text-white w-[100px] py-3 rounded-lg bg-[#333437]'>Log in</Link>
        </div>
      </div>
      <div className='bg-[#925FE2] h-[100vh] overflow-y-auto w-[55%]'>
        <div className='pl-[100px] pr-[80px] mt-[20px]'>
          <h2 className='text-white mb-5 text-[75px] leading-[70px] '><span className='font-bold'>Welcome to</span> student portal</h2>
          <p className='text-[16px] mb-[37px] text-[#EEEEEE] font-medium mt-3'>Sign up to access your account</p>
        </div>
        <img className='mx-auto' src={StudentsImg} alt="students img" width={537} height={328} />
      </div>
    </div>
  )
}

export default Register
