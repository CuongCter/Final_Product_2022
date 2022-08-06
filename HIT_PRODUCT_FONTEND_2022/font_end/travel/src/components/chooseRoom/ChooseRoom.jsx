import React, { useEffect, useState } from 'react'
import './ChooseRoom.scss'
import './ChooseRoom2.scss'
import { dataChooseRoom } from './dataChooseRoom'
import { dataChooseAssess } from './dataChooseAssess'
import { Link, useParams } from 'react-router-dom'
import { dataBestSeller } from '../cardSale/data'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faWifi, faNoteSticky, faBoltLightning, faMoneyBill, faUserGroup, faBed, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { dataHotel } from '../cardHotel/dataHotel'
import numberWithCommas from '../../utils/number'
const ChooseRom = () => {
  const { id } = useParams();
  useEffect(() => {
  }, []);


  const [hotel, setHotel] = useState([]);

  const fetchHotel = () => {
    return axios.get(`https://api-travell.herokuapp.com/api/v1/hotels/${id}`)
      .then((response) => {
        // console.log(response.data);
        setHotel(response.data)
      })
  }
  useEffect(() => {
    fetchHotel()
  }, [])
  const [arr, setArr] = useState([]);
  let a = 3 * (id - 1)
  let b = a + 3
  const fetchData = () => {
    return axios.get(`https://api-travell.herokuapp.com/api/v1/rooms/`)
      .then((response) => {
        // console.log(response.data);
        setArr(response.data.slice(a, b))
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const [img, setImg] = useState([]);

  const fetchImg = () => {
    return axios.get(`https://api-travell.herokuapp.com/api/v1/imgs`)
      .then((response) => {
        // console.log(response.data);
        setImg(response.data)
      })
  }

  useEffect(() => {
    fetchImg()
  }, [])

  return (
    <div id='chooseRoom'>
      <div>
        <p className='name-room'>Chọn Phòng</p>
        {/* <div className='container'>
          <div className='container-left '>
            <div className='gridd '>
              <img className='img-above' src="http://pxphoto.com/files/pxphoto.com/images/slides/hotel-slide-img%20(1).jpg" alt="" />
              <div className='container-img grid xl:grid-rows-1 grid-flow-col'>
                {dataChooseRoom.map((item, index) => {
                  return (
                    <div key={index} className="imgg">
                      <img src={item.imgg} alt="" />
                    </div>
                  )
                })}
              </div>
              <div className='container-img flex '>
                {dataChooseRoom.map((item, index) => {
                  return (
                    <div key={index} className="imgg mr-1">
                      <img src={item.imgg} alt="" />
                    </div>
                  )
                })}
                <div className="imgg mr-1">
                      <img src={dataBestSeller.img} alt="" />
                    </div>
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
            <h className='mb-2 text-[20px] font-semibold'>{arr.name}</h>
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
                  <div className='icon-11'><FontAwesomeIcon icon={faUtensils} className='mr-5' /></div>
                  <p>Bữa sáng miễn phí</p></div>
                <div className='icon-2'>
                  <div className='icon-21'><FontAwesomeIcon icon={faWifi} className='mr-4' /></div>
                  <p>Wifi miễn phí</p></div>
                <div className='icon-3'>
                  <div className='icon-31'><FontAwesomeIcon icon={faNoteSticky} className='mr-4' /></div>
                  <p>Chính sách hành khách và trẻ em</p></div>
                <div className='icon-4'>
                  <div className='icon-41'><FontAwesomeIcon icon={faBoltLightning} className='mr-5' /></div>
                  <p>Xác nhận nhanh</p></div>
                <div className='icon-5'>
                  <div className='icon-51 mr-3'><i class="fa-regular fa-clock"></i></div>
                  <p>CHỈ TRONG 2 GIỜ!!! Mã <span className='sp'>MEGASALE</span> giảm thêm 5% đã được áp dụng, giảm 94.000đ. Giảm giá cực shock!</p></div>
                <div className='icon-6'>
                  <div className='icon-61 mr-3'><i class="fa-solid fa-check"></i></div>
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
                < div>
                  <div className='money-discount '>-10%</div>
                  <div className='money-old'>{arr.price}</div>
                  <div className='money-new'>{arr.price}</div>
                </div>
                <p className='money-date'>/phòng/đêm</p>
                <Link to='/bookRoom'><a className='bookRoom-btn' href="">Đặt phòng</a></Link>

              </div>
            </div>
            <div className='add-select'>
              <a href="">Xem thêm lựa chọn</a>


            </div>
          </div>

        </div> */}
        {arr && arr.map((item, index) => (

          <div className='room'>
            <div className='room-pic'>
              <div className='room-pic__img'>
                <img src={dataBestSeller[index + a].linkImg} alt="" />
              </div>
              <div className='room-pic__list'>
                <div className='room-pic__list_i'>
                  <img src={dataBestSeller[index + a].linkImg} alt="" />
                </div>
                <div className='room-pic__list_i'>
                  <img src={dataBestSeller[index + a + 3].linkImg} alt="" />
                </div>
                <div className='room-pic__list_i'>
                  <img src={dataBestSeller[index + a + 6].linkImg} alt="" />
                </div>
              </div>
              <div className='mt-[16px]'>
                <span className='text-blue-400 '>Tiện nghi</span>
              </div>
              <div className='room-pic__exten '>
                <div className='room-pic__exten_item'>
                  Vòi hoa sen
                </div>
                <div className='room-pic__exten_item'>
                  Điện thoại
                </div>
                <div className='room-pic__exten_item'>
                  Minibar
                </div>
                <div className='room-pic__exten_item'>
                  Tivi màn hình phẳng
                </div>
                <div className='room-pic__exten_item'>
                  Tủ lạnh
                </div>
              </div>
            </div>
            <div className='room-info'>
              <div className='room-info__head'>
                <h1 className='font-bold mt-2 mb-2 text-[20px]'>{item.name}</h1>
                <div className='room-info__head_icon'>
                  <div className='room-info__head_icon-per w-[50%]' >
                    <FontAwesomeIcon icon={faUserGroup} /> {item.description}
                  </div>
                  <div className='room-info__head_icon-bed' >
                    <FontAwesomeIcon icon={faBed} /> {item.type}
                  </div>
                  <div className='room-info__head_icon-view' >
                    <FontAwesomeIcon icon={faLocationDot} /> Tầm nhìn hướng biến
                  </div>
                </div>
              </div>
              <div className='room-info__main'>
                <div className='room-info__main_services pt-4'>

                  <div className='icon-1 mt-2'>
                    <div className='icon-11'><FontAwesomeIcon icon={faUtensils} className='mr-5' /></div>
                    <p >Bữa sáng miễn phí</p></div>
                  <div className='icon-2 mt-2'>
                    <div className='icon-21'><FontAwesomeIcon icon={faWifi} className='mr-4 ' /></div>
                    <p>Wifi miễn phí</p></div>
                  <div className='icon-3 mt-2'>
                    <div className='icon-31'><FontAwesomeIcon icon={faNoteSticky} className='mr-4' /></div>
                    <p>Chính sách hành khách và trẻ em</p></div>
                  <div className='icon-4 mt-2'>
                    <div className='icon-41'><FontAwesomeIcon icon={faBoltLightning} className='mr-5' /></div>
                    <p>Xác nhận nhanh</p></div>
                  <div className='icon-5 mt-2'>
                    <div className='icon-51 mr-3'><i class="fa-regular fa-clock"></i></div>
                    <p>CHỈ TRONG 2 GIỜ!!! Mã <span className='sp'>MEGASALE</span> giảm thêm 5% đã được áp dụng. Giảm giá cực shock!</p></div>
                  <div className='icon-6 mt-2'>
                    <div className='icon-61 mr-3'><i class="fa-solid fa-check"></i></div>
                    <p>An tâm đặt phòng, HelloTravel hỗ trợ xuất hoá đơn nhanh chóng, tiết kiệm thời gian cho bạn.</p></div>
                </div>
                <div className='room-info__main_book'>
                  <div className='mt-[55px]'>
                    <span className='bg-[#FC5981] rounded-lg px-2 py-1 text-white'>-10%</span>
                    <h2 className='mt-1 line-through'>{item.price}đ</h2>
                    <h1 className='font-bold'>{item.price * 0.9}đ</h1>
                    <h1>/phòng/đêm</h1>
                    <Link to={`/bookRoom/${item.id}`}>
                      <button className='bg-[#FC5981] mt-2 rounded-lg border-none px-4 py-2 hover:ease-in  hover:duration-200'>Đặt phòng</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='room-info__foot'>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default ChooseRom