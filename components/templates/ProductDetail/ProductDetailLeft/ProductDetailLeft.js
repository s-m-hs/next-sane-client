import React from "react";
import SwiperComD from '../SwiperComD/SwiperComD'
import SwiperComE from "../SwiperComE/SwiperComE";
import Styles from './ProductDetailLeft.modul.css'


export default function ProductDetailLeft() {
  return (
    <div className="container " style={{height:'100%'}}>
      <div className="row mt-1" style={{height:'50%'}}>
        <div className="col">
{/* <SwiperComD/> */}
<SwiperComE/>
        </div>
      </div>

      <div className="row "style={{height:'30%'}}>
        <div className="col-md-6">
          <div className="ProductDetailL-divright centerc mt-5">
   


<span className="ProductDetailL-div__title">موس بی سیم گیمینگ ایسوس AimPoint EVA-02 Edition</span>
<span className="ProductDetailL-div__description">ASUS ROG Gladius III Wireless AimPoint EVA-02 Edition Gaming Mouse</span>
<span className="ProductDetailL-div__partn">پارت نامبر: 90MP03F0-BMUA00</span>
<div className="ProductDetailL-detail centerc mt-5"> 
  <span>درگاه اتصال: بلوتوث - دانگل - پورت USB</span>
<span>محدوده دقت حسگر: 100-36000 نقطه بر اینچ</span>
<span>نوع حسگر: ROG AimPoint</span>
<span>سرعت رد‌گیری: 650 اینچ بر ثانیه</span>
</div>

          </div>
        </div>
        <div className="col-md-2">

<div className="ProductDetailL-divMiddle centerc mt-5">

  <span className="ProductDetailL-divMiddle_offprice">6,950,000 تومان</span>
  <span className="ProductDetailL-divMiddle_price">7,445,000 تومان</span>
  <span className="ProductDetailL-divMiddle_count">موجودی محصول: موجود</span>
</div>

        </div>
        <div className="col-md-4">

          <div className="ProductDetailL-left centerc mt-5">
<button className="btn btn-primary ">افزودن به سبد خرید</button>

          </div>
        </div>
      </div>
    </div>

    
  );
}
