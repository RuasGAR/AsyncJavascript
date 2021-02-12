const axios = require('axios');

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
})

//Async Await
async function getPosts() {
    
    let response = await api.get('/posts'); //Retorna uma promise
    let data = response.data;
    console.log(data);
    
    let ids = [];
    for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id); 
    }
    return ids;    

}   

getPosts().then(res => console.log(res)); 