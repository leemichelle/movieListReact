import React from 'react';

const InputField = (props) => (
    <form onSubmit = {props.addTitle}>
      <label>
        <input type = 'text' placeholder ='Add movie title here'></input>
      </label>
    </form>
)

export default InputField;
