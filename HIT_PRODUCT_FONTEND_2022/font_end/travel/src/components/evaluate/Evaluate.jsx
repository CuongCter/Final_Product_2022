import React from 'react'
import { dataEvaluate } from './dataEvaluate'
import './Evaluate.scss'

const evaluate = () => {
  return (
    <div className='evaluate'>
      <p className='theme-evaluate'>Đánh giá</p>
      <p className='theme-evaluate-small'>100% đánh giá từ khách hàng đặt phòng trên Hello Travel</p>
      <div className='infoE'>
        <div className='infoE-name'>Ảnh người dùng đánh giá</div>
        {dataEvaluate.map((item, index) => {
          return (
            <div key={index} className="imgEvaluate">
              <img className='imgE' src={item.imgE} alt="" />
            </div>
          )
        })}
      </div>
      <div className='people-el'>
        {dataEvaluate.map((item, index) => {
          return (
            <div key={index} className='info-cmt '>
              <img className='avt' src={item.avt} alt="" />
              <div className='people-info'>
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
              <div className='evaluatee-coment'>
                <p className='evaluatee'>{item.evaluate }</p>
                <p className='coment'>{item.coment }</p>
              </div>
              <div className='point-cmt'>
                <p className='point'>{item.point}</p>
                <p className='cmtt'>{item.cmt }</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='xt'>
        <p href="">Xem tất cả đánh giá</p>
      </div>
    </div>
  )
}

export default evaluate