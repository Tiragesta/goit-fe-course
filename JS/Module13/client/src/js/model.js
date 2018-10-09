import * as api from './service/api';

export default class Model{
    constructor(items = []){
        this._items = items;
    }

    getItems(){
       return api.getAllNotes().then(notes => {
           this._items = notes;

           return this._items;
       });
    }

    addItem(item){
        return api.addNote(item).then(newItem => {
            this._items.push(newItem);

            return newItem;
        });
    }

    deleteItem(id){
        return api.deleteNote(id).then(() => {
            this._items = this._items.filter(item => item.id !== id);

            return id;
        });
    }
}


/*import { EventEmitter } from './service/emitter';

class Model extends EventEmitter {
    constructor(items = []){
        super();

        this.items = items;
    }
    getItem(id) {
        return this.items.find(item => item.id == id);
    }

    addItem(item){
        this.items.push(item);
        this.emit('change', this.items);

        return item;
    }

    removeItem(id) {
        const index = this.items.findIndex(item => item.id == id);

        if(index > -1){
            this.items.splice(index, 1);
            this.emit('change', this.items);
        }
    }
}

export default Model;*/

