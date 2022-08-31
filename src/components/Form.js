import React from 'react'
import { Form, TextArea, Button, Input } from 'semantic-ui-react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { addNote } from '../redux/notes/notesSlice'

function FormNotes() {
  const [title, setTitle] = useState("")
  const [textarea, setTextarea] = useState("")
  const [color, setColor] = useState("blue")
  const [count, setCount] = useState(4)
  const handleButtonClick = (e) => {
    setColor(e.target.id)
  }
  const dispatch = useDispatch()
  const handleButtonSubmit = (e) => {
    e.preventDefault()
    dispatch(addNote({
      id: count,
      titlearea: title,
      textarea: textarea,
      color: color
    }))
    setTitle("")
    setTextarea("")
    setCount(count + 1)
  }
  return (
    <div>
      <Form>
        <Input icon='text' placeholder='Enter your title here...' value={title} onChange={(e) => setTitle(e.target.value)}
        style={{marginRight:"51rem"}} />
        <TextArea style={{minHeight:"20rem"}} placeholder='Enter your note here...' value={textarea} onChange={(e) => setTextarea(e.target.value)} />
        <Button style={{ height: "5rem", width: "5rem", borderRadius: "5rem", padding:"2rem",position:"absolute",marginLeft:"-65rem",marginTop:"14.9rem" }} id="pink" color='pink' onClick={handleButtonClick} >{color === "pink" ? "🗸" : ""}</Button>
        <Button style={{ height: "5rem", width: "5rem", borderRadius: "5rem", padding:"2rem",position:"absolute",marginLeft:"-60rem",marginTop:"14.9rem" }} id="purple" color='purple' onClick={handleButtonClick} >{color === "purple" ? "🗸" : ""}</Button>
        <Button style={{ height: "5rem", width: "5rem", borderRadius: "5rem", padding:"2rem",position:"absolute",marginLeft:"-55rem",marginTop:"14.9rem" }} id="yellow" color='yellow' onClick={handleButtonClick} >{color === "yellow" ? "🗸" : ""}</Button>
        <Button style={{ height: "5rem", width: "5rem", borderRadius: "5rem", padding:"2rem",position:"absolute",marginLeft:"-50rem",marginTop:"14.9rem" }} id="blue" color='blue' onClick={handleButtonClick} >{color === "blue" ? "🗸" : ""}</Button>
        <Button style={{ height: "5rem", width: "5rem", borderRadius: "5rem", padding:"2rem",position:"absolute",marginLeft:"-45rem",marginTop:"14.9rem" }} id="green" color='green' onClick={handleButtonClick}>{color === "green" ? "🗸" : ""}</Button>
        <Button id="green" color='green' onClick={handleButtonSubmit} style={{position:"absolute",marginLeft:"-6rem",marginTop:"17rem"}}>ADD</Button>
      </Form>
    </div>
  )
}

export default FormNotes