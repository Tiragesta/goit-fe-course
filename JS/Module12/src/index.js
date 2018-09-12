'use strict';

const note = document.querySelector('.js-note-edit');
const input = note.querySelector('input');

const noteList = document.querySelector('#note-list');

note.addEventListener('submit', handleAddNote);
noteList.addEventListener('click', handleDeleteNote);


if(localStorage.getItem('URL') !== null){
    const someNote = localStorage.getItem('URL');
    
    
    noteList.insertAdjacentHTML('afterbegin', someNote);
}

function handleAddNote(event){
    event.preventDefault();
    
    let urlList = {};
    let text = input.value;

    urlList.id = new Date();
    urlList.text = text;

    console.log(urlList);
    
    let session = [];
    console.log(session);

    //for(let i=0; i<input.length; i+=1){
        session.push(urlList);

     
    //}  
    console.log('obj in arr: ', session);
    
    makeNote(text);
        
    note.reset();
}

function makeNote(text){
    const source = document.querySelector('#list-template').innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = template({text});
    
    localStorage.setItem('URL', text);
    
    noteList.insertAdjacentHTML('afterbegin', markup);
}

function handleDeleteNote(event){
    const nodeName = event.target.nodeName;

    if(nodeName === 'BUTTON'){
    const parent = event.target.parentNode;
    parent.remove();
};
}

