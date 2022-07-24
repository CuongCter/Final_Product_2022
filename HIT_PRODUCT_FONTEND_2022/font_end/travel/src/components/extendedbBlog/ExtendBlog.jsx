import React from 'react'
import { dataExtendBlog } from './dataExtendBlog'
import {dataInsideBlog} from './dataInsideBlog'
import { dataBloggg } from './dataBloggg'
import './ExtendBlog.scss'

const ExtendBlog = () => {
  return (
    <div className='extend-blog'>
      <div className='extend-blog-img'>
        <div><img src="https://dulichkhampha24.com/wp-content/uploads/2019/11/tiem-banh-coi-xay-gio-da-lat-4.jpg" alt="" /></div>
        
        {/* <div className="img-on-top grid xl:grid-cols-4 col-span- md:grid-cols-4  sm:grid-cols-2 gap-3">
          {dataInsideBlog.map((item, index) => {
            return (
              <div key={index} >
                <img className='img-top' src={item.imgTheme} alt="" />
              </div>
            )
          })}
        </div> */}
        
        
        <div className='img-top'>
          <div>
            <div><img src="https://khachsandalat.net/wp-content/uploads/2018/11/b%E1%BB%A9c-t%C6%B0%E1%BB%9Dng-v%C3%A0ng-t%E1%BA%A1i-c%E1%BB%91i-xay-gi%C3%B3.jpg" alt="" /></div>
            <div><img src="https://khachsandalat.net/wp-content/uploads/2018/11/b%E1%BB%A9c-t%C6%B0%E1%BB%9Dng-v%C3%A0ng-t%E1%BA%A1i-c%E1%BB%91i-xay-gi%C3%B3.jpg" alt="" /></div>
          </div>
          <div>
            <div><img src="https://khachsandalat.net/wp-content/uploads/2018/11/b%E1%BB%A9c-t%C6%B0%E1%BB%9Dng-v%C3%A0ng-t%E1%BA%A1i-c%E1%BB%91i-xay-gi%C3%B3.jpg" alt="" /></div>
            <div><img src="https://khachsandalat.net/wp-content/uploads/2018/11/b%E1%BB%A9c-t%C6%B0%E1%BB%9Dng-v%C3%A0ng-t%E1%BA%A1i-c%E1%BB%91i-xay-gi%C3%B3.jpg" alt="" /></div>
          </div>
        </div>

        <div><img src="https://idulich.vn/wp-content/uploads/2022/04/84958218_2501153626679297_7844026294926834733_n.jpg" alt="" /></div>
        <div><img src="https://dulichkhampha24.com/wp-content/uploads/2019/11/tiem-banh-coi-xay-gio-da-lat.png" alt="" /></div>
      </div>

      
      <div className='extend-content'>
        <div className='extend-content-top'>
          <div className='extend-content-img'><img src="https://cafefcdn.com/203337114487263232/2021/7/14/photo-4-1626231295840218962594.jpg" alt="" /></div>
          <div className="blur-frame">
            <p>Review Tiệm Bánh Cối Xay Gió Nơi Check In Hoàn Hảo</p>
            <div>
              <i class="fa-solid fa-location-dot"></i>
              <a className='location-blog' href="">9 Đường Tăng Bạt Hổ, Phường 1, Thành phố Đà Lạt, Lâm Đồng</a>
            </div>
          </div>
        </div>

        <div className="content">
          <div className='content-left'>
            {dataExtendBlog.map((item, index) => {
              return (
                <div key={index} className="container-content">
                  <p className='content-title mb-2 '>{item.title}</p>
                  <p className='content-cmt mb-2'>{item.content}</p>
                  <img className='content-img' src={item.imgOnTop} alt="" />
                </div>
              )
            })}
          </div>

          <div className='map-posts'>
            <div className='mapp '>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124928.4678787029!2d108.3806815773422!3d11.904070186790925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317112fef20988b1%3A0xad5f228b672bf930!2zVHAuIMSQw6AgTOG6oXQsIEzDom0gxJDhu5NuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1656819134004!5m2!1svi!2s"
                width="364px"
                height="472px"
                frameBorder="0"       
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
            
            <div className='notable'>
              <p className='theme-new mb-2'>Bài viết mới đăng</p>
              <div className='theme-new-img-p'>
                <img className='theme-new-img mb-2' src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/anh15-9.png" alt="" />
                {/* <p>Điểm danh những công viên nước hot nhất hè 2022 tại Việt Nam</p> */}
              </div>
              {dataBloggg.map((item, index) => {
                return (
                  <div key={index} className='info-new mb-3'>
                    <img className='imgNew mt-2' src={item.imgNew} alt="" />
                    <div className='ml-2'>
                      <p className='themeNew mt-2'>{item.themeNew}</p>
                      <div className='icon-date mt-2'>
                        <i class="fa-solid fa-pen "></i>
                        <p className='dateNew'>{item.dateNew}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className='add-create'><textarea type="text" className='add-cmt' placeholder=' Thêm nhận xét của bạn' /></div>
        <div className='create-posts' >
          <p>Tạo blog của riêng bạn</p>
          <div className='create-text'><textarea type="text" className='create-blog' placeholder='' /></div>
        </div>
        <div className='up-posts'><button className='w-[113px] h-[44px] bg-[#FC5981] border-none hover:ease-in  hover:duration-300 hover:text-pink-500 hover:bg-stone-100  font-bold mt-7'>Xuất bản</button></div>
      
      </div>
    </div>
  )
}

export default ExtendBlog