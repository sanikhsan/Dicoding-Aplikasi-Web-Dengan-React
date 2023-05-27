import React from "react";
import NoteItemButtonArc from "./NoteItemButtonArc";
import NoteItemButtonDel from "./NoteItemButtonDel";

function NoteItemButton({id, onDelete, archived, onArchived}) {
    return(
        <div className="note-item__action">
            <NoteItemButtonDel id={id} onDelete={onDelete} />
            <NoteItemButtonArc id={id} onArchived={onArchived} archived={archived} />
        </div>
    )
}

export default NoteItemButton;