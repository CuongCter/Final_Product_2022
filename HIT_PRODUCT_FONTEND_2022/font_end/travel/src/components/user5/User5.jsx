import React from 'react'
import { Link } from 'react-router-dom'
import './User5.scss'
const User5 = () => {
  return (
    <div className='user5'>
      <div className='menu'>
        <Link to='/user'><p >Quản lí tài khoản</p></Link>
        <Link to='/user2'><p >Đơn Phòng</p></Link>
        <Link to='/user3'><p>Bài viết</p></Link>
        <Link to='/user4'><p >Đánh giá</p></Link>
        <Link to='/user5'><p id='user'>Khuyến mại</p></Link>
      </div>
      <div className='info-user5'>
        <div className='icon-user5'><img src="https://seami.vn/wp-content/uploads/2019/05/Close_Icon_Dark-512.png" alt="" /></div>
        <p>Bạn không có khuyến mại nào</p>
      </div>
    </div>
  )
}

export default User5