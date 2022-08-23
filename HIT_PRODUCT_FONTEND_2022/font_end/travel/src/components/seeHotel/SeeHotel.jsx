import React from 'react'
import './SeeHotel.scss'
import { Stack, Rating } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationDot, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { dataSeeHotel } from './dataSeeHotel'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'
import { dataHotel } from '../cardHotel/dataHotel'

const SeeHotel = () => {
  const { id } = useParams();
  useEffect(() => {
  }, []);
  const [hotel, setHotel] = useState([]);

  const fetchHotel = () => {
    return axios.get(`https://api-travell.herokuapp.com/api/v1/hotels/${id}`)
      .then((response) => {
        console.log(response);
        setHotel(response.data)
      })
  }

  useEffect(() => {
    fetchHotel()
  }, [])
  return (
    <>

      <div className='see-hotel'>
        <div className="hotel">
          <p className="name-hotel">{hotel.name}</p>
          <Rating className='pl' name="size-small" defaultValue={5} size="small" />
          <div className="info-hotel ">
            <div className='info-hotel-left '>
              <div className="assess">
                <button className='mr-1 mb-2 h-6 w-14 bg-slate-200 border-neutral-100 text-pink-400'><FontAwesomeIcon icon={faUmbrellaBeach} /> {dataHotel[id - 1].point}</button>
                <p className='assess-amount'>{dataHotel[id - 1].cmt}</p>
              </div>
              <div className="address mb-2">
                <div className='mr-2 text-[15px]'><FontAwesomeIcon icon={faLocationDot} /></div>
                <h className="address-hotel font-semibold">{hotel.address}</h>
              </div>
            </div>
            <div className="info-hotel-right ">
              <div className='price-choose'>
                <p className="price" ><p className='price-old'>1.519.384đ</p> <span className='discount'>-29%</span> </p>
                <p className='price-new'>1.093.007đ</p>

              </div>
              <div className='mt-2'>
                <a className='choose' href="#chooseRoom">Chọn Phòng</a>
              </div>
            </div>
          </div>

          <div className="imgs-hotel  grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3 " >
            <div className="cols-span-1">
              <img className='imgs-hotel-1' src={dataHotel[id - 1].linkImg} alt="" />
            </div>
            <div className="grid xl:grid-cols-2 xl:cols-span-1 md:grid-cols-2 md:cols-span-1 sm:grid-cols-1 sm:cols-span-1 gap-2">
              {dataSeeHotel.map((item, index) => {
                return (
                  <div key={index} className='img-hotel col-span-1 '>
                    <img className='img-hotel-full' src={item.imgRom} alt="" />
                  </div>
                )
              })}
            </div>
          </div >

          <p className='general-assess-name'>Đánh giá</p>
          <div className='general-assess '>
            <div className='number'>
              <div className='assess-number'>
                <p className='as'>9.4</p>
                <p className='ass'>Tuyệt vời</p>
              </div>
              <div className='overview'>
                <p>Vị trí </p>
                <p>Giá cả</p>
                <p>Phục vụ</p>
                <p>Vệ sinh</p>
                <p>Tiện ích</p>
              </div>

            </div>
            <div className='star'>
              <div className='quality'>
                <p>Rất tuyệt vời</p>
                <p>Tuyệt vời</p>
                <p>Hài lòng</p>
                <p>Đáp ứng</p>
                <p>Trung bình</p>
              </div>
              <div>
                <p><Rating className='pl' name="size-small" defaultValue={5} size="small" /></p>
                <p><Rating className='pl' name="size-small" defaultValue={5} size="small" /></p>
                <p><Rating className='pl' name="size-small" defaultValue={5} size="small" /></p>
                <p><Rating className='pl' name="size-small" defaultValue={5} size="small" /></p>
                <p><Rating className='pl' name="size-small" defaultValue={5} size="small" /></p>
              </div>
            </div>
            <div className='cmt'>
              <p className='comment'>Tổng quan về khách sạn tuyệt vời</p>
              <p className='share'>{hotel.description}</p>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default SeeHotel

