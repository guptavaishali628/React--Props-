import React from 'react'

const Child = (props) => {  // props pass as elemnt inside the function to call myname from <child myname="vaishali"/>
    console.log(props)
  return (
    <>
      <h1>Child of Props</h1>
      <p>My name is {props.myname}</p>
    </>
  )
}

export default Child
