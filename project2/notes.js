const addBtn = document.querySelector("#add");
const container = document.querySelector(".container");

addBtn.addEventListener("click",addNote);

function addNote(e){
    const note = document.createElement("div");
    note.classList.add('note');
    note.innerHTML=
    `
    <div class="note-box">
    <div class="toolbar">
    <div class="option" id="save">SAVE</div>
    <div class="option" id="del">DELETE</div>
    </div>
    <textarea></textarea>
    </div>    
    `;
    
    
    const delBtn = note .querySelector("#del");
    const saveBtn = note.querySelector("#save");
    
    saveBtn.addEventListener("click",saveNotes);
    delBtn.addEventListener("click",()=>{

        note.remove();
        saveNotes();

    });


    container.appendChild(note);    
}
        
    
    
function saveNotes(e){
    const notes = document.querySelector('.note-box textarea');
    const data = Array.from(notes).map(note => note.value);
    console.log(notes,data);

    if(data.length ===""){
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes",JSON.stringify(data));
    }

}

function loadNotes(){

    const lsNotes = JSON.parse(localStorage.getItem("notes"));

    if(lsNotes !==null){
        lsNotes.forEach(noteText =>{

        addNote();

        const notes = document.querySelectorAll(".note-box textarea");
        const lastNote = notes[notes.length -1];
        lastNote.value = noteText;  

        });
    }else{
        addNote();
    }

}

loadNotes();
