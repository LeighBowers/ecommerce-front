<template>
  <div class="card login" v-bind:class="{ error: emptyFields }">
    <h1>Sign In</h1>
    <form @submit.prevent="login({ email, password })">
      <!-- <form @submit.prevent="signup"> -->
      <div class="main">
        <!-- <div class="user">
          <label for="name">Name</label>
          <input type="text" placeholder="" id="name" required v-model="name" />
        </div> -->
        <div class="pass">
          <label for="pass">Password</label>
          <input
            type="password"
            placeholder=""
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

        <input type="submit" class="btn btn-primary btn-block" />
        <br />
      </div>

      <p>
        Don't have an account?
        <router-link to="/signup">
          <a>Sign up here</a>
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
// ================================================
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      // name: null,
      email: null,
      password: null,
      emptyFields: false,
    };
  },
  methods: {
    ...mapActions("account", ["login"]),
  },

  // methods: {
  //   Signin() {
  //     if (this.email && this.password) {
  //       console.log("we made it");
  //       fetch("https://ecommerce-pr.herokuapp.com/users/login", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           email: this.email,
  //           password: this.password,
  //         }),

  //         headers: {
  //           "Content-type": "application/json; charset=UTF-8",
  //         },
  //       })
  //         .then((data) => data.json())
  //         .then((user) => {
  //           console.log(user);
  //           if (user.accessToken) {
  //             localStorage.setItem("id", user._id);
  //             localStorage.setItem("name", user.name);
  //             localStorage.setItem("email", user.email);
  //             localStorage.setItem("access_token", user.accessToken);

  //             return this.$router.push("/products");
  //           }
};
</script>

<style>
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
  color: rgb(110, 44, 44);
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
  background-color: #8d4848cb;
  color: rgb(107, 42, 42);
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