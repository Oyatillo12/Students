import React from 'react'
import { useAxios } from '../Hooks/useAxios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import CustomTable from '../components/CustomTable'
import { DeleteOutlined, EditOutlined, EllipsisOutlined,  SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

function Students() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (id) => useAxios().delete(`/students/${id}`),
    onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ['students'] })
    },
    onError: (error) => {
      console.error("Error deleting student:", error);
    }
  })

  function handleMoreClick(id) {
    navigate(`/student/${id}`)
    queryClient.invalidateQueries(['singleStudent'])
  }
  function handleDelete(id) {
    mutation.mutate(id)
  }


  function getData() {
    return useAxios().get('/students').then(res => {
      return res.data.map((item, index) => {
        item.key = index + 1;
        item.action = <div className='flex cursor-pointer items-center space-x-6'>
          <EllipsisOutlined onClick={() => handleMoreClick(item.id)} className='!scale-[1.5]' />
          <EditOutlined className='scale-[1.5]' />
          <DeleteOutlined onClick={() => handleDelete(item.id)} className='scale-[1.5]' />
        </div>
        return item;
      })
    })
  }

  const { data } = useQuery({
    queryKey: ['students'],
    queryFn: getData,
  })

  return (
    <div className='px-6 py-5 '>
      <div className='mt-10 mb-6 flex items-center justify-between'>
        <h2 className='text-[30px] font-bold'>Students</h2>
        <Button onClick={() => navigate('/add-student')} htmlType='button' size='large' type='primary'>Add Student</Button>
      </div>
      <Input className='w-[70%] mb-6' addonBefore={<SearchOutlined />} size='large' allowClear placeholder='Search by Name' />
      <CustomTable data={data} />
    </div>
  )
}

export default Students
