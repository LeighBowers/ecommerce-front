<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <router-link class="navbar-brand" to="/">Glaz Perfume</router-link>
        <router-link class="btn btn-primary my-2 my-sm-0" to="/about"
          >About</router-link
        >

        <div class="ml-auto">
          <div v-if="user.photoURL">
            <!-- <img :src="user.photoURL" class="img-thumbnail profile-image" alt /> -->
            <router-link class="btn btn-primary my-2 my-sm-0" to="/cart">
              <img
                src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                width="50"
                alt
              />
              <span class="badge badge-danger badge-pill">{{
                cart.length
              }}</span>
            </router-link>
          </div>

          <span v-if="isLoggedIn === true">
            | <a @click="logout">Logout</a></span
          >

          <router-link v-else class="btn btn-primary my-2 my-sm-0" to="/login"
            >Login</router-link
          >

          <router-link class="btn btn-primary my-2 my-sm-0" to="/signup"
            >Signup</router-link
          >

          <router-link class="btn btn-primary my-2 my-sm-0" to="/contact"
            >Contact</router-link
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
import { mapGetters } from "vuex";
export default {
  name: "Base",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["cart"]),
  },
};
</script>

<style>
nav {
  background-color: rgb(214, 218, 218);
}
.navbar-brand {
  font-weight: bold;
  font-size: 25px;
  /* font-family: Comic; */
  color: #1a0d0d !important;
}
.profile-image {
  width: 50px;
  border-radius: 100% !important;
}
.page-container {
  padding-top: 81px;
}
.btn {
  border-radius: 0%;
  font-weight: bold;
  background: rgb(143, 146, 146);
  border: rgb(104, 110, 110);
}
.btn:hover {
  background: #d9dfdf;
}
input {
  border-radius: 0%;
}
.btn:focus {
  background: rgb(120, 128, 128);
}
</style>