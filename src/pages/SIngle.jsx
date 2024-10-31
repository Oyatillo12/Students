import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAxios } from '../Hooks/useAxios'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

function SIngle() {
  const navigate = useNavigate()
  const { id } = useParams()


  const { data } = useQuery({
    queryKey:['singleStudent'],
    queryFn: () => useAxios().get(`/students/${id}`).then(res => res.data)
  })
  return (
    <div className='p-6'>
      <Button size='large' onClick={() => navigate(-1)} icon={<ArrowLeftOutlined />} iconPosition='start'>Back</Button>
      <div className='w-[300px] bg-slate-200 rounded-lg p-4 shadow-lg mt-8'>
        <h2 className='text-[20px] flex items-center mb-2 font-bold'>Student Details</h2>
        <div className='flex items-center justify-between'>
          <strong className='text-[18px]'>Surname:</strong>
          <p className='text-[18px] mb-2'> {data?.surname}</p>
        </div>
        <div className='flex items-center justify-between'>
          <strong className='text-[18px]'>Name:</strong>
          <p className='text-[18px] mb-2'> {data?.name}</p>
        </div>
        <div className='flex items-center justify-between'>
          <strong className='text-[18px]'>Age:</strong>
          <p className='text-[18px] mb-2'> {data?.age}</p>
        </div>
      </div>
    </div>
  )
}

export default SIngle
