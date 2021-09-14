import React from 'react'
import './InvisibleBtn.scss'


const InvisibleBtn = (props) => {

  return (
    <button className="btn-invisible">
      {props.children}
    </button>

  )
}

export default InvisibleBtn
