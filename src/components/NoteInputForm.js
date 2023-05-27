import React from "react";


class NoteInputForm extends React.Component {
    constructor(props) {
        super(props);

        //Inisiasi State
        this.state = {
            title: '',
            body: '',
        }

        //Binding Event
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Sisa Karakter : 50</p>
                <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
                <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInputForm;