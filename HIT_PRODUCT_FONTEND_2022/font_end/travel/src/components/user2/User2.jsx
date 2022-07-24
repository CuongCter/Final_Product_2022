import { ListItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { dataUser2 } from './dataUser2'
import './User2.scss'
const User2 = () => {
  return (
    <div className='user2'>
      <div className='menu'>
        <Link to='/user'><p >Quản lí tài khoản</p></Link>
        <Link to='/user2'><p id='user'>Đơn Phòng</p></Link>
        <Link to='/user3'><p>Bài viết</p></Link>
        <Link to='/user4'><p>Đánh giá</p></Link>
        <Link to='/user5'><p>Khuyến mại</p></Link>
      </div>
      
      <div className='info-room'>
        {dataUser2.map((item, index) => {
          return (
            <div key={index} className="all-info-romm" >
              <div className='img-room'>
                <div><img src={item.img} alt="" /></div>
                <div><h6>{item.ten }</h6></div>
              </div>
              <div className='timeNhan'>
                <h6>Nhận phòng</h6>
                <p>{item.timeNhan }</p>
              </div>
              <div className='timeTra'>
                <h6>Trả phòng</h6>
                <p>{item.timeTra }</p>
              </div>
              <div className='all-money'>
                <h6>Tổng tiền</h6>
                <p>{item.money }</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='but'><button className='w-[120px] h-[44px] bg-[#FC5981] border-none hover:ease-in  hover:duration-300 hover:text-pink-500 hover:bg-stone-100  font-bold mt-7 '>Xem tất cả</button></div>
              
    </div>
  )
}

export default User2