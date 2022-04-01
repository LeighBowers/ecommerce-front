<template>
  <div class="login-page">
    <div class="wallpaper-register"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div class="card login" v-bind:class="{ error: emptyFields }">
            <h1>Sign Up</h1>
            <form class="form-group" @submit.prevent="doRegister()">
              <input
                v-model="name"
                type="name"
                class="form-control"
                placeholder="Name"
                required
              />
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="Email"
                required
              />
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Password"
                required
              />
              <input
                v-model="confirmPassword"
                type="password"
                class="form-control"
                placeholder="Confrim Password"
                required
              />
              <input type="submit" class="btn btn-primary" />
              <p>
                Already have an account?
                <router-link to="/login">
                  <a>Sign In</a>
                </router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import API from "../../store/api/api";
export default {
  // name: "Base",
  //
  name: "Signin",
  data() {
    return {
      name: "",
      email: "",
      password: "",
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
</script>

<style >
p {
  line-height: 1rem;
}

.card {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

/* .login-page {
  align-items: center;
  display: flex;
  height: 100vh;

  background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* .wallpaper-register {
  background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
} */

h1 {
  margin-bottom: 1.5rem;
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>