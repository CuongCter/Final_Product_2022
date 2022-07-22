import React from 'react'
import { dataLocation } from './dataLocation'

import './Location.scss'

const Location = () => {
  return (
    <div>
      <img className='img-joint' src="https://vcdn-dulich.vnecdn.net/2022/02/26/Sun-World-Ba-Na-Hills-10-7665-1645841708.jpg" alt="" />
      
      <div className="news-posts">
        <p className="theme-name">Những bài viết mới nhất</p>
        <p className="theme-name-bot">Các bài viết mới nhất được cập nhật</p>
        <div className="news-list grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
          <div className="news-common col-span-1">
            <img className='img-theme' src="https://vcdn1-dulich.vnecdn.net/2019/01/08/3-1546914188.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=xXirVjbSSxEnbsk8qLDKuA" alt="" />
            <p className="nav-bar">“rủ nhau đi trốn” ở hồ đồng mô</p>
          </div>
          <div className="grid xl:grid-cols-1 xl:cols-span-1 md:grid-cols-2 md:cols-span-1 sm:grid-cols-1 sm:cols-span-1">
            {dataLocation.map((item, index) => {
              return (
                <div key={index }className="new-common-item grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
                  <img className='img-content' src={item.img} alt="" />
                  <div className='contentt'>
                    <p className='title'>{item.title}</p>
                    <p className='text'>{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="text-center mt-10 text-xl ">
          <button className="px-5 py-2 text-pink-400 back bg-white border-pink-400">Xem thêm</button>
        </div>
      </div>
      

      
        
    </div>
  )
}

export default Location