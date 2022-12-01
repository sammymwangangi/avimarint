<template>
  <div>
    <i v-for="(n,key) in maxStars"
       :class="getClass(n)"
       :style="getStyle(n)"
       @click="$emit('input', n)" :key="`n-${key}`"></i>
  </div>
</template>
<script>
export default {
  name: 'Rating',
  props: {
    value: { default: 0},
    maxStars: {type: Number, default: 5},
    starredColor: {type: String, default: "orange"},
    blankColor: {type: String, default: "darkgrey"}
  },
  data() {
    return {}
  },
  methods: {
    getClass(n) {
      return {
        "fa": true,
        "fas fa-star": n <= this.value,
        "far fa-star": n > this.value
      }
    },
    getStyle(n) {
      return {
        color: n <= this.value ? this.starredColor : this.blankColor
      }
    }
  }
}
</script>

<style>
/* // floating action button */
.floating_action {
  z-index: 2000;
  position: fixed;
  top: 80%;
  right: 0;
  background-color: transparent;
  color: #fff;
  /* padding: 4px; */
  border-radius: 100px;
  min-width: 95px;
  margin-right: -30px;
  min-height: 36px;
}

.relative {
  position: relative;
}

.call-action {
  text-align: center;

  border-radius: 100%;
  background-color: #E64A19;
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 10px 4px 4px;
  margin-top: -3px;
  font-size: 22px;
}

.floating_action a {
  color: #fff;
  text-decoration: none;
}


</style>
