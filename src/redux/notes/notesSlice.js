import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [
            {
                id: 1,
                titlearea: "title1",
                textarea: "text area text area 1",
                color: "green"
            },
            {
                id: 2,
                titlearea: "title2",
                textarea: "text area text area 2",
                color: "yellow"
            },
            {
                id: 3,
                titlearea: "title3",
                textarea: "text area text area 3",
                color: "blue"
            }
        ]
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload)
        },
        destroy: (state, action) => {
            const id = action.payload
            const filtered = state.items.filter((item) => item.id !== id)
            state.items = filtered
        },
        changeFilter: (state, action) => {
            state.activeFilter = action.payload
        }
    }
})
export const { addNote, destroy, changeFilter } = notesSlice.actions
export default notesSlice.reducer