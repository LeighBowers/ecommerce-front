<template>
  <!--FONT AWESOME-->
  <!-- <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  /> -->

  <!--FOOTER-->

  <!-- <nav class="navbar navbar-expand-lg navbar-dark sticky-bottom"> -->
  <footer>
    <span class="border-shape"></span>
    <div class="bottom_content">
      <section>
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-telegram"></i></a>
      </section>
      <section>
        <a href="/">Home</a>
        <a href="/about">About us</a>
        <!-- <a href="#">Order</a> -->
        <!-- <a href="#">Retail</a> -->
        <a href="/profile">Member</a>
        <a href="/contact">Contact Us</a>
      </section>
    </div>
    <div class="copyright">
      Copyright © 2021 websitename - All rights reserved
    </div>
  </footer>
  <!-- </nav> -->
</template>

<script>
export default {};
</script>

<style>
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  outline: none !important;
  color: #fff;
}

/* .border-shape {
  background: #001aff96 none repeat scroll 0 0;
  color: #fff;
  display: block;
  height: 3px;
  left: 0;
  margin: 20px auto;
  position: relative;
  right: 0;
  text-align: center;
  top: 0;
  width: 80px;
} */
/* 
.border-shape::before {
  background: #001aff96 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 1px;
  left: 80px;
  margin: 0 auto;
  position: absolute;
  text-align: center;
  top: 1px;
  width: 100px;
} */

/* .border-shape::after {
  background: #001aff96 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 1px;
  margin: 0 auto;
  position: absolute;
  right: 80px;
  text-align: center;
  top: 1px;
  width: 100px;
} */

/*FOOTER*/
footer {
  width: 100%;
  background-color: #571a44dc;
  color: #fff;
}

.top_header {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.top_header section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.top_header span {
  padding: 0 1rem;
}

.top_header .fa {
  font-size: 35px;
}

footer .border-shape {
  width: 40%;
}

footer .border-shape::before {
  width: 100%;
  left: 120px;
}

footer .border-shape::after {
  width: 100%;
  right: 120px;
}

footer .bottom_content section {
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: Center;
}

.bottom_content a {
  margin: 0 20px;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.5s;
}

.bottom_content a:hover {
  color: rgba(255, 255, 255, 1);
}

.copyright {
  padding: 0.8em 0;
  background-color: #571a4496;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
}

@media (max-width: 820px) {
  .top_header {
    padding: 1rem;
    display: block;
  }

  .top_header section {
    margin: 40px 0;
    align-items: left;
    justify-content: left;
  }
  footer .bottom_content section {
    padding: 1rem;
    display: block;
  }
  footer .bottom_content section a {
    padding: 1rem;
    font-size: 12px;
    margin: 0 5px;
    display: inline-block;
  }
}
</style>