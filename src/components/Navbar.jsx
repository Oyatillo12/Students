import React, { useState } from 'react';
import {HomeOutlined, ProfileOutlined, UsergroupDeleteOutlined, UserOutlined,} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { PATH } from '../Hooks/usePath';
const items = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: <NavLink to={PATH.home}>Dashboard</NavLink>,
  },
  {
    key: '2',
    icon: <UsergroupDeleteOutlined />,
    label: <NavLink to={PATH.students}>Students</NavLink>,
  },
  {
    key: '3',
    icon: <UserOutlined />,
    label: <NavLink to={PATH.profile}>Profile</NavLink>,
  },
 ];
const Navbar = () => {

  return (
    <div className='h-[100vh] w-[20%]  bg-[#001529] overflow-y-auto' >
            <h2 className='text-white text-[25px] text-center font-bold my-6'>Students</h2>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};
export default Navbar;