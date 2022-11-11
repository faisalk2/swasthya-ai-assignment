import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import { useState } from 'react'
const Parent = () => {
    const [inputValue,setInputvalue]=useState({
        value1:null,
        value2:null
    })
    
  return (
    <div>
        <Child1  setInputvalue={setInputvalue} inputValue={inputValue}  />
        <Child2 inputValue={inputValue}/>
    </div>
  )
}

export default Parent