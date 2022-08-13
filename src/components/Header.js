import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'
import { useDispatch } from "react-redux"
import { changeFilter } from '../redux/notes/notesSlice'


function Header() {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  dispatch(changeFilter(search))
  return (
    <div>
      <h2>Notes App</h2>
      <Input icon='search' placeholder='Search...' onChange={(e) => setSearch(e.target.value)} value={search} />
    </div>
  )
}

export default Header