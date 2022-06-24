import React, { useEffect } from 'react'
import logo from '../assets/images/logo_white.svg'

export default function Loader() {

    useEffect(()=>{
        const ele = document.getElementById("tria-id");
        // const path = ele.getElementById("");
        console.log(ele)
    })
  return (
    <div className='loader__wrapper'>
        <div id='tria-id' className='tria'>
            <img className='image' src={logo} />
        </div>
    </div>
  )
}
