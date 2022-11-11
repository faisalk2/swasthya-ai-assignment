
import React from 'react'


const Child1 = ({inputValue,setInputvalue}) => {
    
    const handleInput=(e)=>{
const {name,value}=e.target

setInputvalue({
    ...inputValue,[name]:Number(value)
})
    }


  return (
    <div>
         <h1>Child1</h1>
        <input type="number" name="value1" value={inputValue.value1==null?"":inputValue.value1} id="" onChange={handleInput} />
        <input type="number" name="value2" value={inputValue.value2==null?"":inputValue.value2} id="" onChange={handleInput} />
        {inputValue.value1 && inputValue.value2 ? <p>={Number(inputValue.value1)+Number(inputValue.value2)}</p>:""}
    </div>
  )
}

export default Child1