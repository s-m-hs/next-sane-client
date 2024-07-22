import React from 'react'
import SwiperB from '@/components/templates/Home/SwiperB/SwiperB'
import CategorySectionA from '@/components/templates/Home/CategorySectionA/CategorySectionA'

export default function Home() {
  return (
<div className='container'>
  <div className='row'>
    <div className='col-12'><SwiperB/></div>
    <CategorySectionA/>


  </div>
</div>
  )
}
