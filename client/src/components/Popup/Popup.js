import React from 'react'

const Popup = (props) => {

    let {setOpen} = props;

  return (
    <div className='popup_contaier'>
        <button className='close' onClick={() => setOpen(false)}>X</button>
        <h1>merhaba dünya</h1>

        <p>
            sdfsdfks
        </p>
    </div>
  )
}

export default Popup