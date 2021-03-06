// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login : async user =>{
        const res = await fetch('http://localhost:5000/user/login', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.status !== 401)
            return res.json().then(data => data);

        else
            return { isAuthenticated: false, user: { username: "", role: "" } };
    },
    register : async user =>{
        const res = await fetch('http://localhost:5000/user/register', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    },
    logout : async ()=>{
        const res = await fetch('http://localhost:5000/user/logout');
        const data = await res.json();
        return data;
    },
    isAuthenticated : async ()=>{
        const res = await fetch('http://localhost:5000/user/authenticated');
        if (res.status !== 401)
            return res.json().then(data => data);

        else
            return { isAuthenticated: false, user: { username: "", role: "" } };
    },
    loginGithub: ()=> {
        return fetch('http://localhost:5000/user/auth/github', {
            mode: 'no-cors'
        });
    }

}