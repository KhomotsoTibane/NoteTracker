import React,{useState} from "react"
import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"
import CreateNewNote from "./CreateNewNote"

function App() {

 const [noteCollection, setNoteCollection] = useState([]);

 function addNote(newNote) {
   setNoteCollection( prevNoteCollection => {
    return [...prevNoteCollection, newNote];
  });
 }

 function deleteNote(id){
  setNoteCollection(prevNoteCollection =>{
   return prevNoteCollection.filter((noteItem, index)=>{
      return index !== id;
    });
  });
 }

  return (
    <div>
      <Header/>
      <CreateNewNote onAdd={addNote} onDelete={deleteNote} />
      {noteCollection.map((noteItem, index)=>{
        return <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      })}
      <Footer/>
    </div>
  )
}

export default App