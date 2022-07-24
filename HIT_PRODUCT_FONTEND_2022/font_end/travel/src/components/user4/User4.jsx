import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import './User4.scss';
import { dataUser4 } from './dataUser4';
const User4 = () => {
  const [check, setCheck] = useState(false);
  return (
    <div className='user4'>
      <div className='menu'>
        <Link to='/user'><p >Quản lí tài khoản</p></Link>
        <Link to='/user2'><p >Đơn Phòng</p></Link>
        <Link to='/user3'><p>Bài viết</p></Link>
        <Link to='/user4'><p id='user'>Đánh giá</p></Link>
        <Link to='/user5'><p>Khuyến mại</p></Link>
      </div>

      <div className='info-user4'>
        <div >
          {dataUser4.map((item, index) => {
            return (
              <div key={index} className='info-cmtt '>
                <img className='avt' src={item.avt} alt="" />
                <div className='people-in4'>
                  <div className='name'>
                    <p>{ item.name}</p>
                  </div>
                  <div className='date'>
                    <i class="fa-solid fa-pen"></i>
                    <p>{item.date }</p>
                  </div>
                  <div className='premiumTwin'>
                    <i class="fa-solid fa-bed"></i>
                    <p >Premium Twin</p>
                  </div>
                  <div className='time'>
                  <i class="fa-solid fa-calendar-days"></i>
                    <p>{item.time }</p>
                  </div>
                </div>
                <div className='evaluatee-cmt'>
                  <p className='evaluatee'>{item.evaluate }</p>
                  <p className='coment'>{item.coment }</p>
                </div>
              
              </div>
            )
          })}
        </div>
        <div className='user4-right '>
            <div className='kebab' onClick={() => setCheck(!check)}><i class="fa-solid fa-ellipsis"></i></div>
              {check && <div className='fix' >
                <div className='pen'>
                  <i class="fa-solid fa-pen-clip"></i>
                  <p>Chỉnh sửa bài viết</p>
                </div>
                <div className='delete'>
                  <i class="fa-solid fa-trash-can"></i>
                  <p>Xóa bài viết</p>
                </div>
              </div>}
          </div>
        
      </div>


    </div>
  )
}

export default User4