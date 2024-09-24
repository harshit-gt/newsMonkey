import React from 'react'
import loading from './loading.gif'
export default function Loader() {
  return (
    <div className='container d-flex m-auto my-5 justify-content-center'>
    <img src={loading} alt="spinner" />
    </div>
  )
}
