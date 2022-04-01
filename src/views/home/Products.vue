<template>
  <div style="padding: 20px">
    <!-- <h1>{{ name }} - {{ email }}</h1> -->
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "../../components/products/ProductCard";
export default {
  data() {
    return {
      // name: localStorage.getItem("name"),
      // email: localStorage.getItem("email"),
    };
  },
  computed: {
    ...mapGetters("product", ["products"]),
  },
  components: { ProductCard },
  methods: {
    ...mapActions("product", ["getProducts", "addCart", "removeCart"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
</style>