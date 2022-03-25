<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <div class="card text-left shadow-md">
          <img class="card-img-top" :src="item_product.img" alt />
        </div>
      </div>
      <div class="col-6 text-left text-justify">
        <div class="display-3">{{ item_product.name }}</div>
        <p class="lead text-justify">{{ item_product.description }}</p>
        <div>
          <p class="h3">Price</p>
          <p class="h2">R {{ item_product.price }}.00</p>
        </div>
        <AddToCart :product="item_product" v-if="user.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddToCart from "../../components/details/AddToCart";
import router from "../../router/index";
export default {
  data() {
    return {
      isInCardProp: false,
      storage: JSON.parse(localStorage.getItem("e-comKey")),
      item_product: {}
    };
  },
  // props: ["product"],
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["product"]),
  },
  components: { AddToCart },

  created() {
    let item = this.storage.product.products
      .filter(function (item) {
        return item._id == router.app._route.params.idProduct;
      })
      .pop();
      if (item) {
        this.$store.commit('product/setProduct', item)
        this.item_product = item
      }
  },
};
</script>

<style>
.container-fluid {
  padding: 30px;
}

</style>