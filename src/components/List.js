import React from 'react'
import { useSelector } from "react-redux"
import { Button, Card } from 'semantic-ui-react'
import { destroy } from '../redux/notes/notesSlice'
import { useDispatch } from "react-redux"
import "../App.css"

function List() {
  const items = useSelector((state) => state.notes.items)
  const dispatch = useDispatch()
  const activeFilter = useSelector((state) => state.notes.activeFilter)
  return (
    <div>
      <Card.Group className='cardgroup'>
        {items.filter((val)=>{
          if(activeFilter == ""){
            return val
          } else if (val.textarea.toLowerCase().includes(activeFilter.toLowerCase())){
            return val
          }}).
          map((item, i) =>
          <Card key={i} className='card'>
            <Card.Content style={{backgroundColor:item.color}}>
              <Card.Header>{item.titlearea}</Card.Header>
              <Card.Description>
                {item.textarea}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                {/* <Button basic color='green'>
                  Update
                </Button> */}
                <Button basic color='red' onClick={()=>dispatch(destroy(item.id))}>
                  Delete
                </Button>
              </div>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    </div>
  )
}

export default List