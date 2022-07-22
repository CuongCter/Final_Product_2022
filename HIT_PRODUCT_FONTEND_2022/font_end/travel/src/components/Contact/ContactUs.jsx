import React from 'react'
import './ContactUs.scss'

const ContactUs = () => {
    return (
        <div className='container_contact'>
            <div className='contact'>
                <div className='contact_title'>
                    <h1 className='pt-12 text-2xl font-bold'>Liên hệ với chúng tôi</h1>
                    <h5 className='mt-2 mb-2'>Liên hệ ngay để nhận được tư vấn từ chúng tôi</h5>
                </div>
                <div className='contact_main'>

                    <div className='contact_main__input'>
                        <h1 className='font-bold mb-3'>Thông tin liên hệ</h1>
                        <div className='grid grid-cols-2 gap-4'>
                            <input type="text" className='w-[312px] h-[44px] pl-2' placeholder='Nhập họ và tên' />
                            <input type="text" className='w-[312px] h-[44px] pl-2' placeholder='Nhập địa chỉ' />
                            <input type="text" className='w-[312px] h-[44px] pl-2' placeholder='Nhập email' />
                            <input type="text" className='row-span-2 w-[312px] h-[104px] pl-2 pb-[62px]' placeholder='Thông điệp của bạn' />
                            <input type="text" className='w-[312px] h-[44px] pl-2' placeholder='Nhập số điện thoại' />
                        </div>
                        <div>
                            <button className='w-[113px] h-[44px] bg-[#FC5981] border-none hover:ease-in  hover:duration-300 hover:text-pink-500 hover:bg-stone-100  font-bold mt-7'>Gửi ngay</button>
                        </div>
                    </div>
                    <div className='contact_main__info'>
                        <h1 className='font-bold'>Chi tiết liên hệ</h1>
                        <h1><span className='font-bold'>Điện thoại: </span>0869001573</h1>
                        <h1><span className='font-bold'>Email: </span>HelloTravelHelloTravel@gmail.com</h1>
                        <h1><span className='font-bold'>Website: </span>hellotravel.vn</h1>
                        <h1><span className='font-bold'>Địa chỉ: </span>Phường Minh Khai, Quận Bắc Từ Liêm, <br /> thành phố Hà Nội </h1>
                    </div>
                </div>

            </div>

            <div className='map mt-12'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6262.119705819874!2d105.73998937126896!3d21.053539534421596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1655916780782!5m2!1svi!2s"
                    width="100%"
                    height="524px"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />
            </div>
        </div>
    )
}

export default ContactUs;