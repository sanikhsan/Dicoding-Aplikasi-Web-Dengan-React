import React from "react";

function NoteItemButtonArc({id, archived, onArchived}) {
    return (
        <button className="note-item__archive-button"
            onClick={() => onArchived(id)}>
            {archived ? 'Aktifkan' : 'Arsipkan'}
        </button>
    
    )
}

export default NoteItemButtonArc;