
import { Link } from 'react-router-dom';
import './User3.scss';
import { dataUser3 } from './dataUser3';
import React, { useState } from 'react'

const User3 = () => {
  const [check, setCheck] = useState(false);
  
  return (
    <div className='user3'>
      <div className='menu'>
        <Link to='/user'><p >Quản lí tài khoản</p></Link>
        <Link to='/user2'><p >Đơn Phòng</p></Link>
        <Link to='/user3' ><p id='user'>Bài viết</p></Link>
        <Link to='/user4'><p>Đánh giá</p></Link>
        <Link to='/user5'><p>Khuyến mại</p></Link>
      </div>

      <div className='userr'>
        <p>Bài viết gần đây</p>
        
        <div className='user-posts'>
          <div>
            {dataUser3.map((item, index) => {
              return (
                <div key={index} >
                  <div className='blog-right  '>
                      <img className='imgCXG mb-4' src={item.imgCXG} alt="" />
                      <div>
                        <p className='theme-blog ml-2'>{item.title}</p>
                        <div className='line-offer '>
                          <div className='nameDS ml-2'>{item.nameDS}</div>
                          <div className='icon-time ml-5'>
                            <i class="fa-regular fa-clock"></i>
                            <p className='time-ac ml-1'>{item.time}</p>
                          </div>
                          <div className='icon-ac ml-5'>
                            <i class="fa-regular fa-comment"></i>
                            <p className='ml-1'>{item.amountCmt}</p>
                          </div>
                        </div>
                        <p className='cmt-blog ml-2'>{item.cmt}</p>
                      </div>
                    </div>
                </div>
              )
            })}
          </div>

          <div className='hide'>
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
    </div>
  )
}

export default User3