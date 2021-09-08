import React from 'react'
import './FinishedProject.scss'

const FinishedProject = () => {
  return (
    <div className="finished-project">

      <div className="texts-project">
        <h1 className="title">Our Finished Project</h1>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>

      <div className="pictures">
        <img className="pic1" src="/img/pic1.JPG" alt="" />

        <div className="app-pictures">
          <img className="secondary-pic" src="/img/pic2.JPG" alt="" />
          <img className="secondary-pic" src="/img/pic3.JPG" alt="" />
        </div>

      </div>




    </div>
  )
}

export default FinishedProject
