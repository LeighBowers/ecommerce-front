<template>
  <div class="container" style="padding: 30px">
    <div class="row d-flex justify-content-center">
      <div class="list-group col-8">
        <a
          v-for="item in cart"
          :key="item._id"
          href="#"
          class="
            list-group-item list-group-item-action
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <img :src="item.product.img" alt height="60" width="60" />
          <p class="h4">{{ item.product.name }}</p>
          <div class="row">
            <div class="mr-2">
              <p>Unique Price</p>
              <p>{{ item.product.price }}</p>
            </div>
            <div class="mr-2">
              <p>Total Price</p>
              <p>R{{ item.product.price * item.qty }}</p>
            </div>
            <div>
              <p>Quantity</p>
              <p>{{ item.qty }}</p>
            </div>
          </div>
        </a>
        <div
          class="
            list-group-item list-group-item-action
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <p class="h4">Total</p>
          <div>
            <p>Total Price</p>
            <p>R{{ totalPrice }}</p>
          </div>
        </div>
        <button
          @click="checkout()"
          type="button"
          class="btn btn-dark btn-lg btn-block mt-4"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    ...mapGetters("product", ["cart"]),
    ...mapGetters("account", ["user"]),
  },
  methods: {
    ...mapActions("product", ["removeCart"]),
    calcPrice() {
      this.cart.forEach((element) => {
        this.totalPrice += element.product.price * element.qty;
      });
    },
    checkout() {
      const vm = this;
      setTimeout(() => {
        vm.removeCart();
        alert("Purchase successful!");
        vm.$router.push("/");
      }, 2000);
    },
  },
  mounted() {
    this.calcPrice();
  },
};
</script>

<style>
</style>