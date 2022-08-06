import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dataLocation } from './dataLocation'

import './Location.scss'

const Location = () => {

  return (
    <div>
      <img className='img-joint' src="https://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2017/10/26015647/dich-vu-thiet-ke-banner-du-lich-chuyen-nghiep-tai-ha-noi4.jpg" alt="" />

      <div className="news-posts">
        <p className="theme-name ">Những bài viết mới nhất</p>
        <p className="theme-name-bot mb-1">Các bài viết mới nhất được cập nhật</p>
        <div className="news-list grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
          <div className="news-common col-span-1">
            <img className='img-theme mb-2' src="https://vcdn1-dulich.vnecdn.net/2019/01/08/3-1546914188.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=xXirVjbSSxEnbsk8qLDKuA" alt="" />
            <p className="nav-bar ">“rủ nhau đi trốn” ở hồ đồng mô</p>
          </div>

          <Link to='/location2'>
            <div className="grid xl:grid-cols-1 xl:cols-span-1 md:grid-cols-2 md:cols-span-1 sm:grid-cols-1 sm:cols-span-1">
              {dataLocation.map((item, index) => {
                return (
                  <div key={index} className="new-common-item grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">

                    <img className='img-content mb-3' src={item.img} alt="" />
                    <div className='contentt'>
                      <p className='title mb-1'>{item.title}</p>
                      <p className='text'>{item.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Link>
        </div>
        <div className="text-center mt-10 text-xl ">
          <button className="px-5 py-2 text-pink-400 back bg-white border-pink-400">Xem thêm</button>
        </div>
      </div>




    </div>
  )
}

export default Location