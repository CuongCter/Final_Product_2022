import React from 'react'
import Slider from 'react-slick'
import { dataHotel } from './dataHotel'
import './CardHotel.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stack, Rating } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationDot, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const CardHotel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            }
        ]
    };
    return (
        <>
            <div className='slickHotel xl:pl-32 xl:pr-32'>
                <div className='slickHotel_title'>
                    <h1 className='text-2xl pt-1 font-medium '>Khách sạn đang thịnh hành</h1>
                    <h2 className='mt-1 mb-2 font-normal text-base'>Các khách sạn được tìm kiếm & đặt nhiều nhất do HelloTravelHelloTravel đề xuất</h2>
                </div>

                <Slider {...settings} >
                    {dataHotel.map((item) => (
                        <div className='cardHotel'>
                            <div className='cardHotel-item  '>
                                <div className='cardHotel-top '>
                                    <button className='mt-2 ml-2 absolute w-13 bg-pink-400 border-pink-400'>-29%</button>
                                    <img src={item.linkImg} alt={item.title} />
                                    <div></div>
                                    <Link to='/room' className='text-black'>

                                        <h1 className='text-lg pl-2 font-semibold'>{item.title}</h1>

                                    </Link>

                                    <Rating className='pl-2'
                                        name="size-small" defaultValue={5} size="small" />
                                </div>
                                <div className='cardHotel-bottom pl-2  '>
                                    <div className='flex mb-2'>
                                        <div className='mr-2 text-sm'><FontAwesomeIcon icon={faLocationDot} className='text-sm' /></div>
                                        <div><h3 className='text-sm'>{item.location}</h3></div>

                                    </div>
                                    <div className='flex'>
                                        <button className='mr-1 mb-2 h-6 w-14 bg-slate-200 border-neutral-100 text-pink-400'><FontAwesomeIcon icon={faUmbrellaBeach} /> {item.point}</button>
                                        <h3 className=''>{item.cmt}</h3>
                                    </div>
                                    <span className='bg-slate-200 border-neutral-100 rounded-sm text-blue-500 text-sm'>{item.time}</span>
                                    <h2 className="flex justify-end  line-through  font-thin right-0 mr-2 text-sm">{item.price}</h2>
                                    <h1 className='flex justify-end text-base font-medium mr-2 '>{item.pay}</h1>
                                    <div className='flex justify-between border-dashed border-2 rounded-md border-slate-200 mb-3 mt-2 p-1 mr-2'>
                                        <div>
                                            <h2 className='text-sm'>Mã: <span className='text-sm text-blue-400'>DONNHE <button className='bg-blue-500 w-10'>-5%</button></span></h2>
                                        </div>
                                        <div>
                                            <h1 className='font-medium text-lg text-pink-400 '>{item.pay}</h1>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    ))
                    }
                </Slider>


            </div >

        </>
    )
}

export default CardHotel