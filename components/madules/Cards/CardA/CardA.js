import React, { useState } from 'react'
import styles from './CardsA.module.css'
import Link from 'next/link'
export default function CardA({imgSrc,category,id,changeIdProp}) {

  
  return (
    <div className= {`${styles.cardcat_container} centerc`}>

 <Link className={`${styles.circle_wrapper} centerc`}
  href={category ? `${category}/${id}` : ''} onClick={changeIdProp} >
<img className={styles.cardcat__img} src={imgSrc} alt="" />

    <div className={`${styles.success} circle`} >
        
    </div>

   </Link> 






    </div>
  )
}
