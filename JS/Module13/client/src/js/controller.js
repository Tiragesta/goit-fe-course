export default class Controller{
    constructor(view, model){
        this._view = view;
        this._model = model;

        this._view.refs.noteEditor.addEventListener(
            'submit',  
            this.handleAddNote.bind(this),
        );

        this._view.refs.noteList.addEventListener(
            'click', 
            this.handleDeleteNote.bind(this),);

        this.init();
    }
    init(){
        this._model.getItems().then(items => {
            this._view.init(items);
        });
    }
    handleAddNote(e){
        e.preventDefault();

        const url = this._view.refs.textarea.value;

        this._model.addItem({url}).then(createdItem => {
            this._view.addNote(createdItem)
        });

    }
    handleDeleteNote({target}){
        const nodeName = target.nodeName;
        const action = target.dataset.action;

        if(nodeName !== 'BUTTON' && action !== 'delete') return;

        const parentId = Number(target.closest('.note').dataset.id);

        
        this._model.deleteItem(parentId).then(id => {
            this._view.deleteNote(id);
        })

    }
}






    