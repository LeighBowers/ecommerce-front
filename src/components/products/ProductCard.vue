<template>
  <div class="card mb-4 shadow-sm">
    <img :src="product.img" class="card-img-top product-image" />
    <div class="card-body">
      <h5 class="card-title text-left">{{ product.name }}</h5>
      <div class="row">
        <router-link
          type="button"
          class="btn btn-secondary btn-lg"
          :to="'/details/' + product._id"
          >Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>

<style>
.card .product-image {
  height: 80px;
  width: 80px;
}
</style>