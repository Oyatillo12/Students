import React, { useEffect, useState } from 'react'
import { useAxios } from '../Hooks/useAxios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import CustomTable from '../components/CustomTable'
import { DeleteOutlined, EditOutlined, EllipsisOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

function Students() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('')

  const mutation = useMutation({
    mutationFn: (id) => useAxios().delete(`/students/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] })
    },
  })
  
  function handleMoreClick(id) {
    navigate(`/student/${id}`)
    queryClient.invalidateQueries(['singleStudent'])
  }

  function getData() {
    return useAxios().get(`/students`).then(res => {
      return res.data.map((item, index) => {
        item.key = index + 1;
        item.action = <div className='flex cursor-pointer items-center space-x-6'>
          <EllipsisOutlined onClick={() => handleMoreClick(item.id)} className='!scale-[1.5]' />
          <EditOutlined className='scale-[1.5]' />
          <DeleteOutlined onClick={() => mutation.mutate(item.id)} className='scale-[1.5]' />
        </div>
        return item;
      })
    })
  }

  function handleSearchChange(e){
    setIsLoading(true)
    setTimeout(() => {
      setSearch(e.target.value);
      setIsLoading(false)
    }, 800)
  }


  const { data = [] } = useQuery({
    queryKey: ['students'],
    queryFn: getData,
  })

  const filteredSearch = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.surname.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='px-6 py-5 '>
      <div className='mt-10 mb-6 flex items-center justify-between'>
        <h2 className='text-[30px] font-bold'>Students</h2>
        <Button onClick={() => navigate('/add-student')} htmlType='button' size='large' type='primary'>Add Student</Button>
      </div>
      <Input onChange={handleSearchChange} className='w-[70%] mb-6' addonBefore={<SearchOutlined />} size='large' allowClear placeholder='Search by Name' />
      <CustomTable loading={isLoading} data={search == '' ? data : filteredSearch} />
    </div>
  )
}

export default Students
