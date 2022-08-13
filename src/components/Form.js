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
        style={{marginRight:"114vh"}} />
        <TextArea style={{minHeight:"200px"}} placeholder='Enter your note here...' value={textarea} onChange={(e) => setTextarea(e.target.value)} />
        <Button style={{ height: "50px", width: "50px", borderRadius: "50px", padding:"20px",position:"absolute",marginLeft:"-146vh",marginTop:"24vh" }} id="pink" color='pink' onClick={handleButtonClick} >{color === "pink" ? "🗸" : ""}</Button>
        <Button style={{ height: "50px", width: "50px", borderRadius: "50px", padding:"20px",position:"absolute",marginLeft:"-137vh",marginTop:"24vh" }} id="purple" color='purple' onClick={handleButtonClick} >{color === "purple" ? "🗸" : ""}</Button>
        <Button style={{ height: "50px", width: "50px", borderRadius: "50px", padding:"20px",position:"absolute",marginLeft:"-128vh",marginTop:"24vh" }} id="yellow" color='yellow' onClick={handleButtonClick} >{color === "yellow" ? "🗸" : ""}</Button>
        <Button style={{ height: "50px", width: "50px", borderRadius: "50px", padding:"20px",position:"absolute",marginLeft:"-119vh",marginTop:"24vh" }} id="blue" color='blue' onClick={handleButtonClick} >{color === "blue" ? "🗸" : ""}</Button>
        <Button style={{ height: "50px", width: "50px", borderRadius: "50px", padding:"20px",position:"absolute",marginLeft:"-110vh",marginTop:"24vh" }} id="green" color='green' onClick={handleButtonClick}>{color === "green" ? "🗸" : ""}</Button>
        <Button id="green" color='green' onClick={handleButtonSubmit} style={{marginLeft:"39vh",position:"absolute",position:"absolute",marginLeft:"-12vh",marginTop:"26vh"}}>ADD</Button>
      </Form>
    </div>
  )
}

export default FormNotes