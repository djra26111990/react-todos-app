/* eslint-disable import/no-anonymous-default-export */
export default {
    getTodos : async ()=>{
        const response = await fetch('https://api-passport-jwt-todos.herokuapp.com/user/todos');
        if (response.status !== 401) {
            return response.json().then(data => data);
        }

        else
            return { message: { msgBody: "UnAuthorized", msgError: true } };
    },
    postTodo : async todo=>{
        const response = await fetch('https://api-passport-jwt-todos.herokuapp.com/user/todo', {
            method: "post",
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status !== 401) {
            return response.json().then(data => data);
        }

        else
            return { message: { msgBody: "UnAuthorized" }, msgError: true };
    }
}