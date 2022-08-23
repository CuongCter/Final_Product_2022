import React, { useEffect, useState } from 'react'
import './BookRoom.scss'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Stack, Rating } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBedPulse, faBoltLightning, faLocation, faLocationDot, faMoneyBill, faNotEqual, faNoteSticky, faUmbrellaBeach, faUserGroup, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { dataBestSeller } from '../cardSale/data';
import numberWithCommas from '../../utils/number'
import storageService from '../../services/storage.service';
import { useFormik } from 'formik';
import { API } from '../../modules/Auth/const/const.api';
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
const BookRoom = (values) => {

    const navigate = useNavigate()
    const idUser = storageService.get('id')
    const handleBookRoom = () => {
        const isLogin = storageService.get('isLogin')
        if (isLogin === 'true') {
            // navigate('/login')
            // window.history.replaceState({}, "/");
            // storageService.remove('isLogin')
            alert("Bạn đã đặt phòng thành công");
        } else {
            alert("Bạn cần đăng nhập ");
            navigate('/login')
        }
    }
    const { id } = useParams();
    useEffect(() => {
    }, []);
    const [arr, setArr] = useState([]);
    const [hotel, setHotel] = useState([])
    const fetchData = () => {
        return axios.get(`https://api-travell.herokuapp.com/api/v1/rooms/${id}`)
            .then((response) => {
                // console.log(response.data);
                setArr(response.data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
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
    // const formik = useFormik({
    //     initialValues: {
    //         dateS: '',
    //         monthS: '',
    //         yearS: '',
    //         dateE: '',
    //         monthE: '',
    //         yearE: '',


    //     },
    //     BookRoom,
    //     onSubmit: async (values) => {
    //         try {
    //             // console.log(values);
    //             // userService.resgister(values).then(data => {
    //             //     console.log(data)
    //             // })
    //             const result = await axios.post(`${API}${idUser}/${id}`, {
    //                 startedTime: values.yearS + values.monthS + values.dateS,
    //                 endedTime: values.yearE + values.monthE + values.dateE
    //             })

    //             if (result.status === 200) {
    //                 alert('OK')

    //             }
    //         }
    //         catch (err) {
    //             console.log(err);

    //         }

    //     },
    // });

    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const handleCheckInDate = (date) => {
        setCheckInDate(date);
        setCheckOutDate(null);
        console.log(date);
    };

    const handleCheckOutDate = (date) => {
        setCheckOutDate(date);
        console.log(date);
    };


    return (
        <div>
            <div className='containerBookRoom'>
                <div className='bookRoom'>
                    <div className='bookRoom_put'>
                        <div className='bookRoom_put__title flex pl-[24px] pt-[24px]'>
                            <div className='mr-4'>
                                <img src={dataBestSeller[id].linkImg} alt="" className='w-[112px] h-[112px] ' />
                            </div>
                            <div>
                                <h1 className='font-bold text-[20px]'>{arr.name}</h1>
                                <Rating className='pl-2'
                                    name="size-small" defaultValue={5} size="small" />
                                <div className='flex'>
                                    <button className='mr-1 mb-2 h-6 w-14 bg-slate-200 border-neutral-100 text-pink-400'><FontAwesomeIcon icon={faUmbrellaBeach} /> 9.4</button>
                                    <h3 className='text-[14px] pt-1'>Tuyệt vời (104 đánh giá)</h3>
                                </div>
                                <div className='mr-2 text-[14px] font-semibold'><FontAwesomeIcon icon={faLocationDot} className='text-[18px] font-semibold pr-1' />{hotel.address}</div>
                            </div>
                        </div>
                        <div className='bookRoom_put__date pt-[24px] pl-[24px]'>
                            <h1 className='text-[24px] font-bold '>Thông tin đặt phòng</h1>
                            <div className="input-container mt-5">
                                <div>
                                    <label className='font-bold text-[20px]'>Ngày bắt đầu</label>
                                    <DatePicker
                                        selected={checkInDate}
                                        minDate={new Date()}
                                        onChange={handleCheckInDate}
                                        className='border-solid border-2 border-green-500 rounded'
                                    />
                                </div>
                                <div>
                                    <label className='font-bold text-[20px]'>Ngày kết thúc</label>
                                    <DatePicker
                                        selected={checkOutDate}
                                        minDate={checkInDate}
                                        onChange={handleCheckOutDate}
                                        className='border-solid border-2 border-green-500 rounded'
                                    />
                                </div>
                            </div>
                            {checkInDate && checkOutDate && (
                                <div className="summary mt-3">
                                    <p className='text-blue-400 font-semibold'>
                                        Bạn đã dự kiến đặt phòng từ <span className='text-green-500'>{moment(checkInDate).format("LL")}</span>  đến {" "}
                                        <span className='text-green-500'>{moment(checkOutDate).format("LL")}</span>
                                        .
                                    </p>
                                </div>
                            )}
                            {/* <h1 className='text-[14px] font-bold mt-6 mr-2 mb-2'>Ngày bắt đầu</h1>
                            <div className='flex bookRoom_put__date-time'>
                                
                                <input type="text" name="Ngày" id="dateS"
                                    onChange={formik.handleChange}
                                    placeholder='Ngày' className='pl-2' />
                                <input type="text" name="Tháng" id="monthS"
                                    onChange={formik.handleChange}
                                    placeholder='Tháng' className='pl-2' />
                                <input type="text" name="Ngày" id="yearS"
                                    onChange={formik.handleChange}
                                    placeholder='Năm' className='pl-2' />
                            </div>
                            <h1 className='text-[14px] font-bold mt-2 mr-2 mb-2'>Ngày kết thúc</h1>
                            <div className='flex bookRoom_put__date-time'>
                                
                                <input type="text" name="Ngày" id="dateE"
                                    onChange={formik.handleChange}
                                    placeholder='Ngày' className='pl-2' />
                                <input type="text" name="Tháng" id="monthE"
                                    onChange={formik.handleChange}
                                    placeholder='Tháng' className='pl-2' />
                                <input type="text" name="Ngày" id="yearE"
                                    onChange={formik.handleChange}
                                    placeholder='Năm' className='pl-2' />
                            </div> */}
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
                            {/* <form onSubmit={formik.handleSubmit}>
                                <button type='submit' className='w-[173px] h-[44px] bg-[#FC5981] border-none hover:ease-in  hover:duration-300 hover:text-black hover:bg-white  font-bold ' onClick={handleBookRoom}>Đặt phòng</button>
                            </form> */}
                            <button type='submit' className='w-[173px] h-[44px] bg-[#FC5981] border-none hover:ease-in  hover:duration-300 hover:text-black hover:bg-white  font-bold ' onClick={handleBookRoom}>Đặt phòng</button>
                            <h1 className='text-[13px] mt-3'>Bằng cách nhấn nút Thanh toán, bạn đồng ý với</h1>
                            <h1 className='text-[13px]'><span >Điều kiện và điều khoản</span> của chúng tôi</h1>
                        </div>

                    </div>
                    <div className='bookRoom_info'>
                        <div className='bookRoom_info__element'>
                            <div>
                                <h1 className='bg-[#FC5981] text-white w-[110px] pl-2 rounded absolute'>Giảm giá 10%</h1>
                                <img src={dataBestSeller[id].linkImg} alt="" />
                            </div>
                            <h1 className='font-bold mb-3 mt-5 text-[20px]'>{arr.name}</h1>
                            <div className='flex mb-4'>
                                <h1 className='mr-5'><FontAwesomeIcon icon={faUserGroup} className='mr-1' />{arr.description}</h1>
                                <h1> <FontAwesomeIcon icon={faLocationDot} className='font-semibold ' />Hướng biển</h1>
                            </div>
                            <h1><FontAwesomeIcon icon={faBed} className='mr-3' />{arr.type}</h1>
                            <h1 className='text-green-500'><FontAwesomeIcon icon={faUtensils} className='mr-5' />Bữa sáng miễn phí</h1>
                            <h1 className='text-green-500'><FontAwesomeIcon icon={faWifi} className='mr-4' />Wifi miễn phí</h1>
                            <h1><FontAwesomeIcon icon={faNoteSticky} className='mr-4' />Chính sách cho khách hàng và trẻ em</h1>
                            <h1 className='text-yellow-500'><FontAwesomeIcon icon={faBoltLightning} className='mr-5' />Xác nhận nhanh</h1>
                            <h1 className='text-green-500'><FontAwesomeIcon icon={faMoneyBill} className='mr-3' />Mã MEGASALE giảm thêm 5% đã được áp dụng</h1>
                            <div className='mt-3 w-[432px] h-[55px] text-[#FC5981] bg-pink-100 pl-[26px] pr-[26px] text-sm pt-1'>Đừng bỏ lỡ! Chúng tôi chỉ còn 2 phòng có giá này. Hãy đặt ngay!</div>
                        </div>
                        <div className='bookRoom_info__buy'>
                            <div className='flex justify-between border-b-[2px]'>
                                <h1>1 phòng x 1 đêm</h1>
                                <div>
                                    <div className='flex'>
                                        <h1 className='bg-[#FC5981] text-white pl-1 pr-1 rounded mr-2'>-10%</h1>
                                        <h1 className='line-through '>{arr.price}đ</h1>
                                    </div>
                                    <h1 className='font-bold flex-e grid justify-items-end'>{arr.price * 0.9}.đ</h1>
                                </div>
                            </div>
                            <div className='flex justify-between py-3 border-b-[2px]'>
                                <h1>Thuế và phí dịch vụ khách sạn</h1>
                                <h1>253.533đ</h1>
                            </div>
                            <div className='flex justify-between pt-2 '>
                                <div>
                                    <h1 className='font-bold'>Tổng tiền</h1>
                                    <h1>Đã bao gồm thuế , phí, VAT</h1>
                                </div>

                                <h1 className='font-bold'>{arr.price * 0.9 + 253533}.đ</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookRoom