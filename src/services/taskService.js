import axios from 'axios';
//const apiUrl = "https://art-to-do-app.herokuapp.com/api/tasks/api/tasks";
const apiUrl = "http://localhost:8080/api/tasks";


export function getTasks(){
    return axios.get(apiUrl)
}
export function addTask (task) {
    console.log("task:",task)
    return axios.post(apiUrl, task)
}

export function updateTask (id, task) {
    return axios.put(apiUrl + "/" + id, task)
}

export function deleteTask (id){
    console.log(id)
    return axios.delete(apiUrl + "/" + id)
}