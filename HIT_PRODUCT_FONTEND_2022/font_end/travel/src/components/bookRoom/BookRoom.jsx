import React, { useState } from 'react'
import './BookRoom.scss'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Stack, Rating } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBedPulse, faBoltLightning, faLocation, faLocationDot, faMoneyBill, faNotEqual, faNoteSticky, faUmbrellaBeach, faUserGroup, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons'
const BookRoom = () => {

    return (
        <div>
            <div className='containerBookRoom'>
                <div className='bookRoom'>
                    <div className='bookRoom_put'>
                        <div className='bookRoom_put__title flex pl-[24px] pt-[24px]'>
                            <div className='mr-4'>
                                <img src="http://pxphoto.com/files/pxphoto.com/images/slides/hotel-slide-img%20(1).jpg  " alt="" className='w-[109px] h-[112px] ' />
                            </div>
                            <div>
                                <h1 className='font-bold'>Khách Sạn Ibis Styles Vũng Tàu</h1>
                                <Rating className='pl-2'
                                    name="size-small" defaultValue={5} size="small" />
                                <div className='flex'>
                                    <button className='mr-1 mb-2 h-6 w-14 bg-slate-200 border-neutral-100 text-pink-400'><FontAwesomeIcon icon={faUmbrellaBeach} /> 9.4</button>
                                    <h3 className='text-[14px] pt-1'>Tuyệt vời (104 đánh giá)</h3>
                                </div>
                                <div className='mr-2 text-sm'><FontAwesomeIcon icon={faLocationDot} className='text-sm font-semibold pr-1' />117, Đường Thùy Vân, Thành Phố Vũng Tàu, Bà Rịa Vũng Tàu, Việt Nam</div>
                            </div>
                        </div>
                        <div className='bookRoom_put__date pt-[24px] pl-[24px]'>
                            <h1 className='text-[24px] font-bold '>Thông tin đặt phòng</h1>
                            <h1 className='text-[14px] font-bold mt-6 mr-2 mb-2'>Ngày bắt đầu</h1>
                            <div className='flex bookRoom_put__date-time'>
                                <input type="text" placeholder='Ngày' className='pl-2' />
                                <input type="text" placeholder='Tháng' className='pl-2' ></input>
                                <input type="text" placeholder='Năm' className='pl-2' />
                            </div>
                            <h1 className='text-[14px] font-bold mt-2 mr-2 mb-2'>Ngày kết thúc</h1>
                            <div className='flex bookRoom_put__date-time'>
                                <input type="text" placeholder='Ngày' className='pl-2' />
                                <input type="text" placeholder='Tháng' className='pl-2' />
                                <input type="text" placeholder='Năm' className='pl-2' />
                            </div>
                        </div>
                        <div className='bookRoom_put__voucher flex justify-between items-center '>
                            <div className='bookRoom_put__voucher-code '>
                                <h1 className='mb-1 font-bold '>Mã khuyến mại</h1>
                                <input type="text" placeholder='Nhập mã khuyến mại nếu (nếu có) ' className='w-[250px] border-b-[2px]' />
                            </div>
                            <div className='bookRoom_put__voucher-btn'>
                                <button className='w-[113px] h-[44px] bg-[#FC5981] border-none hover:ease-in  hover:duration-300 hover:text-black hover:bg-white  font-bold'>Sử dụng</button>
                            </div>
                        </div>
                        <div className='justify-items-end grid mt-5 bookRoom_put__end'>
                            <button className='w-[173px] h-[44px] bg-[#FC5981] border-none hover:ease-in  hover:duration-300 hover:text-black hover:bg-white  font-bold '>Đặt phòng</button>
                            <h1 className='text-[13px] mt-3'>Bằng cách nhấn nút Thanh toán, bạn đồng ý với</h1>
                            <h1 className='text-[13px]'><span >Điều kiện và điều khoản</span> của chúng tôi</h1>
                        </div>

                    </div>
                    <div className='bookRoom_info'>
                        <div className='bookRoom_info__element'>
                            <div>
                                <h1 className='bg-[#FC5981] w-[110px] pl-2 rounded absolute'>Giảm giá 10%</h1>
                                <img src="http://pxphoto.com/files/pxphoto.com/images/slides/hotel-slide-img%20(1).jpg" alt="" />
                            </div>
                            <h1 className='font-bold mb-3 mt-5'>Premium Twin</h1>
                            <div className='flex'>
                                <h1 className='mr-10'><FontAwesomeIcon icon={faUserGroup} className='mr-3' />Sức chứa tối đa: 3 người</h1>
                                <h1> <FontAwesomeIcon icon={faLocationDot} className=' font-semibold pr-1' />Hướng biển</h1>
                            </div>
                            <h1><FontAwesomeIcon icon={faBed} className='mr-3' />Hai giường đơn</h1>
                            <h1 className='text-green-500'><FontAwesomeIcon icon={faUtensils} className='mr-5' />Bữa sáng miễn phí</h1>
                            <h1 className='text-green-500'><FontAwesomeIcon icon={faWifi} className='mr-4' />Wifi miễn phí</h1>
                            <h1><FontAwesomeIcon icon={faNoteSticky} className='mr-4' />Chính sách cho khách hàng và trẻ em</h1>
                            <h1 className='text-yellow-500'><FontAwesomeIcon icon={faBoltLightning} className='mr-5' />Xác nhận nhanh</h1>
                            <h1 className='text-green-500'><FontAwesomeIcon icon={faMoneyBill} className='mr-3' />Mã MEGASALE giảm thêm 5% đã được áp dụng</h1>
                            <div className='mt-12 w-[432px] h-[55px] text-[#FC5981] bg-pink-100 pl-[26px] pr-[26px] text-sm pt-1'>Đừng bỏ lỡ! Chúng tôi chỉ còn 2 phòng có giá này. Hãy đặt ngay!</div>
                        </div>
                        <div className='bookRoom_info__buy'>
                            <div className='flex justify-between border-b-[2px]'>
                                <h1>1 phòng x 1 đêm</h1>
                                <div>
                                    <div className='flex'>
                                        <h1 className='bg-[#FC5981] pl-1 pr-1 rounded mr-2'>-10%</h1>
                                        <h1 className='line-through '>1.708.101đ</h1>
                                    </div>
                                    <h1 className='font-bold flex-e grid justify-items-end'>1.544.096đ</h1>
                                </div>
                            </div>
                            <div className='flex justify-between py-3 border-b-[2px]'>
                                <h1>Thuế và phí dịch vụ khách sạn</h1>
                                <h1>232.533đ</h1>
                            </div>
                            <div className='flex justify-between pt-2 '>
                                <div>
                                    <h1 className='font-bold'>Tổng tiền</h1>
                                    <h1>Đã bao gồm thuế , phí, VAT</h1>
                                </div>

                                <h1 className='font-bold'>1.776.602đ</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookRoom