import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [
      {
        id: '1',
        title: 'Note 1',
        note: 'Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. ',
        hex: '#F06291',
      },
      {
        id: '2',
        title: 'Note 2',
        note: 'Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır. Note detayıdır.',
        hex: '#BA68C8',
      },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload)
    },
    removeNote: (state, action) => {
      const id = action.payload;
      const filtered = state.notes.filter((note) => note.id !== id);
      state.notes = filtered;
    },
    editNote: (state, action) => {
      state.notes.forEach(function(note) {
        if(note.id === action.payload.id) {
          note.title = action.payload.title
          note.note = action.payload.description
          note.hex = action.payload.hex
        }
      })
    }
  },
});

export const { addNote, removeNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;