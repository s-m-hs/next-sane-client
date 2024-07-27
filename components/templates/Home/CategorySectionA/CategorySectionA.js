import React, { useEffect, useState } from 'react'
import CardA from '@/components/madules/Cards/CardA/CardA'
import Styles from './CategorySectionA.module.css'
import apiUrl from '@/utils/ApiUrl/apiUrl'

export default function CategorySectionA() {
const [mainCategory,setMainCategory]=useState({}) 



const getCategoryById=()=>{
  let obj={
    gid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    id: 2,
    str: "string"
  }
async function myAppGet(){
  const res=await fetch(`${apiUrl}/api/CyCategories/GetItemWChildAndRoot`,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json' 
    },
    body:JSON.stringify(obj)
  }).then(res=>{
    console.log(res)
    return res.json()
  }).then(
    result=>{
      // console.log(result)
      setMainCategory(result)
      console.log(mainCategory)
      
    }
  )
}
myAppGet()
}
// console.log(imgSrcProp); 



////////////////////////////
useEffect(()=>{
  getCategoryById()
  // console.log(mainCategory.childs[0].imageUrl) 
},[])

  return ( 
    // <div className={`container  centerr ${styles.bcatitem}`}  >
    <>
        <div className='row mt-5'>
          <div className='col '>
            <h1 className={Styles.title} >
              دسته بندی ها :
            </h1>
          </div>
        </div>
        <div className={`row row-cols-6  ${Styles.bcatitem}`}  >

{mainCategory.childs &&   mainCategory.childs.map((item,index)=>
  <CardA imgSrc={item.imageUrl} category={`category`} id={item.id}/>

)}

   
  
        </div>
    </>


      //  </div>
  )
}
