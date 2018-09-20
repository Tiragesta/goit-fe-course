const note = document.querySelector('.js-note-edit');
const input = note.querySelector('input');
const noteList = document.querySelector('#note-list');

note.addEventListener('submit', handleAddNote);
noteList.addEventListener('click', handleDeleteNote);

let localData = [];

if(localStorage.getItem('cards') !== undefined){
    if (JSON.parse(localStorage.getItem('cards'))) {
      localData = JSON.parse(localStorage.getItem('cards'));
    }
 
    console.log(localData)
 
    for(let j=0; j<localData.length; j+=1){
        makeNote(localData[j]);
    }  
}

let arr = [];

function handleAddNote(event){
    event.preventDefault();

    let text = input.value;

    let i = arr.length;
    arr[i] = text;
    
    const newArr = JSON.stringify(arr);
    localStorage.setItem('cards', newArr)

    if(localData.includes(text) /*&& localData.length*/){
        alert('Данная закладка уже существует!'); 
    } else {
        makeNote(text); 
    }      

    note.reset();
}

function makeNote(text){ 
    
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