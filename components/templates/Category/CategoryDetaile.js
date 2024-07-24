import React, { useState, useEffect, useRef } from "react";
import Styles from "./CategoryDetaile.module.css";
import Link from "next/link";
import apiUrl from "@/utils/ApiUrl/apiUrl";
import CardA from "@/components/madules/Cards/CardA/CardA";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
import { Autoplay, EffectFlip, Pagination, Navigation } from "swiper/modules";
import CategoryProducts from "../CategoryProducts/CategoryProducts";


export default function CategoryDetaile() {
  // const param = useParams();
  // const route = useRouter();

  const [mainCategory, setMainCategory] = useState({});
  const [mainCatChilds, setMainCatChilds] = useState([]);
  const [flagPro, setFlagPro] = useState(false);

  const styleRef = useRef();

  // const getCategoryById = () => {
  //   let obj = {
  //     gid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     id: param.id,
  //     str: "string",
  //   };
  //   async function myAppGet() {
  //     const res = await fetch(
  //       `${apiUrl}/api/CyCategories/GetItemWChildAndRoot`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(obj),
  //       }
  //     )
  //       .then((res) => {
  //         console.log(res);
  //         return res.json();
  //       })
  //       .then((result) => {
  //         // console.log(result)
  //         setMainCategory(result);
  //         console.log(mainCategory.childs);
  //         setMainCatChilds(mainCategory.childs);
  //         console.log(mainCatChilds);
  //       });
  //   }
  //   myAppGet();
  // };
  // console.log(param)
  ////////////////////////////
  const changeId = () => {
    console.log("first");
    styleRef.current.classList.add("category-mySwiperD__hide");
    // setMainCatChilds([])
    // setFlagPro(prev=>!prev)
    setFlagPro(true);
    console.log(flagPro);
  };
  //////////////////////////////
  // useEffect(() => {
  //   if (param.id !== null) {
  //     getCategoryById();
  //   }
  // }, []);

  return (
    <div className={`container  centerc ${Styles.category}`} >
      <div className={`row row-cols-6  centerr ${Styles.category_row}`}>
        {mainCategory.childs != null &&
          mainCategory.childs.map((item, index) => (
            <>
              <div className={`centerc ${Styles.category__cart_div}`}>
                <CardA imgSrc={item.imageUrl} changeIdProp={changeId} />
                <span>{item.text} </span>
              </div>
            </>
          ))}
      </div>
      {mainCategory.childs != 0 && (
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <>
              <Swiper
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className={Styles.mySwiperD}
                ref={styleRef}
              >
                <SwiperSlide >
                  <img className={Styles.img} src="../../../images/1716709858-JGyzwBKMcFnB1hwC.webp" />
                </SwiperSlide>
                <SwiperSlide className={Styles.img}>
                  <img className={Styles.img} src="../../../images/1716709720-4rJpWx6QonnC9gKx.webp" />
                </SwiperSlide>
              </Swiper>
            </>
          </div>
          <div className="col-2"></div>
        </div>
      )}
      {mainCategory.childs == 0 && (
        <div className="row">
          <div className="col-12">
            <CategoryProducts />
          </div>
        </div>
      )}
      {flagPro && (
        <div className="row">
          <div className="col-12">
            <CategoryProducts />
          </div>
        </div>
      )}
    </div>
  );
}
