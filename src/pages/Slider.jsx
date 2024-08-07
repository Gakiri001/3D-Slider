import React from 'react'
import "./Slider.css"
import pic from "../assets/partner4.jpg"

function Slider() {
  return (
    <div className='banner'>
      <div className="slider" style={{"--quantity": 6}}>
        <div className="item" style={{"--position":1}}><img src={pic} alt="" /></div>
        <div className="item" style={{"--position":2}}><img src={pic} alt="" /></div>
        <div className="item" style={{"--position":3}}><img src={pic} alt="" /></div>
        <div className="item" style={{"--position":4}}><img src={pic} alt="" /></div>
        <div className="item" style={{"--position":5}}><img src={pic} alt="" /></div>
        <div className="item" style={{"--position":6}}><img src={pic} alt="" /></div>
      </div>
      <div className="content">
        <h1 data-content="CSS ONLY">
          CSS ONLY</h1>
        <div className="author">
          <h2>Gakiri Tech</h2>
          <p><b>web design</b></p>
          <p>3D sliders are awesome and fun</p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  )
}

export default Slider