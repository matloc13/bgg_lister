import React from 'react'
import Input  from './input';

const GameForm = () => {
  return (
    <form onSubmit={gameSubmit}>

      <Input
        handleChange={handleChange}
        name={"name"}
        type={"text"}
        value={inputs.name}
      />

      <Input
        handleChange={handleChange}
        name={"img"}
        type={"text"}
        value={inputs.img}
      />

      <Input
        handleChange={handleChange}
        name={"bggid"}
        type={"text"}
        value={inputs.bggid}
      />
      <Input
        type={"submit"}
        value={"add game"}
      />
    </form>
  )
}

export default GameForm
