import axios from "axios"
import API from '../api/api';
const jwtToken = JSON.parse(localStorage.getItem("e-comKey"));

export async function getProducts({ commit }) {
    await axios.get(`${API.URL}/products`).then((response) => {
        // axios.get(url).then((response) => {
        //     console.log(response.data)
        commit("setProducts", response.data);
    }).catch(error => {
        console.log(error);
    });
}

// export function productDetails({ commit }, id) {
//     let url = "https://ecommerce-pr.herokuapp.com/products";
//     axios.get(url, { params: { id: id } }).then((response) => {
//         commit("setProduct", response.data[0]);
//     }).catch(function (error) {
//         console.log(error);
//     });
// }
export async function productDetails(id) {
    let response = await axios.get(`${API.URL}/products`, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + jwtToken.account.userData.accessToken
        },
        params: { id: id }
    }).then(function (data) { return data });
    console.log(response)
}
export function addCart({ commit, getters }, payload) {
    let cart = getters.cart
    let product = getters.product
    let qty = payload.quantity
    let data = {
        product,
        qty
    }
    cart.push(data)
    commit("setCart", cart)
}

export function removeCart({ commit, getters }, id) {
    let cart = []
    if (id) {
        for (let index = 0; index < getters.cart.length; index++) {
            const element = getters.cart[index];
            if (element.id !== id) {
                cart.push(element)
            }
        }
    }
    commit("setCart", cart)
}
