import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button, Input } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useAxios } from '../Hooks/useAxios'
import { useNavigate } from 'react-router-dom'

function Create() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function createStudent(body) {
    return useAxios().post('/students', body)
  }

  const mutation = useMutation({
    mutationFn: createStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] })
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        navigate(-1)
        setAge('')
        setName('')
        setSurname('')
      }, 800)
    }

  })

  function handleAddSubmit(e) {
    e.preventDefault();
    const data = { name, surname, age }
    mutation.mutate(data)
  }


  return (
    <div className='p-6'>
      <h2 className='text-[30px] font-bold'>Create New Student</h2>
      <form autoComplete='off' onSubmit={handleAddSubmit} className='w-[500px] mt-5 space-y-4'>
        <Input required value={name} onChange={(e) => setName(e.target.value)} size='large' type='text' placeholder='Enter Name' />
        <Input required value={surname} onChange={(e) => setSurname(e.target.value)} size='large' type='text' placeholder='Enter Surname' />
        <Input required value={age} onChange={(e) => setAge(e.target.value)} size='large' type='number' placeholder='Enter Age' />
        <Button className='w-[100px]' type='primary' htmlType='submit'>{isLoading ? <span className="loader !scale-[0.3]"></span> : "Add"}</Button>
      </form>
    </div>
  )
}

export default Create
