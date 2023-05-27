import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";

class NoteBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchivedHandler.bind(this);
    }

    onArchivedHandler(id) {
        const statusNote = [...this.state.notes];
        const indexNote = statusNote.findIndex(note => note.id === id);

        if(statusNote[indexNote].archived === true) {
            statusNote[indexNote].archived = false;
        } else {
            statusNote[indexNote].archived = true;
        }

        this.setState({notes: statusNote});
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    render() {
        return (
            <div className="note-app__body">
                <NoteInput/>
                <h2>Catatan Aktif</h2>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} />
                <h2>Arsip</h2>
            </div>
        )
    }
}

export default NoteBody;