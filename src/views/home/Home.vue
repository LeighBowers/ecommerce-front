<template>
  <div class="container">
    <section id="perfume-collection">
      <div class="container">
        <div class="sc-content">
          <h1>Glaze Perfume</h1>
          <p class="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a href="#">discover now</a>
        </div>
        <div class="sc-media">
          <div class="sc-media-bg">
            <img
              src="https://i.postimg.cc/JzJCC65T/best-perfumes-for-women-budget-m-2.jpg"
              alt="sc-image"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["cart", "products"]),
  },
  mounted() {
    console.log(this.products);
  },
};
</script>
<style scoped>
#perfume-collection {
  width: 100%;
  display: block;
  margin: 6rem 0rem;
}

#perfume-collection .container {
  margin: 0 auto;
  width: 80%;
  background-color: #ffffff;
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

#perfume-collection .container .sc-content h1 {
  font-family: "Franklin Gothic Medium";
  color: #000000;
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: 1rem;
  line-height: 6rem;
  text-transform: uppercase;
  margin-bottom: 2vw;
}

#perfume-collection .container .sc-content p.description {
  font-family: Cambria;
  color: rgba(89, 89, 89, 0.8);
  font-size: 1rem;
  font-style: italic;
  line-height: 2rem;
  margin-bottom: 4vw;
  padding-right: 4rem;
}

#perfume-collection .container .sc-content a {
  border-bottom: 2px solid #a61458;
  text-decoration: none;
  font-family: "Franklin Gothic Medium";
  color: #000000;
  font-weight: 400;
  text-transform: uppercase;
}

#perfume-collection .container .sc-media {
  width: 40vw;
}

#perfume-collection .container .sc-media .sc-media-bg {
  width: 100%;
  height: auto;
  padding-top: 3vw;
}

#perfume-collection .container .sc-media .sc-media-bg img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 1024px) {
  #perfume-collection {
    width: 100vw;
    display: block;
    margin-top: 0rem;
  }
  #perfume-collection .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  #perfume-collection .container .sc-content {
    width: 80vw;
    padding: 8rem 2rem 2rem;
  }
  #perfume-collection .container .sc-media {
    width: 80vw;
  }
  #perfume-collection .container .sc-content h1 {
    font-size: 5.6vw;
    letter-spacing: 1rem;
    line-height: 4rem;
  }
}

@media only screen and (max-width: 768px) {
  #perfume-collection .container .sc-content h1 {
    font-size: 5.6vw;
    letter-spacing: 0.6rem;
    line-height: 2.4rem;
    margin-bottom: 1rem;
  }
}

@media only screen and (max-width: 480px) {
  #perfume-collection .container .sc-content p.description {
    font-size: 1rem;
    line-height: 1.8rem;
    margin-bottom: 4vw;
    padding-right: 1.2rem;
    text-align: justify;
    margin-bottom: 2rem;
  }
}

#collections {
  width: 100%;
  display: block;
  margin: 6rem 0rem;
  /*  background-color:  #f5f2f1;*/
  padding: 1.4rem 0rem;
}

#collections .container {
  margin: 0 auto;
  width: 80%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

#collections .container .c-1 {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 3rem 0rem 0rem 1rem;
  /*  background-color:  #f5f2f1;*/
}

#collections .container .c-1 .c-1-image-holder {
  width: 100%;
  height: auto;
}

#collections .container .c-1 .c-1-image-holder img {
  width: 100%;
  height: auto;
}

#collections .container .c-2 .c-2-image-holder {
  width: 45%;
  height: auto;
  margin: 3rem auto;
}

#collections .container .c-2 .c-2-image-holder img {
  width: 100%;
  height: auto;
}

#collections .container .c-2 {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 1rem;
  /*  background-color:  #f5f2f1;*/
}

#collections .container .c-2 h2 {
  padding: 1rem 0rem;
  text-align: right;
  font-family: "Franklin Gothic Medium";
  font-size: 1.8rem;
  letter-spacing: 0.094rem;
  text-transform: uppercase;
}

#collections .container .c-2 hr {
  width: 30%;
  margin-left: 70%;
  display: block;
  height: 1px;
  border: 0;
  border-top: 0.1rem solid #a61458;
  padding: 0;
  margin-bottom: 4rem;
}

#collections .container .c-2 p.button {
  background-color: #e6b58f;
  -webkit-box-shadow: 0px 1px 3.92px 0.08px rgba(204, 204, 153, 0.35);
  box-shadow: 0px 1px 3.92px 0.08px rgba(204, 204, 153, 0.35);
  width: 45%;
  text-align: center;
  padding: 0.8rem 0.2rem;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0 auto;
  margin-right: -1%;
  font-weight: 600;
  letter-spacing: 0.1rem;
}

#collections .container .c-2 p.button:hover {
  cursor: pointer;
  background-color: #ffffff;
  color: #ff981f;
  -webkit-transition: background-color 1s ease-in-out 0s;
  -o-transition: background-color 1s ease-in-out 0s;
  transition: background-color 1s ease-in-out 0s;
  -webkit-transition: color 400ms ease-in-out 0s;
  -o-transition: color 400ms ease-in-out 0s;
  transition: color 400ms ease-in-out 0s;
}

#collections .container .c-2 .left {
  position: relative;
  right: -6rem;
  -webkit-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
}

#collections .container .c-2 .right {
  position: relative;
  top: -2rem;
  right: 2rem;
  -webkit-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 1024px) {
  #collections .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  #collections .container .c-1 {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 4rem 0rem 0rem 0rem;
  }
  #collections .container .c-2 .c-2-image-holder {
    width: 50%;
    height: auto;
    margin: 3rem auto;
  }
}

@media only screen and (max-width: 768px) {
  #collections .container .c-2 .c-2-image-holder {
    width: 70%;
    height: auto;
    margin: 3rem auto;
  }
  #collections .container .c-2 .left {
    position: relative;
    right: 0rem;
    margin-bottom: 2rem;
  }
  #collections .container .c-2 .right {
    position: relative;
    top: 0rem;
    right: 0rem;
  }
  #collections .container .c-2 p.button {
    width: 60%;
    padding: 0.8rem 2rem;
  }
}
</style>
