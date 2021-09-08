import React from 'react'
import './InvisibleBtn.scss'
import { FaArrowRight } from 'react-icons/fa'

const InvisibleBtn = (props) => {

  return (
    <button className="btn-invisible">
      <span>{props.children}</span>
      <FaArrowRight size="16" />
    </button>

  )
}

export default InvisibleBtn
