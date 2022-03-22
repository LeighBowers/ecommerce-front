<template>
   <!--First row-->
        <div class="row wow fadeIn" data-wow-delay="0.4s">
          <div class="col-lg-12">
            <div class="divider-new">
              <h2 class="h2-responsive">What's new?</h2>
            </div>


            <!--Carousel Wrapper-->
            <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">
              <!--Indicators-->
              <ol class="carousel-indicators">
                <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                <li data-target="#carousel-example-1z" data-slide-to="2"></li>
              </ol>
              <!--/.Indicators-->
              <!--Slides-->
              <div class="carousel-inner" role="listbox">
                <!--First slide-->
                <div class="carousel-item active">
                  <img src="http://mdbootstrap.com/img//Photos/Slides/img%20(107).jpg" alt="First slide">
                  <div class="carousel-caption">
                    <h4>New collection</h4>
                    <br>
                  </div>
                </div>
                <!--/First slide-->
                <!--Second slide-->
                <div class="carousel-item">
                  <img src="http://mdbootstrap.com/img//Photos/Slides/img%20(109).jpg" alt="Second slide">
                  <div class="carousel-caption">
                    <h4>Get discount!</h4>
                    <br>
                  </div>
                </div>
                <!--/Second slide-->
                <!--Third slide-->
                <div class="carousel-item">
                  <img src="http://mdbootstrap.com/img//Photos/Slides/img%20(36).jpg" alt="Third slide">
                  <div class="carousel-caption">
                    <h4>Only now for $10</h4>
                    <br>
                  </div>
                </div>
                <!--/Third slide-->
              </div>
              <!--/.Slides-->
              <!--Controls-->
              <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
              <!--/.Controls-->
            </div>
</template>

<script>
export default {};
</script>

<style>
/* TEMPLATE STYLES */

main {
  padding-top: 3rem;
  padding-bottom: 2rem;
}

.widget-wrapper {
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 2rem;
}

.extra-margins {
  margin-top: 1rem;
  margin-bottom: 2.5rem;
}

.divider-new {
  margin-top: 0;
}

/* footer.page-footer {
  background-color: #414a5c;
  margin-top: 2rem;
} */
</style>