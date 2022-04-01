  <template>
  <div>
    <div id="perfume-collection">
      <div class="container">
        <div class="sc-content">
          <h1>The Perfect Perfume Shop</h1>
          <p class="description">
            We Believe Perfume is a mask of identity and the finail touch of
            style.
          </p>
          <!-- <a href="#">discover now</a> -->
        </div>
        <div class="sc-media">
          <div class="sc-media-bg">
            <img
              src="https://i.postimg.cc/JzJCC65T/best-perfumes-for-women-budget-m-2.jpg"
              alt="sc-image"
              style="width: 100%"
            />
          </div>
        </div>
      </div>
      <Product />
    </div>
    <div></div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Product from "./Products.vue";
export default {
  components: {
    Product,
  },
  methods: {
    ...mapActions("product", ["getProducts"]),
  },
  created() {
    this.getProducts();
  },
};
</script>
<style scoped>
#perfume-collection {
  margin-top: 25px;
}
.container {
  margin: 0 auto;
  background-color: #571a4496;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
#perfume-collection .container .sc-content {
  width: 60%;
  padding-top: 3.4rem;
  padding-right: 3rem;
  padding-bottom: 2rem;
}

.sc-media {
  z-index: 5;
  width: 45%;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}
</style>
