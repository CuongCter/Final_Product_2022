import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { dataTopPosts } from './dataTopPosts'
import './TopPosts.scss'


const TopPosts = () => {
  const { id } = useParams();
  useEffect(() => {
  }, []);
  const [location, setLocation] = useState([]);
  const fetchData = () => {
    return axios.get(`https://api-travell.herokuapp.com/api/v1/locations/`)
      .then((response) => {
        // console.log(response.data);
        setLocation(response.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="top-posts">
      <p className="top-posts-theme ">Các bài viết hàng đầu</p>
      <p className="top-posts-note">Các bài viết về địa điểm du hình hàng đầu do HelloTravel đề xuất</p>
      <div className="grid ">
        {location && location.map((item, index) => {
          return (
            <div className=" item-content grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
              <img className='img-postss' src={dataTopPosts[index].img2} alt="" />
              <div className="posts ">
                <p className="title2">{dataTopPosts[index].title2}</p>
                <p className="text2 mt-2">{item.description}</p>
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

export default TopPosts
