import React, { useState } from "react";

const Child2 = ({ inputValue }) => {
  // const [value3,setValue3]=useState()
  // const [value4,setValue4]=useState()
  // const [value5,setValue5]=useState()
  const [child2Value, setChild2value] = useState({
    value3: null,
    value4: null,
    value5: null,
  });

  const handleNumber = (e) => {
    const { name, value } = e.target;

    if (value == 0) {
      setChild2value({
        ...child2Value,
        [name]: null,
      });
    }
    setChild2value({
      ...child2Value,
      [name]: Number(value),
    });
  };

  return (
    <div>
      <h1>Child2</h1>
      {inputValue.value1  ?<p>{inputValue.value1}+</p>:""}
      <input
        type="number"
        name="value3"
     
        value={child2Value.value3 == null ? "" : child2Value.value3}
        id=""
        onChange={handleNumber}
      />
      
      {inputValue.value1 && child2Value.value3? <p>={Number(inputValue.value1) + Number(child2Value.value3)}</p> :""}
{/* second input start form here */}


     {inputValue.value2? <p>{inputValue.value2}+</p>:""}
      <input
        type="number"
        name="value4"
        value={child2Value.value4 == null ? "" : child2Value.value4}
        id=""
        onChange={handleNumber}
      />
      { inputValue.value2 && child2Value.value4 ?<p>={Number(inputValue.value2) + Number(child2Value.value4)}</p>:""}


      {inputValue.value1 && inputValue.value2 ? (
        <p>{Number(inputValue.value1) + Number(inputValue.value2)}+</p>
      ) : (
        ""
      )}
      <input
        type="text"
        name="value5"
        value={child2Value.value5 == null ? "" : child2Value.value5}
        id=""
        onChange={handleNumber}
      />
      {inputValue.value1 && inputValue.value2 && child2Value.value5 ?<p>=
        {Number(inputValue.value1) +
          Number(inputValue.value2) +
          Number(child2Value.value5)}
      </p>:""}
    </div>
  );
};

export default Child2;
