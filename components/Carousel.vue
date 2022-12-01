<template>
  <div>
      <b-carousel v-if="carousels.length>1"
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
  >
    <!-- Text slides with image -->
    <b-carousel-slide v-for="carousel in carousels" :key="carousel._id"
                      :caption="carousel.caption"
                      :text="carousel.details"
                      img-src="https://portiasoftwares.com/wp-content/uploads/2022/11/shopping-scaled.jpg"
    >
      <template #img>
        <NuxtImg
            class="d-block img-fluid w-100"
            src="https://portiasoftwares.com/wp-content/uploads/2022/11/shopping-scaled.jpg"
            alt="Avimar"
        />
      </template>

    </b-carousel-slide>
  </b-carousel>
  <b-carousel v-else
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
  >
    <!-- Text slides with image -->
    <b-carousel-slide v-for="carousel in carousels" :key="carousel._id"
                      :caption="carousel.caption"
                      :text="carousel.details"
                      img-src="https://portiasoftwares.com/wp-content/uploads/2022/11/shopping-scaled.jpg"
    >
      <template #img>
        <NuxtImg
            class="d-block img-fluid w-100"
            src="https://portiasoftwares.com/wp-content/uploads/2022/11/shopping-scaled.jpg"
            alt="Avimar"
        />
      </template>

    </b-carousel-slide>
  </b-carousel>
  </div>
</template>

<script>
import {vueWindowSizeMixin} from 'vue-window-size';

export default {
  mixins: [vueWindowSizeMixin],
  props:{
      carousels:{
      required:true,
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  },

}
</script>
<style>

@media screen and (min-width: 769px) {
  #carousel-1 {
    position: relative;
    top: 80px;
    overflow: hidden;
  }
  .carousel-indicators li {
    background-color: #FF1F1F;
  }
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .carousel-indicators li {
    background-color: #FF1F1F;
  }
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
  }
}

@media screen and (min-width: 481px) and (max-width: 575px) {
  .carousel-indicators li {
    background-color: #FF1F1F;
  }
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
  }
}

@media screen and (max-width: 481px) {
  #carousel-1 {
    position: relative;
    top: 110px;
    overflow: hidden;
  }
}
</style>
