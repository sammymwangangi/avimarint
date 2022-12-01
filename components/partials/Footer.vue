<template>
  <div>
    <div class="bg-light clearfix" id="apps">
      <div class="text-center p-1 clearfix">
        <NuxtImg
          format="webp"
          src="/android.webp"
          class="tw-cursor-pointer"
          width="149"
          height="47"
          alt="Google play store"
        />
        <NuxtImg
          format="webp"
          src="/ios.webp"
          class="tw-cursor-pointer"
          width="149"
          height="46"
          alt="Apple store"
        />
        
        <NuxtImg
          format="webp"
          src="/till.jpeg"
          class="tw-cursor-pointer tw-rounded-lg"
          width="168"
          height="48"
          alt="Till Number"
        />
      </div>
    </div>
    <footer class="tw-bg-black pt-2 border-top">
      <div class="container-fluid tw-py-4">
        <div
          class="
            tw-grid tw-grid-cols-1
            sm:tw-grid-cols-1
            md:tw-grid-cols-2
            lg:tw-grid-cols-4
            xl:tw-grid-cols-4
            tw-gap-4 tw-px-2
            sm:tw-px-3
            md:tw-px-2
            lg:tw-px-2
          "
        >
          <div class="">
            <span
              class="
                tw-text-sm tw-text-white tw-font-medium tw-uppercase tw-mb-4
              "
              >Get In Touch</span
            >
            <ul
              class="
                list-unstyled
                tw-text-xs tw-text-white tw-tracking-wide tw-leading-relaxed
              "
            >
              <li>Phone : <span class="tw-italic">0731722682</span></li>
              <li>
                Email :
                <span class="tw-italic">hello@avimar.online</span>
              </li>
              <li>
                Store location: <span class="tw-italic">Allsops,Ruaraka-Nairobi</span>
              </li>
            </ul>
            <span
              class="
                tw-text-sm tw-text-white tw-font-medium tw-uppercase tw-mb-4
              "
              >Find us on
            </span>
            <ul class="list-unstyled text-small">
              <li>
                <a
                  href="https://www.facebook.com/avimar/"
                  target="_blank"
                  rel="noopener"
                  class="tw-no-underline tw-text-white"
                  ><fa
                    :icon="['fab', 'facebook']"
                    class="text-danger"
                    title="Facebook"
                  ></fa>
                  Facebook</a
                >
              </li>
              <li>
                <a
                  href="https://www.twitter.com/avimar/"
                  target="_blank"
                  rel="noopener"
                  class="tw-no-underline tw-text-white"
                  ><fa
                    :icon="['fab', 'twitter']"
                    class="text-danger"
                    title="Twitter"
                  ></fa>
                  Twitter</a
                >
              </li>
              <li>
                <a
                  href="https://instagram.com/avimar/"
                  target="_blank"
                  rel="noopener"
                  class="tw-no-underline tw-text-white"
                  ><fa
                    :icon="['fab', 'instagram']"
                    class="text-danger"
                    title="Instagram"
                  ></fa>
                  Instagram</a
                >
              </li>
            </ul>
          </div>

          <div class="flex flex-col">
            <div
              class="
                tw-text-sm tw-text-white tw-font-medium tw-uppercase tw-mb-4
              "
            >
              Payment Methods
            </div>
            <div class="tw-flex tw-space-x-2 tw-mb-4">
              <NuxtImg
                class="tw-w-10 tw-h-6"
                :src="`/mpesa.png`"
                alt="MPESA"
              />
              <NuxtImg
                class="tw-w-10 tw-h-6"
                :src="`/mastercard.png`"
                alt="Mastercard"
              />
              <NuxtImg class="tw-w-10 tw-h-6" :src="`/visa.png`" alt="Visa" />
            </div>
            <div
              class="
                tw-text-sm tw-text-white tw-font-medium tw-uppercase tw-mb-4
              "
            >
              How to pay
            </div>
            <div
              class="
                tw-text-xs tw-text-white tw-tracking-wide tw-leading-relaxed
              "
            >
            We accept payments in Cryptocurrencies like Bitcoin, USDT and BUSD.
            </div>
          </div>

          <div class="">
            <span
              class="
                tw-text-white tw-text-sm tw-font-medium tw-uppercase tw-mb-4
              "
              >Categories</span
            >
            <template>
              <div class="row">
                <div class="col-6">
                  <ul class="list-unstyled">
                    <li>
                      <nuxt-link
                        class="tw-text-xs tw-no-underline tw-text-white
                          hover:tw-text-red-600 tw-capitalize"
                        to="#"
                        >About Us</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link
                        class="tw-text-xs tw-no-underline tw-text-white
                          hover:tw-text-red-600 tw-capitalize"
                        to="#"
                        >Contact Us</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link
                        class="tw-text-xs tw-no-underline tw-text-white
                          hover:tw-text-red-600 tw-capitalize"
                        to="#"
                        >Terms & Conditions</nuxt-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </div>

          <div class="">
            <span
              class="
                tw-text-sm tw-text-white tw-font-medium tw-uppercase tw-mb-4
              "
              >Quick Links</span
            >
            <div class="tw-grid tw-grid-cols-2 tw-gap-4">
              <div class="">
                <ul class="list-unstyled tw-text-xs tw-space-y-2">
                  <li>
                    <nuxt-link
                      class="
                        tw-no-underline tw-text-white
                        hover:tw-text-red-600
                      "
                      to="#"
                      >About Us</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="
                        tw-no-underline tw-text-white
                        hover:tw-text-red-600
                      "
                      to="#"
                      >Contact Us</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="
                        tw-no-underline tw-text-white
                        hover:tw-text-red-600
                      "
                      to="#"
                      >FAQs</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="
                        tw-no-underline tw-text-white
                        hover:tw-text-red-600
                      "
                      to="#"
                      >Terms & Conditions</nuxt-link
                    >
                  </li>
                </ul>
              </div>
              <!-- <div class="">
                <ul class="list-unstyled tw-text-xs tw-space-y-2">
                  <li>
                    <nuxt-link
                      class="
                        tw-no-underline tw-text-white
                        hover:tw-text-red-600
                      "
                      to="#"
                      >Corporate Purchase
                    </nuxt-link>
                  </li>
                </ul>
              </div> -->
            </div>
          </div>
        </div>

        <div class="tw-text-center">
          <hr style="background: #616161" />
          <small class="d-block tw-mb-3 tw-text-center tw-text-white"
            >Avimar&copy;
            <span class="tw-text-blue-500">2022.</span> All Rights
            Reserved</small
          >
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      itemsPerRow: 9,
    };
  },
  async fetch() {
    await this.$store.dispatch("menus/getCategories");
  },
  computed: {
    categories() {
      return this.$store.state.menus.categories;
    },
    groupedCategories() {
      return this.categories.reduce((accumulator, category, index) => {
        if (index % this.itemsPerRow === 0) {
          accumulator.push([category]);
        } else {
          accumulator[accumulator.length - 1].push(category);
        }
        return accumulator;
      }, []);
    },
  },
};
</script>
<style>
footer {
  font-family: "Roboto", sans-serif;
}
</style>
