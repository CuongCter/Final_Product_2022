import React from 'react'
import { dataBlogs } from './dataBlogs'

import './Blogs.scss'

const Blogs = () => {
  return (
    <div className="container-blog">
      <b className='title'>Cảm hứng cho những chuyến đi</b>
      <p className='desc-title'>Những câu chuyện thú vị đằng sau mỗi bài viết</p>
      <div className="list-news grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3 ">
        <div className="cols-span-1">

          <div className="general-news"> 
            <img className='img-left' src="https://nld.mediacdn.vn/291774122806476800/2021/5/15/camtrainld4-16210408309941307225501.jpg" alt="" />
            <b className='nav'>Top 5 Điểm Cắm Trại Quanh Hà Nội Siêu Hấp Dẫn Phải Rủ “Cạ Cứng” Đi Ngay</b>
          </div>    
        </div>

        <div className="grid xl:grid-cols-2 xl:cols-span-1 md:grid-cols-1 md:cols-span-1 sm:grid-cols-1 sm:cols-span-1 gap-3">
            {dataBlogs.map((item, index) => {
              return (
                <div key={index} className="general-news item-news col-span-1"> 
                  <img className='img-right' src={item.img} alt="" />
                  <b className='title-right'>{item.title }</b>
                </div>
              )
            })}
        </div>
      </div>

      <div className="text-center mt-10 text-xl ">
        <button className="px-5 py-2 text-pink-400 back bg-white border-pink-400">Xem tất cả</button>
      </div>
    </div>
)}

export default Blogs