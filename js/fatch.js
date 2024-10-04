// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



function fatchData(){
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    
    fetch(url)
    .then(response => response. json())
    .then(json => console.log(json)
    )

}



function showTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => todosData(data)
    )
}

function todosData(data){
    console.log(data);
    
}



function usersData(){
    const url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data))
}


function displayUser(data){
    console.log(data);
    
}