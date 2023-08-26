import React from 'react'
import banner from '../Images/banner.png'
function Main(){
  return (
    <div className='main'>
    <h1>Stay curious.</h1>
    <p className='paragraph'>Discover stories, thinking, and expertise <br></br>from writers on any topic.</p>
    <button className='btn'>Start reading</button>
    <img className="banner" src={banner} alt='banner'/>
    </div>
  )
}

export default Main
