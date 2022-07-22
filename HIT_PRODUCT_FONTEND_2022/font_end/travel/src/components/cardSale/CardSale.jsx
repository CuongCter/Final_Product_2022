import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { dataBestSeller } from './data';
import './CardSale.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stack, Rating } from '@mui/material'
import { imgs } from '../assets/img'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationDot, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


const Card = () => {
    const [arr, setArr] = useState([]);

    const fetchData = () => {
        return axios.get("https://api-travell.herokuapp.com/api/v1/hotels")
            .then((response) => {
                // console.log(response.data);
                setArr(response.data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(arr)
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
    console.log(dataBestSeller)

    return (
        <>
            <div className='slickSale xl:pl-32 xl:pr-32 sm:pl-5'>
                <div className='slickSale_img pt-3 pb-5 ml-2'>
                    <img style={{ height: 64, marginTop: 15 }} src={imgs.imgSale} alt="" />
                </div>

                <Slider {...settings} >

                    {arr && arr.map((item, index) => (

                        <div className='cardSale'>
                            <div className='cardSale-item '>
                                <div className='cardSale-top '>

                                    <img src={dataBestSeller[index].linkImg} />
                                    <h1 className='text-lg pl-2 font-semibold'>{item.name}</h1>

                                    <Rating className='pl-2'
                                        name="size-small" defaultValue={5} size="small" />
                                </div>
                                <div className='carSale-bottom pl-2  '>
                                    <div className='flex '>
                                        <div className='mr-2 text-sm'><FontAwesomeIcon icon={faLocationDot} /></div>
                                        <div><h3 className='text-sm'>{item.address}</h3></div>

                                    </div>
                                    <div className='flex'>
                                        <button className='mr-1 mb-2 h-6 w-14 bg-slate-200 border-neutral-100 text-pink-400'><FontAwesomeIcon icon={faUmbrellaBeach} /> {item.point}</button>
                                        <h4 className=''>{item.cmt}</h4>
                                    </div>
                                    <span className='bg-slate-200 text-sm border-neutral-100 rounded-sm text-blue-500'>{item.time}</span>
                                    <div className='flex justify-between '>
                                        <button className='mt-7 h-10 p-1 bg-orange-400 rounded-500 border-orange-400'>Đã bán: {item.bought}</button>
                                        <div className='mr-4'>
                                            <h3 className="justify-end line-through mt-5">{item.price}</h3>
                                            <h1 className='flex justify-end text-lg font-medium text-pink-400'>???</h1>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    ))
                    }
                </Slider>
                <div className="text-center mt-7 text-xl ">
                    <button className="px-4 py-2 mt-2 text-pink-400 back bg-pink-100 border-pink-400 hover:ease-in  hover:duration-300 hover:text-blue hover:bg-white">Xem thêm</button>
                </div>

            </div >

        </>

    )
}

export default Card