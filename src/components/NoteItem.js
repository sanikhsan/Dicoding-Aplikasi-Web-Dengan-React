import React from "react";
import NoteItemButton from "./NoteItemButton";
import NoteItemContent from "./NoteItemContent";

function NoteItem({id, title, body, createdAt, onDelete, onArchived }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} body={body} createdAt={createdAt} />
            <NoteItemButton id={id} onDelete={onDelete} onArchived={onArchived} />
        </div>
    )
}

export default NoteItem;