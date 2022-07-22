import React from 'react'
import './ChooseRoom.scss'
import { dataChooseRoom } from './dataChooseRoom'
import { dataChooseAssess } from './dataChooseAssess'
import { Link } from 'react-router-dom'
const ChooseRom = () => {
  return (
    <div id='chooseRoom'>
      <div>
        <p className='name-room'>Chọn Phòng</p>
        <div className='container'>
          <div className='container-left '>
            <div className='gridd '>
              <img className='img-above' src="http://pxphoto.com/files/pxphoto.com/images/slides/hotel-slide-img%20(1).jpg" alt="" />
              {/* <div className='container-img grid xl:grid-rows-1 grid-flow-col'>
                {dataChooseRoom.map((item, index) => {
                  return (
                    <div key={index} className="imgg">
                      <img src={item.imgg} alt="" />
                    </div>
                  )
                })}
              </div> */}
              <div className='container-img flex '>
                {dataChooseRoom.map((item, index) => {
                  return (
                    <div key={index} className="imgg mr-1">
                      <img src={item.imgg} alt="" />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="convenient">
              <p className='theme-1'>Tiện nghi</p>
              <div className='line-1'>
                <p className='line-1-1'>Vòi hoa sen</p>
                <p className='line-1-2'>Điện thoại</p>
              </div>
              <div className="line-2">
                <p className='line-2-1'>Minibar</p>
                <p className='line-2-2'>Không hút thuốc</p>
              </div>
              <div ><p className="line-3">Tivi màn hình phẳng</p></div>
            </div>
          </div>

          <div className='container-right'>
            <p>Premium Twin</p>
            <div className="above">
              <div className='above-all'>
                <div className='above-1' >
                  <i class="fa-solid fa-user-group"></i>
                  <p>Sức chứa tối đa: 3 người</p></div>
                <div className='above-2'>
                  <i class="fa-solid fa-bed"></i>
                  <p>Hai giường đơn</p></div>
                <div className='above-3'>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Hướng biển</p></div>
              </div>
              <div className='above-4'>
                <div className='above-4-1'><i class="fa-solid fa-circle-exclamation"></i></div>
                <p className='above-4-2' >Chỉ còn 2 phòng trống!</p>
              </div>
            </div>
            <div className="below">
              <div className="select">
                <p>Lựa chọn 1</p>
                <div className='icon-1'>
                  <div className='icon-11'><i class="fa-duotone fa-mug-saucer"></i></div>
                  <p>Bữa sáng miễn phí</p></div>
                <div className='icon-2'>
                  <div className='icon-21'><i class="fa-thin fa-wifi"></i></div>
                  <p>Wifi miễn phí</p></div>
                <div className='icon-3'>
                  <div className='icon-31'><i class="fa-regular fa-circle-exclamation"></i></div>
                  <p>Chính sách hành khách và trẻ em</p></div>
                <div className='icon-4'>
                  <div className='icon-41'><i class="fa-duotone fa-bolt-lightning"></i></div>
                  <p>Xác nhận nhanh</p></div>
                <div className='icon-5'>
                  <div className='icon-51'><i class="fa-regular fa-clock"></i></div>
                  <p>CHỈ TRONG 2 GIỜ!!! Mã <span className='sp'>MEGASALE</span> giảm thêm 5% đã được áp dụng, giảm 94.000đ. Giảm giá cực shock!</p></div>
                <div className='icon-6'>
                  <div className='icon-61'><i class="fa-solid fa-check"></i></div>
                  <p>An tâm đặt phòng, HelloTravel hỗ trợ xuất hoá đơn nhanh chóng, tiết kiệm thời gian cho bạn.</p></div>
              </div>
              <div className="money">
                {dataChooseAssess.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className='money-discount'> {item.moneyDiscount}</div>
                      <div className='money-old'>{item.moneyOld}</div>
                      <div className='money-new'>{item.moneNew}</div>
                    </div>
                  )
                })}
                <p className='money-date'>/phòng/đêm</p>
                <Link to='/bookRoom'><a className='bookRoom-btn' href="">Đặt phòng</a></Link>

              </div>
            </div>
            <div className='add-select'>
            <a href="">Xem thêm lựa chọn</a>
              

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ChooseRom