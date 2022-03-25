<template>
  <div class="login-page">
    <div class="wallpaper-register"></div>

    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div class="card login">
            <h1>Profile</h1>
            <br />
            <form action="" @submit.prevent="getUser()">
              <div class="card">
                <label for="name">Name</label>
                <input type="text" :placeholder="user.name" v-model="newName" />
                <label for="email">Email</label>
                <input
                  type="email"
                  :placeholder="user.email"
                  v-model="newEmail"
                />
              </div>
              <button type="submit" class="btn">updated profile</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Axios from "axios";
import API from "../../store/api/api";
export default {
  name: "Signin",
  data() {
    return {
      storage: JSON.parse(localStorage.getItem("e-comKey")),
      newName: "",
      newEmail: "",
      newPassword: "get",
      newPhone: "9999999999",
      newCart: [],
    };
  },
  computed: {
    ...mapGetters("account", ["user"]),
  },
  methods: {
    getUser() {
      console.log(this.newName, this.newEmail);
      Axios.patch(`${API.URL}/users/${this.storage.account.userData.id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + this.storage.account.userData.accessToken,
        },
        name: this.newName,
        email: this.newEmail,
        password: this.newPassword,
        phone_number: this.newPhone,
        cart: this.newCart,
      }).then(function (data) {
        return data;
      });
    },
  },
};
</script>

<style scope>
/* p {
  line-height: 1rem;
} */

.card {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;
  background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.wallpaper-register {
  background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}

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

