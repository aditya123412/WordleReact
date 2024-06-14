import React from 'react'

const Square = (props={char:'', format:'unset'}) => {

  return (
    <div className = {`${props.format??'unset'} square`} >{props.char}</div>
  )
}

export default Square