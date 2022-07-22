import React from 'react'
import './CardInfo.scss'
import { dataInfo } from './dataInfo'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const CardInfo = () => {

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
            <div className='cardA'>
                <h1 className='font-bold text-3xl pt-5 mb-5'>Gặp gỡ chúng tôi</h1>
                <ul className='card-list '>
                    {dataInfo.map((item) => (
                        <li className='card-list__item'>
                            <div class="card-container ">
                                <div >
                                    <div className='card-container_upper'>
                                        <img src={item.linkAvt} alt="" />
                                    </div>
                                    <div className='card-container_lower'>
                                        <div className='card-container_lower-title'>
                                            <h2 className='font-bold'>{item.name}</h2>
                                        </div>
                                        <div className='card-container_lower-cmt'>
                                            <h3>{item.cmt}</h3>
                                        </div>
                                        <div className='card-container_lower-icon'>

                                            <i class="fa-brands fa-facebook"></i>
                                            <i class="fa-brands fa-instagram-square"></i>
                                            <i class="fa-brands fa-github"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <h1 className='font-medium mt-5'>Trải qua nhiều năm hoạt động, Hello Travel đã không ngừng phát triền kinh doanh trên lĩnh vực Du lịch, nâng cao chất lượng, đa dạng hoá các hạng mục dịch vụ, nhằm mục đích cao nhất là làm hài lòng mọi yêu cầu của Quý khách hàng. Chúng tôi tin tưởng rằng với uy tín đã tạo được trên thị trường, cùng với sự định hướng và chỉ đạo của Ban lãnh đạo Công ty TNHH Du Lịch và Dịch Vụ HelloTravel luôn đem đến cho khách hàng những sản phẩm, dịch vụ đạt chất lượng tốt nhất với giá cả cạnh tranh. Nguyên tắc hoạt động kinh doanh của HelloTravel là: “Sự hài lòng của Quý khách luôn là tiêu chí hàng đầu của HelloTravel
                    Cùng với đội ngũ cán bộ, nhân viên đầy kinh nghiệm, chúng tôi hi vọng HelloTravel đã và sẽ là địa chỉ lựa chọn các dịch vụ du lịch đáng tin cậy hàng đầu của Quý khách.</h1>
            </div >
            <div className='cardMoblieInfo'>
                <Slider {...settings} className="slickInfo">
                    {dataInfo.map((item) => (
                        <div class="moblie_card-container ">
                            <div >
                                <div className='moblie_card-container_upper'>
                                    <img src={item.linkAvt} alt="" />
                                </div>
                                <div className='moblie_card-container_lower'>
                                    <div className='moblie_card-container_lower-title'>
                                        <h2 className='font-bold'>{item.name}</h2>
                                    </div>
                                    <div className='moblie_card-container_lower-cmt'>
                                        <h3>{item.cmt}</h3>
                                    </div>
                                    <div className='moblie_card-container_lower-icon'>

                                        <i class="fa-brands fa-facebook"></i>
                                        <i class="fa-brands fa-instagram-square"></i>
                                        <i class="fa-brands fa-github"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>

    )
}

export default CardInfo