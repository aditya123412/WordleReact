import React from 'react'

const ListItem = ({val1=0, val2='', updateVal=v=>{}}) => {
  return (
    <>
        <h3>{val1}</h3>
        <h5>{val2}</h5>
        <input type='text' onChange={e=>updateVal(e.target.value)}></input>
    </>
  )
}

export default ListItem