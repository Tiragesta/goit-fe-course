import axios from 'axios'

const BASE_URL = 'http://localhost:3000';

export const getAllNotes = () => {
   return axios
    .get(`${BASE_URL}/notes`)
    .then(response => response.data)
    .catch(error => console.log(error))
};

export const addNote = (note) => {
    return axios
      .post(`${BASE_URL}/notes`, note)
      .then(response => response.data)
      .catch(error => console.log(error))
}

export const deleteNote = id => {
    return axios
      .delete(`${BASE_URL}/notes/${id}`)
      .catch(error => console.log(error))
}