import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dataUser1 } from './dataUser1'
import './User1.scss'
const User1 = () => {
  const { username } = useParams();
  useEffect(() => {
  }, []);
  const [user, setUser] = useState([]);

  const fetchUser = () => {
    return axios.patch(`https://api-travell.herokuapp.com/api/v1/users/${username}`)
      .then((response) => {
        // console.log(response.data);
        setUser(response.data)
      })
  }

  console.log(username);
  useEffect(() => {
    fetchUser()
  }, [])
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
        {/* {dataUser1.map((item, index) => {
          return (
            <div key={index} className='all-info' >
              <div> <img className='img-avt' src={item.img} alt="" /> </div>
              <div className='info-user'>
                <h5>Họ tên</h5>
                <p>{item.hoten}</p>
                <h6>Email</h6>
                <p>{item.email}</p>
                <h6>Số điện thoại</h6>
                <p>{item.sdt}</p>
                <h6>Địa chỉ</h6>
                <p>{item.address}</p>
                <div><button className='w-[210px] h-[44px] bg-[#FC5981] border-none hover:ease-in  hover:duration-300 hover:text-pink-500 hover:bg-stone-100  font-bold mt-7'>Lưu lại</button></div>

              </div>

            </div>
          )
        })} */}

        <div className='all-info' >
          <div> <img className='img-avt' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1cLph9YNyTYiTN2tlwUHeoX5fxVAkqPuUg&usqp=CAU' alt="" /> </div>
          <div className='info-user'>
            <h5>Họ tên</h5>
            <p>{user.fullName}</p>
            <h6>Email</h6>
            <p>{user.email}</p>
            <h6>Số điện thoại</h6>
            <p>{user.phoneNumber}</p>
            <h6>Địa chỉ</h6>
            {/* <p>{user.address}</p> */}
            <div><button className='w-[210px] h-[44px] bg-[#FC5981] border-none hover:ease-in  hover:duration-300 hover:text-pink-500 hover:bg-stone-100  font-bold mt-7'>Lưu lại</button></div>

          </div>

        </div>


      </div>
    </div>
  )
}

export default User1