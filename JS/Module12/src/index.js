'use strict';

const note = document.querySelector('.js-note-edit');
const input = note.querySelector('input');
const noteList = document.querySelector('#note-list');

let list = [];

note.addEventListener('submit', handleAddNote);
noteList.addEventListener('click', handleDeleteNote);


function handleAddNote(event){
    event.preventDefault();

    let text = input.value;
    
    let temp = {};
    temp.id = new Date();
    temp.text = text;

    console.log(temp);

    let i = list.length;
    list[i] = temp;

    console.log(list);

    localStorage.setItem('URL', JSON.stringify(list))

    makeNote(text);

    note.reset();
}

if(localStorage.getItem('URL') !== undefined){
    list = JSON.parse(localStorage.getItem('URL'));
    console.log(list)
    makeNote({list});
}

function contains(list, text) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] === text) {
            return true;
        }
    }
    return false;
}

function makeNote(text){ 

    const findNote = list.find(item => {
        return text.length ? text.includes(String(list.text)): false
    });

    console.log('find', findNote)
        const source = document.querySelector('#list-template').innerHTML.trim();
        const template = Handlebars.compile(source);
        const markup = template({text});
        
        noteList.insertAdjacentHTML('afterbegin', markup); 
};

function handleDeleteNote(event){
    const nodeName = event.target.nodeName;

    if(nodeName === 'BUTTON'){
    const parent = event.target.parentNode;
    parent.remove();
};
}

//var animals = ['dog', 'cat', 'hamster', 'bird', 'fish'];



