'use strict';

//=========== список всех пользователей в БД ===============

const btn = document.querySelector('.js-submit');
const result = document.querySelector('.js-result');
const base = document.querySelector('.base');


btn.addEventListener('click', handleBtnClick);


function handleBtnClick (e) {
    e.preventDefault();
    getAllUsers().then(items => {
        const markup = createTableRow(items);

        base.innerHTML = markup;
    });

};
function getAllUsers(){
    return fetch ('https://test-users-api.herokuapp.com/users/')
.then(response => {
    if(response.ok) return response.json();

    throw new Error(`Error while fetching: ${response.statusText}`);
})
.then(data => data.data)

.catch(error => {
    console.log('ERROR: ', error);
})
  
}    

function createTableRow(items){
    return items.reduce((markup, item) => markup + `<table data-id="${item.id}" class="responsive-table striped z-depth-3">
    <tr>
      <th>ID</th>
      <td>${item.id}</td>
     </tr>
     <tr>
        <th>NAME</th>
        <td>${item.name}</td>
     </tr>
     <tr>
        <th>AGE</th>
        <td>${item.age}</td>
     </tr>
     
   </table>  
  `,
  ""
);
}

//================ Поиск по ID====

const form = document.querySelector('.search-form');
const input = document.querySelector('.input_id');
const resultId = document.querySelector('.js-result-id');
const button = document.querySelector('.js-submit-id');

button.addEventListener('click', handleFormSubmit);

function handleFormSubmit (e) {
    e.preventDefault();

    const userId = input.value;
    
    getUserById(userId).then(data => {
        const acc = createResultId(data);

        resultId.innerHTML = acc;
    })
    
    form.reset();
};

function getUserById(userId){
    const urlId = `https://test-users-api.herokuapp.com/users/${userId}`;
    return fetch (urlId)
.then(response => {
    if(response.ok) return response.json();

    throw new Error(`Error while fetching: ${response.statusText}`);
})
.then(data => data.data)

.catch(error => {
    console.log('ERROR: ', error);
})
  
}

function createResultId(data){
    const userCard = `
    <ul>
       <li>ID: ${data.id}</li>
       <li>NAME: ${data.name}</li>
       <li>AGE: ${data.age}</li>
    </ul>`

    return userCard;

}


//==============add ==========

const addForm = document.querySelector('.add-form');
const inputName = document.querySelector('.input_add_name');
const inputAge = document.querySelector('.input_add_age');
const resultAdd = document.querySelector('.js-result-add');
const btnAdd = document.querySelector('.js-submit-add');

btnAdd.addEventListener('click', handleNewUserAdd);


function handleNewUserAdd (e) {
    e.preventDefault();

    const userName = inputName.value;
    const userAge = inputAge.value;
    addUser(userName, userAge).then(user => {
        alert(
          `User "${userName}" has been added!`
        );

        return user;
      });
    
    inputName.value = "";
    inputAge.value = "";
    
    addForm.reset();
};

function addUser(name, age){

    const url = `https://test-users-api.herokuapp.com/users`;

    const newUser = {
        name,
        age,
    };
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json;"
          }
        })
        .then(response => {
            if (response.ok) return response.json();
    
            throw new Error("Error" + response.statusText);
          })
        .then(data => data.data)
        .catch(error => console.log('ERROR' + error));
    }

    //=========== removeUser(id)===========
    const removeForm = document.querySelector('.remove-form');
    const removeInput = document.querySelector('.input_remove');
    const btnRemove = document.querySelector('.js-submit-remove');

    btnRemove.addEventListener('click', handleRemoveUserById);

    function handleRemoveUserById(e){
        e.preventDefault();

        const userRemoveId = removeInput.value;
        if(userRemoveId === " "){
            alert ("Введите Id - пользователя для удаления!!!");
            return;
        }

        removeUser(userRemoveId).then(user => {
            if (user === undefined) {
              alert(`Пользователь с ID "${userRemoveId}" не найден!`);
            }
      
            alert(`Пользователь с  ID "${userRemoveId}" был удален!`);
          });
      
        removeInput.value = "";

    removeForm.reset();
    }

    function removeUser(userRemoveId){
        const url = `https://test-users-api.herokuapp.com/users/${userRemoveId}`;
        return fetch(url, {
            method: "DELETE"
          })
          .then(response => {
            if (response.ok) return response.json();
    
            throw new Error("Error" + response.statusText);
          })
          .then(data => data.data)
          .catch(error => {
            console.log(error);
          });
    }

    //============= updateUser(id, user)======

    const updateForm = document.querySelector('.update-form');
    const updateInputId = document.querySelector('.input_update_id');
    const updateInputName = document.querySelector('.input_update_name');
    const updateInputAge = document.querySelector('.input_update_age');
    const btnUpdate = document.querySelector('.js-submit-update');

    btnUpdate.addEventListener('click', handleUpdateUserById);

    function handleUpdateUserById(e){
        e.preventDefault();

        const userId = updateInputId.value;
        const userName = updateInputName.value;
        const userAge = updateInputAge.value;

        if (userId === "" || userName === "" || userAge === "") {
            alert("Все поля должны быть заполнены!");
          } else {
            updateUser(userId, userName, userAge).then(user => {
              if (user === undefined) {
                alert(`Пользователь с ID "${userId}" не найден`);
              }
      
              alert(`Пользователь с ID "${userId}" был изменен!`);
      
              return user;
            });
          }
      
          inputIdUpdate.value = "";
          inputNameUpdate.value = "";
          inputAgeUpdate.value = "";
      };

    function updateUser (userId, name, age) {
        const url = `https://test-users-api.herokuapp.com/users/${userId}`;
    
        const userToUpdate = {
          name,
          age
        };

        return fetch(url, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userToUpdate)
          })
        .then(response => {
          if (response.ok) return response.json();
  
          throw new Error("Error" + response.statusText);
        })
        .then(data => data.data)
        .catch(error => {
          console.log(error);
        });
    };
    
    
    
    
        


    






