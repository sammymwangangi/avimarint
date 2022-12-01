<template>
  <div>
    <div
      class="
        tw-grid tw-grid-cols-2
        md:tw-grid-cols-4
        lg:tw-grid-cols-6
        tw-gap-2
      "
    >
      <div
        class="
          tw-flex
          tw-flex-col
          tw-min-h-[360px]
          tw-bg-white
          tw-relative
          tw-p-1
          tw-rounded-md
          tw-transition
          tw-duration-700
          tw-ease-in-out
          tw-transform
          hover:-tw-translate-y-1 hover:tw-scale-100
          tw-overflow-hidden
          tw-border
          tw-border-gray-600
        "
      >
        <nuxt-link
          to="/product"
          class="tw-flex-1 tw-no-underline"
        >
          <div
            class="
              ribbon
              tw-absolute
              tw-top-0
              tw-left-0
              tw-bg-gray-900
              tw-text-white
              tw-font-medium
              tw-text-xs
              tw-text-center
              tw-uppercase
              tw-p-1
              tw-shadow-md
              tw-shadow-gray-600/30
              tw-whitespace-no-wrap
            "
          >
            Offer
          </div>
          <NuxtImg
            src="/payroll.jpg"
            loading=lazy
            class="img-fluid"
            width="320"
            height="362"
            alt="product-image"
          />
        </nuxt-link>
        <div
          class="
            tw-text-gray-500
            tw-text-left
            tw-capitalize
            tw-font-thin
            tw-text-xs
            tw-italic
            tw-w-auto
          "
        >
          Men
        </div>
        <div class="tw-text-left">
          <nuxt-link
            to="/"
            class="tw-no-underline tw-text-left"
          >
            <div
              class="
                hover:tw-z-50
                tw-text-gray-600
                tw-font-semibold
                tw-text-sm
                tw-capitalize
                tw-line-clamp-2
              "
            >
              Fashion Men's Suit
            </div>
            <ul
              class="list-unstyled tw-space-y-1 tw-text-xs"
            >
              <li
                class="tw-flex tw-justify-start"
                style="font-family: 'Roboto', sans-serif; margin-bottom: -1rem"
              >
                <div class="tw-text-gray-800">XL</div>
                <span class="tw-font-semibold tw-text-gray-900 tw-ml-2">Ksh 10,000</span>
              </li>
            </ul>
          </nuxt-link>
        </div>
        <div
          class="tw-flex tw-justify-around tw-px-2 tw-py-2"
          style="font-family: 'Roboto', sans-serif; margin-top: 5px"
        >
          <div
            class="tw-self-end"
          >
            <i class="ri-shopping-cart-fill ri-lg"></i>
          </div>
          <div
            class="tw-self-end"
          >
            <i class="ri-whatsapp-fill ri-lg text-success"></i>
          </div>

          <div
            class="tw-self-end"
            style="cursor: pointer"
          >
            <i class="ri-heart-3-fill ri-lg heart"></i>
          </div>
        </div>
      </div>
      <div
        class="
          tw-flex
          tw-flex-col
          tw-min-h-[360px]
          tw-bg-white
          tw-relative
          tw-p-1
          tw-rounded-md
          tw-transition
          tw-duration-700
          tw-ease-in-out
          tw-transform
          hover:-tw-translate-y-1 hover:tw-scale-100
          tw-overflow-hidden
          tw-border
          tw-border-gray-600
        "
      >
        <nuxt-link
          to="/product"
          class="tw-flex-1 tw-no-underline"
        >
          <div
            class="
              ribbon
              tw-absolute
              tw-top-0
              tw-left-0
              tw-bg-gray-900
              tw-text-white
              tw-font-medium
              tw-text-xs
              tw-text-center
              tw-uppercase
              tw-p-1
              tw-shadow-md
              tw-shadow-gray-600/30
              tw-whitespace-no-wrap
            "
          >
            Offer
          </div>
          <NuxtImg
            src="/laptop.jpg"
            loading=lazy
            class="img-fluid"
            width="320"
            height="362"
            alt="product-image"
          />
        </nuxt-link>
        <div
          class="
            tw-text-gray-500
            tw-text-left
            tw-capitalize
            tw-font-thin
            tw-text-xs
            tw-italic
            tw-w-auto
          "
        >
          Laptops
        </div>
        <div class="tw-text-left">
          <nuxt-link
            to="/"
            class="tw-no-underline tw-text-left"
          >
            <div
              class="
                hover:tw-z-50
                tw-text-gray-600
                tw-font-semibold
                tw-text-sm
                tw-capitalize
                tw-line-clamp-2
              "
            >
            MacBook Pro 16"
            </div>
            <ul
              class="list-unstyled tw-space-y-1 tw-text-xs"
            >
              <li
                class="tw-flex tw-justify-start"
                style="font-family: 'Roboto', sans-serif; margin-bottom: -1rem"
              >
                <div class="tw-text-gray-800">1TB 2021 32GB</div>
                <span class="tw-font-semibold tw-text-gray-900 tw-ml-2">Ksh 480,000</span>
              </li>
            </ul>
          </nuxt-link>
        </div>
        <div
          class="tw-flex tw-justify-around tw-px-2 tw-py-2"
          style="font-family: 'Roboto', sans-serif; margin-top: 5px"
        >
          <div
            class="tw-self-end"
          >
            <i class="ri-shopping-cart-fill ri-lg"></i>
          </div>
          <div
            class="tw-self-end"
          >
            <i class="ri-whatsapp-fill ri-lg text-success"></i>
          </div>

          <div
            class="tw-self-end"
            style="cursor: pointer"
          >
            <i class="ri-heart-3-fill ri-lg heart"></i>
          </div>
        </div>
      </div>
      <div
        class="
          tw-flex
          tw-flex-col
          tw-min-h-[360px]
          tw-bg-white
          tw-relative
          tw-p-1
          tw-rounded-md
          tw-transition
          tw-duration-700
          tw-ease-in-out
          tw-transform
          hover:-tw-translate-y-1 hover:tw-scale-100
          tw-overflow-hidden
          tw-border
          tw-border-gray-600
        "
      >
        <nuxt-link
          to="/product"
          class="tw-flex-1 tw-no-underline"
        >
          <NuxtImg
            src="/phone.jpg"
            loading=lazy
            class="img-fluid"
            width="320"
            height="362"
            alt="product-image"
          />
        </nuxt-link>
        <div
          class="
            tw-text-gray-500
            tw-text-left
            tw-capitalize
            tw-font-thin
            tw-text-xs
            tw-italic
            tw-w-auto
          "
        >
          Mobile phones
        </div>
        <div class="tw-text-left">
          <nuxt-link
            to="/"
            class="tw-no-underline tw-text-left"
          >
            <div
              class="
                hover:tw-z-50
                tw-text-gray-600
                tw-font-semibold
                tw-text-sm
                tw-capitalize
                tw-line-clamp-2
              "
            >
            One Plus Oneplus 10 Pro
            </div>
            <ul
              class="list-unstyled tw-space-y-1 tw-text-xs"
            >
              <li
                class="tw-flex tw-justify-start"
                style="font-family: 'Roboto', sans-serif; margin-bottom: -1rem"
              >
                <div class="tw-text-gray-800">256gb 12gb Ram</div>
                <span class="tw-font-semibold tw-text-gray-900 tw-ml-2">Ksh 110,000</span>
              </li>
            </ul>
          </nuxt-link>
        </div>
        <div
          class="tw-flex tw-justify-around tw-px-2 tw-py-2"
          style="font-family: 'Roboto', sans-serif; margin-top: 5px"
        >
          <div
            class="tw-self-end"
          >
            <i class="ri-shopping-cart-fill ri-lg"></i>
          </div>
          <div
            class="tw-self-end"
          >
            <i class="ri-whatsapp-fill ri-lg text-success"></i>
          </div>

          <div
            class="tw-self-end"
            style="cursor: pointer"
          >
            <i class="ri-heart-3-fill ri-lg heart"></i>
          </div>
        </div>
      </div>
      <div
        class="
          tw-flex
          tw-flex-col
          tw-min-h-[360px]
          tw-bg-white
          tw-relative
          tw-p-1
          tw-rounded-md
          tw-transition
          tw-duration-700
          tw-ease-in-out
          tw-transform
          hover:-tw-translate-y-1 hover:tw-scale-100
          tw-overflow-hidden
          tw-border
          tw-border-gray-600
        "
      >
        <nuxt-link
          to="/product"
          class="tw-flex-1 tw-no-underline"
        >
          
          <NuxtImg
            src="/placeholder.jpg"
            loading=lazy
            class="img-fluid"
            width="320"
            height="362"
            alt="product-image"
          />
        </nuxt-link>
        <div
          class="
            tw-text-gray-500
            tw-text-left
            tw-capitalize
            tw-font-thin
            tw-text-xs
            tw-italic
            tw-w-auto
          "
        >
          Men
        </div>
        <div class="tw-text-left">
          <nuxt-link
            to="/"
            class="tw-no-underline tw-text-left"
          >
            <div
              class="
                hover:tw-z-50
                tw-text-gray-600
                tw-font-semibold
                tw-text-sm
                tw-capitalize
                tw-line-clamp-2
              "
            >
              Fashion Men's Suit
            </div>
            <ul
              class="list-unstyled tw-space-y-1 tw-text-xs"
            >
              <li
                class="tw-flex tw-justify-start"
                style="font-family: 'Roboto', sans-serif; margin-bottom: -1rem"
              >
                <div class="tw-text-gray-800">XL</div>
                <span class="tw-font-semibold tw-text-gray-900 tw-ml-2">Ksh 10,000</span>
              </li>
            </ul>
          </nuxt-link>
        </div>
        <div
          class="tw-flex tw-justify-around tw-px-2 tw-py-2"
          style="font-family: 'Roboto', sans-serif; margin-top: 5px"
        >
          <div
            class="tw-self-end"
          >
            <i class="ri-shopping-cart-fill ri-lg"></i>
          </div>
          <div
            class="tw-self-end"
          >
            <i class="ri-whatsapp-fill ri-lg text-success"></i>
          </div>

          <div
            class="tw-self-end"
            style="cursor: pointer"
          >
            <i class="ri-heart-3-fill ri-lg heart"></i>
          </div>
        </div>
      </div>
      <div
        class="
          tw-flex
          tw-flex-col
          tw-min-h-[360px]
          tw-bg-white
          tw-relative
          tw-p-1
          tw-rounded-md
          tw-transition
          tw-duration-700
          tw-ease-in-out
          tw-transform
          hover:-tw-translate-y-1 hover:tw-scale-100
          tw-overflow-hidden
          tw-border
          tw-border-gray-600
        "
      >
        <nuxt-link
          to="/product"
          class="tw-flex-1 tw-no-underline"
        >
          
          <NuxtImg
            src="/placeholder.jpg"
            loading=lazy
            class="img-fluid"
            width="320"
            height="362"
            alt="product-image"
          />
        </nuxt-link>
        <div
          class="
            tw-text-gray-500
            tw-text-left
            tw-capitalize
            tw-font-thin
            tw-text-xs
            tw-italic
            tw-w-auto
          "
        >
          Men
        </div>
        <div class="tw-text-left">
          <nuxt-link
            to="/"
            class="tw-no-underline tw-text-left"
          >
            <div
              class="
                hover:tw-z-50
                tw-text-gray-600
                tw-font-semibold
                tw-text-sm
                tw-capitalize
                tw-line-clamp-2
              "
            >
              Fashion Men's Suit
            </div>
            <ul
              class="list-unstyled tw-space-y-1 tw-text-xs"
            >
              <li
                class="tw-flex tw-justify-start"
                style="font-family: 'Roboto', sans-serif; margin-bottom: -1rem"
              >
                <div class="tw-text-gray-800">XL</div>
                <span class="tw-font-semibold tw-text-gray-900 tw-ml-2">Ksh 10,000</span>
              </li>
            </ul>
          </nuxt-link>
        </div>
        <div
          class="tw-flex tw-justify-around tw-px-2 tw-py-2"
          style="font-family: 'Roboto', sans-serif; margin-top: 5px"
        >
          <div
            class="tw-self-end"
          >
            <i class="ri-shopping-cart-fill ri-lg"></i>
          </div>
          <div
            class="tw-self-end"
          >
            <i class="ri-whatsapp-fill ri-lg text-success"></i>
          </div>

          <div
            class="tw-self-end"
            style="cursor: pointer"
          >
            <i class="ri-heart-3-fill ri-lg heart"></i>
          </div>
        </div>
      </div>
      <div
        class="
          tw-flex
          tw-flex-col
          tw-min-h-[360px]
          tw-bg-white
          tw-relative
          tw-p-1
          tw-rounded-md
          tw-transition
          tw-duration-700
          tw-ease-in-out
          tw-transform
          hover:-tw-translate-y-1 hover:tw-scale-100
          tw-overflow-hidden
          tw-border
          tw-border-gray-600
        "
      >
        <nuxt-link
          to="/product"
          class="tw-flex-1 tw-no-underline"
        >
          
          <NuxtImg
            src="/placeholder.jpg"
            loading=lazy
            class="img-fluid"
            width="320"
            height="362"
            alt="product-image"
          />
        </nuxt-link>
        <div
          class="
            tw-text-gray-500
            tw-text-left
            tw-capitalize
            tw-font-thin
            tw-text-xs
            tw-italic
            tw-w-auto
          "
        >
          Men
        </div>
        <div class="tw-text-left">
          <nuxt-link
            to="/"
            class="tw-no-underline tw-text-left"
          >
            <div
              class="
                hover:tw-z-50
                tw-text-gray-600
                tw-font-semibold
                tw-text-sm
                tw-capitalize
                tw-line-clamp-2
              "
            >
              Fashion Men's Suit
            </div>
            <ul
              class="list-unstyled tw-space-y-1 tw-text-xs"
            >
              <li
                class="tw-flex tw-justify-start"
                style="font-family: 'Roboto', sans-serif; margin-bottom: -1rem"
              >
                <div class="tw-text-gray-800">XL</div>
                <span class="tw-font-semibold tw-text-gray-900 tw-ml-2">Ksh 10,000</span>
              </li>
            </ul>
          </nuxt-link>
        </div>
        <div
          class="tw-flex tw-justify-around tw-px-2 tw-py-2"
          style="font-family: 'Roboto', sans-serif; margin-top: 5px"
        >
          <div
            class="tw-self-end"
          >
            <i class="ri-shopping-cart-fill ri-lg"></i>
          </div>
          <div
            class="tw-self-end"
          >
            <i class="ri-whatsapp-fill ri-lg text-success"></i>
          </div>

          <div
            class="tw-self-end"
            style="cursor: pointer"
          >
            <i class="ri-heart-3-fill ri-lg heart"></i>
          </div>
        </div>
      </div>
      <!-- end products column-->
    </div>
    <!-- end products row -->
  </div>
</template>

<script>
import { mapState } from "vuex";
const AddToCart = () => import("~/components/Home/AddCart");
const WhatsAppOrder = () => import("~/components/Home/WpOrder");

export default {
  components: {
    AddToCart,
    WhatsAppOrder,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    displayId: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      activeProduct: "",
      price: {},
      selectedQuantity: null,
    };
  },
  computed: {
    ...mapState({
      favorite: (state) => state.favorite.favorite,
    }),
  },
  methods: {
    productInfo(product) {
      let kivy = product.quantities[0];
      this.activeProduct = product;
      this.price = kivy;
    },
    whatsAppInfo(product) {
      let kivy = product.quantities[0];
      this.activeProduct = product;
      this.price = kivy;
    },
    wishList(product) {
      let found = this.favorite.find((record) => record._id === product._id);
      if (found) {
        this.$store.commit("favorite/removeFromFavorite", product);
      } else {
        this.$store.commit("favorite/addToFavorite", product);
        this.$toast.success("Added to favorites");
      }
    },
  },
};
</script>

<style scoped>
.modal-open .modal,
.modal-btn:focus {
  outline: none;
}

i.heart {
  color: #ff4081;
}

.cart-modal {
  border-radius: 0;
}

.ribbon {
  width: 150px;
  height: 24px;
  margin-left: -50px;
  margin-top: 15px;
  -ms-transform: rotate(-45deg); /* IE 9 */
  -webkit-transform: rotate(-45deg); /* Safari prior 9.0 */
  transform: rotate(-45deg); /* Standard syntax */
}

@media screen and (max-width: 481px) {
  .product-quantity {
    font-size: 0.8em;
  }
}
</style>
