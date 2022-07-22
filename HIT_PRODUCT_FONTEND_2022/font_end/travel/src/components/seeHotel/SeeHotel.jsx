import React from 'react'
import './SeeHotel.scss'
import { Stack, Rating } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationDot, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { dataSeeHotel } from './dataSeeHotel'



const SeeHotel = () => {
  return (
    <div className='see-hotel'>
      <div className="hotel">
        <p className="name-hotel">Khách Sạn Ibis Styles Vũng Tàu</p>
        <Rating className='pl' name="size-small" defaultValue={5} size="small" />
        <div className="info-hotel ">
          <div className='info-hotel-left '>
            <div className="assess">
              <button className='mr-1 mb-2 h-6 w-14 bg-slate-200 border-neutral-100 text-pink-400'><FontAwesomeIcon icon={faUmbrellaBeach} /> 9.4</button>
              <p className='assess-amount'>Tuyệt vời (104 đánh giá)</p>
            </div>
            <div className="address">
              <div className='mr-2 text-sm'><FontAwesomeIcon icon={faLocationDot} className='text-sm' /></div>
              <p className="address-hotel">117, Đường Thùy Vân, Thành Phố Vũng Tàu, Bà Rịa Vũng Tàu, Việt Nam</p>   
            </div>
          </div>
          <div className="info-hotel-right ">
            <div className='price-choose'>
              <p className="price" ><p className='price-old'>1.519.384đ</p> <span className='discount'>-29%</span> </p>
              <p className='price-new'>1.093.007đ</p>
            </div>
            <div >
              <a className='choose' href="#chooseRoom">Chọn Phòng</a>
            </div>
          </div>
        </div>

        <div className="imgs-hotel  grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3 " >
          <div className="cols-span-1">
            <img className='imgs-hotel-1' src="https://poliva.vn/wp-content/uploads/2019/07/thiet-ke-tien-sanh-khach-san-1.jpg" alt="" />
          </div>
          <div className="grid xl:grid-cols-2 xl:cols-span-1 md:grid-cols-2 md:cols-span-1 sm:grid-cols-1 sm:cols-span-1 gap-2">
            {dataSeeHotel.map((item, index) => {
              return (
                <div key={index} className='img-hotel col-span-1 '>
                  <img className='img-hotel-full' src={item.imgRom } alt="" />
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
            <p className='comment'>Tuyệt vời, trải nghiệm tuyệt vời</p>
            <p className='share'>Giúp đỡ tận tình, đồ ăn ngon, đặc biệt món spagetti ngon cực kì. Dù ban đầu có chút xíu trục trặc về vấn đề nhận phòng, nhưng nhân viên khách sạn đã giúp đỡ giải quyết vấn đề nhanh chóng...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeeHotel

