import React from 'react'
import './PageTitle.scss'

const PageTitle = ({ title, description }) => {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      <p className="page-subtitle">{description}</p>
    </div>
  )
}

export default PageTitle
