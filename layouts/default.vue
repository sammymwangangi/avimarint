<template>
  <div>
    <Menu/>
    <nuxt></nuxt>
    <call-button></call-button>
    <whats-app></whats-app>
    <Footer></Footer>
  </div>
</template>

<script>
const Menu = () =>import(/* webpackChunkName: "Menu" */ "~/components/partials/Menu");
const Footer = () =>import(/* webpackChunkName: "Footer" */ "~/components/partials/Footer");
const CallButton = () =>import(/* webpackChunkName: "CallButton" */ "~/components/shared/call");
const WhatsApp = () =>import(/* webpackChunkName: "WhatsApp" */ "~/components/shared/whatsapp");


export default {
  components: {
    Menu,
    Footer,
    CallButton,
    WhatsApp,

  },
}
</script>
<style>

html, body {
  height: 100%;
  background: #F3F5F9;
}

</style>
