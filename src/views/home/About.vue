<template>
  <div class="about-section">
    <div class="inner-container">
      <h1>About Us</h1>
      <p class="text">
        We do research perfume bottle, tester bottle and sample vial wholesalers
        and the designs they offer for each type of customer. Choose a bottle
        shape and size to represent each of the fragrances, and contact us. Ask
        how many bottles/units are required for a minimum purchase and how much
        that minimum purchase costs.
      </p>
      <!-- <div class="skills">
        <span>Web Design</span>
        <span>Photoshop & Illustrator</span>
        <span>Coding</span>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about-section {
  background: url(https://i.postimg.cc/SQdnxMc8/black-perfumes.jpg) no-repeat
    left;
  background-size: 100%;
  background-color: #fdfdfd;
  overflow: hidden;
  /* padding: 48px 48px; */
}

.inner-container {
  width: 55%;
  float: right;
  background-color: #ac8c8cb9;
  padding: 200px;
}

.inner-container h1 {
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 900;
}

.text {
  font-size: 13px;
  color: #221d1d;
  line-height: 30px;
  text-align: justify;
  margin-bottom: 40px;
}

.skills {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 13px;
}

@media screen and (max-width: 1200px) {
  .inner-container {
    padding: 80px;
  }
}

@media screen and (max-width: 1000px) {
  .about-section {
    background-size: 100%;
    padding: 100px 40px;
  }
  .inner-container {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .about-section {
    padding: 0;
  }
  .inner-container {
    padding: 60px;
  }
}
</style>