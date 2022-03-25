<template>
  <!-- <form @submit.prevent="login({ email, password })"> -->
  <div class="card login" v-bind:class="{ error: emptyFields }">
    <h1>Sign Up</h1>
    <form @submit.prevent="doRegister()">
      <div class="main">
        <div class="user">
          <label for="name">Username</label>
          <input
            type="text"
            placeholder="Type Your Name In English Only"
            id="name"
            required
            v-model="name"
          />
        </div>
        <div class="password">
          <label for="pass">Password</label>
          <input
            type="password"
            placeholder="Type A Complex Password"
            id="pass"
            required
            v-model="password"
          />
        </div>
        <div class="email">
          <label for="email">E-mail</label>
          <input
            type="email"
            placeholder="Type A Valid Email"
            id="email"
            required
            v-model="email"
          />
        </div>

        <button type="submit" class="btn btn-primary btn-block">Signup</button>
        <br />
      </div>
      <p>
        Already have an account?
        <router-link to="/login">
          <a>Sign In</a>
        </router-link>
      </p>
      <!-- <button type="button" class="btn" target="/home" @click="goToHome">
        Home
      </button>
      <button type="button" class="btn" target="/login" @click="logIn">
        Login
      </button> -->
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import API from "../../store/api/api";
export default {
  name: "Signin",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      confirmPassword: "",
      emptyFields: false,
    };
  },
  methods: {
    ...mapActions("account", ["signup"]),
    checkPassword() {
      if (this.password != this.confirmPassword) {
        return false;
      }
    },

    doRegister() {
      if (
        this.name === "" ||
        this.email === "" ||
        this.password === "" ||
        this.confirmPassword === ""
      ) {
        this.emptyFields = true;
      } else {
        let passwordHandle = this.checkPassword();

        if (passwordHandle === false) {
          alert("Passwords does not match");
        } else {
          axios
            .post(`${API.URL}/users/signup`, {
              name: this.name,
              email: this.email,
              password: this.password,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    },
  },
};
//   methods: {
//     signup() {
//       if (this.name && this.email && this.password) {
//         console.log("we made it");
//         fetch("https://ecommerce-pr.herokuapp.com/users/signup", {
//           method: "POST",
//           body: JSON.stringify({
//             name: this.name,
//             email: this.email,
//             password: this.password,
//           }),
//           headers: {
//             "Content-type": "application/json; charset=UTF-8",
//           },
//         })
//           .then((data) => data.json())
//           .then((user) => {
//             console.log(user);
//             localStorage.setItem("id", user._id);
//             localStorage.setItem("name", user.name);
//             localStorage.setItem("email", user.email);
//             this.$router.push({ name: "login" });
//           });
//       }
//     },
//   },
// };
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
.main {
  padding-bottom: 50px;
  width: 80%;
  margin: 0 auto;
  padding: 100px;
  display: grid;
  grid:
    "username phone"
    "password brief"
    "email brief"
    "btn btn";
  gap: 35px;
  background-color: #ac8c8cb9;
}
@media (max-width: 767px) {
  .main {
    grid: "username" "phone" "password" "brief" "email" "btn";
    gap: 45px;
  }
}
.main .user {
  grid-area: username;
}
.main .phone {
  grid-area: phone;
}
.main .email {
  grid-area: email;
}
.main .brief {
  grid-area: brief;
}
.main .btn {
  grid-area: btn;
}
.main div label {
  display: block;
  margin-bottom: 5px;
}
.main div:not(.phone, .brief) label::after {
  content: " *";
  color: rgb(139, 78, 78);
}
.main div input {
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  outline: none;
  border: none;
}
.main div input[type="number"]::-webkit-outer-spin-button,
.main div input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.main .brief textarea {
  width: 100%;
  height: 100%;
  padding: 10px;
  outline: none;
  border: none;
  resize: none;
}
.main .btn {
  margin-top: 15px;
  padding: 15px;
  text-decoration: none;
  text-align: center;
  background-color: #865454ee;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -ms-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
}
.main .btn:hover {
  filter: brightness(80%);
  -webkit-filter: brightness(80%);
}
</style>