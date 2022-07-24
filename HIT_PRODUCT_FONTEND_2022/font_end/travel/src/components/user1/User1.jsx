import React from 'react'
import { Link } from 'react-router-dom'
import { dataUser1 } from './dataUser1'
import './User1.scss'
const User1 = () => {
  return (
    <div className='user1'>
      <div className='menu'>
        <Link to='/user'><p id='user'>Quản lí tài khoản</p></Link>
        <Link to='/user2'><p>Đơn Phòng</p></Link>
        <Link to='/user3'><p>Bài viết</p></Link>
        <Link to='/user4'><p>Đánh giá</p></Link>
        <Link to='/user5'><p>Khuyến mại</p></Link>
      </div>

      <div className='tvt'>
          {dataUser1.map((item, index) => {
            return (
              <div key={index} className='all-info' >
                <div> <img className='img-avt' src={item.img} alt="" /> </div>
                <div className='info-user'>
                  <h5>Họ tên</h5>
                  <p>{ item.hoten}</p>
                  <h6>Email</h6>
                  <p>{ item.email}</p>
                  <h6>Số điện thoại</h6>
                  <p>{ item.sdt}</p>
                  <h6>Địa chỉ</h6>
                  <p>{item.address}</p>
                  <div><button className='w-[210px] h-[44px] bg-[#FC5981] border-none hover:ease-in  hover:duration-300 hover:text-pink-500 hover:bg-stone-100  font-bold mt-7'>Lưu lại</button></div>
              
                </div>
                
              </div>
            )
          })}  
        
      </div>
    </div>
  )
}

export default User1