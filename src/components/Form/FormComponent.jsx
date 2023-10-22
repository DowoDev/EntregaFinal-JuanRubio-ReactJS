import React from 'react'

const FormComponent = ({ formData, inputChange, errors, onSumbit }) => {
  return (
    <form onSubmit={onSumbit}>

      {
        Object.keys(formData).map((key, i) => (
          <div key={i}>
            <label htmlFor={key}>Ingrese Su {key}</label>
            <input
              required
              type="text"
              id={key}
              name={key}
              value={formData[key]}
              onChange={inputChange}
            />
            {errors[key] && <p className="error">{errors[key]}</p>}
          </div>
        ))
      }

    </form>
  )
}

export default FormComponent