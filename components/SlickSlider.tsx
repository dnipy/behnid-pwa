import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import sliderONE from '../assets/slider1.jpg'
import sliderTwo from '../assets/slider2.png'
import sliderThree from '../assets/slider3.jpg'
import sliderFour from '../assets/slider4.jpg'
import ShopCard from './ShopCard'
import { OrderCard } from './orders'



function SlickSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    }

  return (
    <div className=" row justify-content-evenly" >

        <div className="col-12">
            <div className='mb-1 title-index'>
                <p className='  '>پیشنهادی</p>
            </div>
            <Slider    autoplaySpeed={1500} {...settings} arrows={true}  rtl={true} >
                <div className='slider-img col-12'>
                    <Image src={sliderONE}  height='200px !important' layout='intrinsic' />
                </div>
                <div className='slider-img col-12'>
                    <Image src={sliderTwo} height='200px !important' layout='intrinsic' />
                </div>
                <div className='slider-img col-12'>
                    <Image src={sliderFour} height='200px !important' layout='intrinsic' />
                    
                </div>
                <div className='slider-img col-12'>
                    <Image src={sliderThree} height='200px !important' layout='intrinsic' />
                </div>

            </Slider>
        </div>
    </div>
  )
}

export default SlickSlider



export const LastProductSlider = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1
    }


    return(
        <div className="col-12">
        <div className='mb-4 title-index'>
            <a href='/products'>آخرین محصولات</a>
        </div>
        <Slider    autoplaySpeed={1500} {...settings} arrows={true}  rtl={true}  >
            <ShopCard author='بهنید'  desc='توضیحات محصول'  price_one='۱۰۰۰۰' price_two='۲۵۲۵۱'  title='نام کالا' />
            <ShopCard author='بهنید'  desc='توضیحات محصول'  price_one='۱۰۰۰۰' price_two='۲۵۲۵۱'  title='نام کالا' />
            <ShopCard author='بهنید'  desc='توضیحات محصول'  price_one='۱۰۰۰۰' price_two='۲۵۲۵۱'  title='نام کالا' />
            <ShopCard author='بهنید'  desc='توضیحات محصول'  price_one='۱۰۰۰۰' price_two='۲۵۲۵۱'  title='نام کالا' />
            <ShopCard author='بهنید'  desc='توضیحات محصول'  price_one='۱۰۰۰۰' price_two='۲۵۲۵۱'  title='نام کالا' />
            <ShopCard author='بهنید'  desc='توضیحات محصول'  price_one='۱۰۰۰۰' price_two='۲۵۲۵۱'  title='نام کالا' />
            <ShopCard author='بهنید'  desc='توضیحات محصول'  price_one='۱۰۰۰۰' price_two='۲۵۲۵۱'  title='نام کالا' />
        </Slider>
    </div>
    )

}


export const LastOrderSlider = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1
    }


    return(
        <div className="col-12 slid" >
        <div className='mb-3 title-index'>
            <a href='/requests'>آخرین درخواست ها</a>
        </div>
        <div className="slider-beh">

            <Slider   autoplaySpeed={1500} {...settings} arrows={true}  rtl={true}  >
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
            </Slider>

        </div>
    </div>
    )

}