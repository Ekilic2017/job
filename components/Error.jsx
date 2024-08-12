import React from 'react'

const Error = ({message,retry}) => {
  return (
    <div className='error'>
      <p>Üzgünüz verilere ulaşırken bir hata oluştu.</p>
      <p className='text'>{message}</p>
      <button onClick={retry}className='button'><span>Tekrar dene</span></button>
    </div>
  )
}

export default Error