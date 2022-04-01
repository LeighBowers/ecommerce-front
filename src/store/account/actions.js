// import router from '../../router'
import Swal from 'sweetalert2'
import router from '../../router/index';
import Axios from 'axios';
import API from '../api/api'


export async function login(context, payload) {
    let response = await Axios.post(`${API.URL}/users/login`, {
        email: payload.email,
        password: payload.password
    }).then(function (data) { return data });

    if (response.status === 200) {
        context.commit('setUserData', response.data)
        context.commit('setLoggedin', true)
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: `${response.data.name} successfully logged in`
        })
        router.push('/')
    }
}

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
export async function logOut() {
    window.localStorage.removeItem('e-comKey')
    window.location = '/login'
}
