import React from 'react'
import { dataTopPosts } from './dataTopPosts'
import './TopPosts.scss'


const topPosts = () => {
  return (
      <div className="top-posts">
        <p className="top-posts-theme">Các bài viết hàng đầu</p>
        <p className="top-posts-note">Các bài viết về địa điểm du hình hàng đầu do HelloTravel đề xuất</p>
        <div className="grid ">
          {dataTopPosts.map((item, index) => {
            return (
              <div key={index} className=" item-content grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
                <img className='img-postss' src={item.img2} alt="" />
                <div className="posts ">
                  <p className="title2">{item.title2}</p>
                  <p className="text2">{item.text2}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-10 text-xl ">
          <button className="px-5 py-2 text-pink-400 back bg-white border-pink-400">Xem thêm</button>
        </div>
      </div>
  )
}

export default topPosts
