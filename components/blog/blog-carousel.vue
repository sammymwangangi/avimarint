<template>
  <div class="container-fluid blog_carousel">
    <b-row>
      <b-col class="crousel">
        <div class="headers">
          <h1>Liquorspring Blog</h1>
          <h2 class="blog small_h">
            Everything you need to know about alcohol
          </h2>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'blogCarousel',
};
</script>

<style scoped>
.blog_carousel {
  color: #2c3e50;
  min-height: 270px;
  background-image: url(/images/blog-banner.jpg);
}
.headers {
  margin-top: 7%;
  font-family: roboto, serif;
}
.headers h1 {
  color: #3498db;
}
.small_h {
  font-size: 24px;
}
@media screen and (min-width: 769px) {
}

@media (min-width: 576px) and (max-width: 768px) {
  .blog_carousel {
    position: relative;
    top: 80px;
    overflow: hidden;
  }
}

@media screen and (min-width: 481px) and (max-width: 575px) {
  .blog_carousel {
    position: relative;
    top: 80px;
    overflow: hidden;
  }
}

@media screen and (max-width: 481px) {
  .blog_carousel {
    position: relative;
    top: 100px;
    overflow: hidden;
  }
}
</style>
