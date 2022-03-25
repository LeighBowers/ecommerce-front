<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <router-link class="navbar-brand" to="/">GLAZ PERFUME</router-link>

        <div>
          <router-link class="btn btn-primary my-2 my-sm-0" to="/about"
            >About</router-link
          >
          <router-link class="btn btn-primary my-2 my-sm-0" to="/contact"
            >Contact</router-link
          >
        </div>
        <div class="ml-auto">
          <router-link
            class="btn btn-primary my-2 my-sm-0"
            to="/login"
            v-if="isLoggedin === false"
            >Login</router-link
          >
          <!-- <router-link to="/contact"><button>Contact</button></router-link> -->
          <div v-if="user.id">
            <!-- <img :src="user.photoURL" class="img-thumbnail profile-image" alt /> -->
            <router-link to="/cart">
              <button class="cart">
                <img
                  src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                  width="20"
                />
                <!-- <i class='bx bxs-cart'></i> -->
                <span class="badge badge-danger badge-pill">{{
                  cart.length
                }}</span>
              </button>
            </router-link>
          </div>

          <span v-if="isLoggedin === true">
            <router-link to="/profile">
              <button class="btn">Profile</button>
            </router-link>
            <button @click="logOut" class="btn">Logout</button></span
          >
        </div>
      </nav>
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Base",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("account", ["user", "isLoggedin"]),
    ...mapGetters("product", ["cart"]),
  },
  methods: {
    ...mapActions("account", ["logOut"]),
  },
  created() {},
};
</script>

<style>
nav {
  background-color: rgb(161, 160, 161);
}
.navbar-brand {
  font-weight: bold;
  font-size: 25px;
  /* font-family: Comic; */
  color: #141313 !important;
  font-style: italic;
}
/* .profile-image {
  width: 50px;
  border-radius: 100% !important;
} */
.page-container {
  padding-top: 81px;
}
.btn {
  color: #0c0b0b !important;
  border-radius: 0%;
  font-weight: bold;
  background: #9c8f8f;
  border: rgb(120, 128, 128);
}
.btn:hover {
  background: #7a5b5b;
}
input {
  border-radius: 0%;
}
.btn:focus {
  background: rgb(120, 128, 128);
}

input {
  border-radius: 0%;
}
.btn:focus {
  background: rgb(239, 247, 247);
}
.cart {
  border-radius: 50%;
  height: 30px;
}
.ml-auto {
  display: flex;
}
</style>