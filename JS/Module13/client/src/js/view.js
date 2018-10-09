export default class View {
    constructor(){
        this.refs = {};

        this.refs.noteEditor = document.querySelector('.note-editor');
        this.refs.textarea = document.querySelector('input');
        this.refs.noteList = document.querySelector('#note-list');
    }

    init(notes) {
        const markup = notes.reduce((string, note) => {
            return string + this.createNoteMarkup(note);
        }, ' ');

        this.refs.noteList.insertAdjacentHTML('beforeend', markup);
    }

    addNote(note){
        const markup = this.createNoteMarkup(note);

        this.refs.noteList.insertAdjacentHTML('beforeend', markup);
    }

    deleteNote(id){
        const el = this.refs.noteList.querySelector(`.note[data-id="${id}"]`);
        
        el.remove();
    }

    createNoteMarkup({id, url}){
        return `
        <li class="note" data-id="${id}">
            <a href="https://" class="href">${url}</a>
            
            <button class="delete-note" data-action="delete">Delete</button>
        </li>
        `;
    }
}


