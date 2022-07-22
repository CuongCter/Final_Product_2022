import React from 'react'
import { dataRecentPosts } from './dataRecentPosts'

import './RecentPosts.scss'

const recentPosts = () => {
  return (
      <div className="recent-posts">
        <p className="recent-posts-theme">Bài viết đã xem gần đây</p>
        <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
          {dataRecentPosts.map((item, index) => {
              return (
                <div key={index} className=" item-content-bot">
                  <div className="general-posts">
                    <img className='img-posts' src={item.img2} alt="" />
                    <p className="title-2">{item.title2}</p>
                  </div>
                </div>
              )
            })}
        </div>
      
      </div>
  )
}

export default recentPosts