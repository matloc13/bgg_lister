import React from 'react';
import From from '/form'

const Form = (props) => {

  const { handleSubmit, } = props

  const [inputs, setInputs] = useState({
    
  })



  return (
    <>
      <form onSubmit={}>
        <fieldset>

          <select
            name={"title"}
            id={title""}>
            <option
              value={"new_list"}></option>
          </select>

          <Input
            name={"title"}
            type={"text"}
            value={inputs.title}
          />




        </fieldset>
      </form>
    </>
  )
}

export default Form;
