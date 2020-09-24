import React from 'react';
import InputForm from './Form'
import StyledButton from './Button'


const Form = () => {
  return(
    <>
     <form>
      <label> Add New Task</label>
      <InputForm/>
      <StyledButton>
        Add Task
      </StyledButton>
     </form>
    </>
  )
}


export default Form;