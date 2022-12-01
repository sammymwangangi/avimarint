<template>
  <div>
    <section class="py-5">
      <div class="container py-5">
              <!-- crumbs -->
        <nav aria-label="breadcrumb" id="breadcrumb" style="border-radius: 0;">
          <ol class="breadcrumb bg-transparent">
            <li class="breadcrumb-item"><a :href="'/'">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Cart</li>
          </ol>
        </nav>
        <span id="headerOne" v-if="items.length > 0">
          <h5>
            <strong>Cart ({{ items.length }} items)</strong>
          </h5>
          <div class="card my-3 rounded-0 p-2">
            <div class="row">
              <div class="col-xs-12 col-sm-7 col-md-8 col-lg-9">
                <div class="table-responsive">
                  <table class="table table-sm table-bordered text-center">
                    <thead class="bg-secondary text-white">
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, key) in items" :key="key">
                        <td>
                          <i
                            class="ri-close-line ri-1x  bg-danger text-white"
                            @click="removeFromCart(item)"
                            style="cursor: pointer;position: relative;top:3px;"
                          ></i>
                          | {{ item.productName | capitalize }}
                          <span class="text-primary">{{
                            item.productUnit
                          }}</span>
                        </td>
                        <td>{{ item.price | currency }}</td>
                        <td class="pl-2 pr-2" style="width: 150px;">
                          <div class="input-group input-group-sm">
                            <div class="input-group-prepend">
                              <span
                                class="input-group-text bg-danger btn-sm text-white"
                                @click="decreaseQuantity(item)"
                                style="cursor: pointer"
                                ><i class="ri-subtract-line"></i
                              ></span>
                            </div>
                            <!--                    <select @input="updateQuantity($event,item)" class="form-control text-dark">-->
                            <!--                      <option>1</option>-->
                            <!--                      <option>2</option>-->
                            <!--                    </select>-->
                            <!--                    <input type="text" class="form-control text-dark" @keypress="isNumber($event)" @input="updateQuantity($event,item)" :value="`${item.productQuantity}`"  aria-label="Amount (to the nearest dollar)">-->
                            <input
                              type="text"
                              class="form-control text-center"
                              :value="`${item.productQuantity}`"
                              disabled
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <div class="input-group-append">
                              <span
                                class="input-group-text bg-success input-group-sm text-white"
                                @click="increaseQuantity(item)"
                                style="cursor: pointer"
                                ><i class="ri-add-line"></i>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>{{ item.subTotal | currency }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
                <h4 class="border-bottom  border-dark">Cart Totals</h4>
                <ul class="list-group list-group-flush pl-0">
                  <li class="list-group-item">
                    <span>Subtotal: </span
                    ><strong class="ml-4">{{ cartTotal | currency }}</strong>
                  </li>
                  <li class="list-group-item">
                    <span>Discount: </span><span class="ml-4">__</span>
                  </li>
                  <li class="list-group-item">
                    <span>Total: </span
                    ><strong class="ml-4">{{ cartTotal | currency }}</strong>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end row -->
            <hr />
            <div
              class="text-md-right text-lg-right d-sm-block d-md-inline-block d-lg-inline-block"
            >
              <nuxt-link to="/" class="btn btn-info btn-sm text-uppercase mr-3"
                ><i class="ri-arrow-left-fill"></i> Continue Shopping</nuxt-link
              >
              <nuxt-link
                to="/checkout"
                class="btn btn-dark btn-sm  text-uppercase"
                >Proceed to Checkout<i class="ri-arrow-right-fill"></i
              ></nuxt-link>
            </div>
          </div>
        </span>
        <span v-else>
          <div class="card my-3 rounded-0">
            <div class="card-header bg-secondary text-white">
              <h5>Your cart is empty!</h5>
            </div>
            <div class="card-body p-2">
              <nuxt-link
                to="/"
                class="btn btn-info btn-sm text-uppercase float-left"
              >
                <i class="ri-arrow-left-fill"></i>
                Continue Shopping
              </nuxt-link>
            </div>
          </div>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import cartTotal from '@/mixins/cartTotal';

export default {
  mixins: [cartTotal],
  data() {
    return {
      quantity: null,
    };
  },
  computed: {
    ...mapState({
      items: (state) => state.cart.cart,
    }),
  },
  methods: {
    removeFromCart(item) {
      this.$store.commit('cart/removeFromCart', item);
    },
    updateQuantity(event, item) {
      const quantity = event.target.value;
      const record = {
        productId: item.productId,
        productQuantity: quantity,
      };
      this.$store.commit('cart/updateQuantity', record);
    },
    increaseQuantity(item) {
      if (item.productQuantity < 10) {
        this.$store.commit('cart/increaseQuantity', item);
      } else {
        return false;
      }
    },
    decreaseQuantity(item) {
      this.$store.commit('cart/decreaseQuantity', item);
    },

    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      let charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
};
</script>
<style scoped>
tr {
  padding: 10px !important;
}
@media screen and (max-width: 481px) {
  #breadcrumb {
    position: relative;
    top: 37px;
    overflow: hidden;
  }
  #headerOne{
     position: relative;
    top: 25px; 
  }
}
</style>
