<template>
  <div class="about-section">
    <div class="inner-container">
      <h1>American Sterns</h1>
      <p class="text">The perfect fit for your unique style !...</p>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
}

.about-section {
  background: url("https://i.postimg.cc/PrTh7jqC/best-perfumes-for-women-budget-m-2.jpg")
    no-repeat left;
  background-size: 55%;
  background-color: #fdfdfd;
  overflow: hidden;
  padding: 100px 0;
}

.inner-container {
  width: 55%;
  float: right;
  background-color: #2e87dbb6;
  padding: 150px;
}

.inner-container h1 {
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 900px;
}
.text {
  font-size: 13px;
  color: #413e3e;
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
