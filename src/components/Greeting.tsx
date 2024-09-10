import React from 'react'
interface GreetingProps{name:string}
const Greeting:React.FC <GreetingProps>= ({name}) => {
  return (
    <div>hello {name}</div>
  )
}

export default Greeting