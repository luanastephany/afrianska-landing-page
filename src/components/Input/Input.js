import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import './Input.scss'

const Input = ({ label, multiline, error, ...props }) => {
  let className = "label-input"

  if (error) {
    className += " error"
  }

  return (
    <label className={className}>
      <span className="label">
        {label}
      </span>
      <div className="input-box">
        {multiline ? (
          <textarea type="text" {...props} />
        ) : (
          <input type="text" {...props} />
        )}
        {error && <FaExclamationTriangle size={20} />}
      </div>

      <div className="error-box">
        {error}
      </div>
    </label>
  )
}

export default Input
