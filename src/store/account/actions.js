// import router from '../../router'
// import Axios from 'axios';
// https://ecommerce-pr.herokuapp.com
export async function login(payload) {
    console.log(payload)
    await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        // mode: 'cors',
        body: JSON.stringify({
            email: payload.email,
            password: payload.password
        })
    }).then(data => data.json()).then((user) => {
        console.log(user)

    });

    // console.log(email)
    // let url = 'http://localhost:4000/users/signin';
    // Axios.post(url, {
    //     name: payload.name,
    //     password: payload.password
    // }).then(function (response) {
    //     console.log(response)
    //     let userData = {
    //         displayName: response.data.results[0].name.first,
    //         email: response.data.results[0].email,
    //         photoURL: response.data.results[0].picture.thumbnail,
    //         uid: response.data.results[0].login.uuid
    //     }

    //     commit("setUserData", userData)
    //     // router.push('/')
    // })
    //     .catch(function (error) {
    //         console.log(error)
    //     });
}
