import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add';


function CreateNewNote(props) {

  const [note, setNote]=useState({
    title:"",
    content:""
  });

  function handleNoteInput(event){
    const{name, value} = event.target;

    setNote(prevNote=>{
      return{
        ...prevNote, 
        [name]:value
      };
    });
  }

  function HandleSubmitNote(event){
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    });
    event.preventDefault()
  }

  return (
    <div>
        <form className="create-note">
            <input name="title" onChange={handleNoteInput} value={note.title}placeholder="Title..."/>
            <textarea name="content" onChange={handleNoteInput} value={note.content}placeholder="Write note...." rows="3"/>
            <button onClick={HandleSubmitNote}>
              <AddIcon />
            </button>
        </form>
    </div>
  )
}

export default CreateNewNote