<template>
  <div id="top-section">
    
    <div class="tw-my-5 tw-py-5 tw-container tw-mx-auto">
      <h1
        class="tw-text-center tw-text-3xl tw-text-red-600 tw-capitalize"
        id="headingOne"
      >
        Avimar International
      </h1>
    </div>
    <!-- end products column-->
    <div class="tw-container tw-mx-auto">
      <div class="tw-p-2">
        <h2
          class="
            tw-text-2xl tw-font-extrabold tw-tracking-tight tw-text-red-600
          "
        >
          Featured Products
        </h2>
        <LazyHydrate when-visible>
          <Products
            :products="homeData.best_beers"
            :display-id="display['best-beers']"
          />
        </LazyHydrate>
      </div>
      <!-- end products column-->
    </div>

    <div class="tw-my-5 tw-container tw-mx-auto">
      <nuxt-img src="/new_arrivals.jpg" />
    </div>

    <!-- best selling spirits -->
    <div class="tw-my-5 tw-container tw-mx-auto">
      <div class="tw-p-2">
        <h2
          class="
            tw-text-2xl tw-font-extrabold tw-tracking-tight tw-text-red-600
          "
        >
          Products on offer
        </h2>
        <LazyHydrate when-visible>
          <Products
            :products="homeData.on_offer"
            :display-id="display['on-offer']"
        /></LazyHydrate>
      </div>
    </div>
    <!-- end products column-->

    <div class="tw-container mx-auto clearfix tw-my-2">
      <h2
        class="tw-bg-white clearfix tw-text-center twp-2 border-bottom tw-mb-4"
        id="headingTwo"
      >
        Shop by Brand
      </h2>
    </div>

    <div class="tw-container mx-auto tw-px-4 tw-py-4 tw-my-2">
      <div
        class="
          tw-bg-white tw-rounded tw-shadow-sm tw-mb-3 tw-pt-4 tw-pl-3 tw-pb-2
        "
      >
        <div class="flex flex-col">
          <div class="tw-text-xl tw-font-medium tw-pb-2 tw-text-red-600">
            Electronics
          </div>
          <a
            href="/"
            class="
              clearfix
              d-inline-block
              text-nowrap text-dark
              tw-p-1 tw-mb-2 tw-no-underline
            "
          >
            <span
              class="
                hover:tw-bg-gray-900 hover:tw-text-white
                tw-py-2
                tw-px-3
                tw-border
                tw-border-gray-600
                tw-rounded-md
                tw-shadow-sm
                tw-text-sm
                tw-leading-4
                tw-font-medium
                tw-text-gray-700
              "
              >Smart TVs</span
            >
          </a>
        </div>
        <a
          href="javascript:void(0)"
          class="
            tw-mt-1 tw-text-gray-900
            hover:tw-text-red-900
            tw-text-left
            tw-px-4
            tw-py-1
            tw-rounded
            tw-ring-1
            tw-ring-gray-900
            tw-no-underline
            tw-shadow
          "
          >Show more</a
        >
      </div>
    </div>

    <div class="tw-container mx-auto tw-px-4">
      <div
        class="
          tw-border-0
          tw-my-2
          tw-px-2
          tw-py-2
          tw-bg-white
          tw-shadow-lg
          tw-rounded
        "
      >
        <div :class="{ readLess: readMore == true }" class="tw-px-4 tw-py-4">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
        <div v-if="readMore == true" class="read-more">
          <a
            @click="readMore = !readMore"
            class="
              tw-cursor-pointer tw-my-6 tw-text-gray-900
              hover:tw-text-red-600
              tw-text-left
              tw-px-4
              tw-py-1
              tw-rounded-full
              tw-ring-1
              tw-ring-red-600
              tw-no-underline
            "
            >Show More</a
          >
        </div>
        <div v-else class="read-less">
          <a
            @click="readMore = !readMore"
            class="
              tw-cursor-pointer tw-my-2 tw-text-gray-900
              hover:tw-text-red-600
              tw-text-left
              tw-px-4
              tw-py-1
              tw-rounded-full
              tw-ring-1
              tw-ring-red-600
              tw-no-underline
            "
            >Show Less</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";
import Carousel from "@/components/Carousel";
import Products from "@/components/HomeProducts";
import { vueWindowSizeMixin } from "vue-window-size";
export default {
  mixins: [vueWindowSizeMixin],
  components: {
    Carousel,
    Products,
    LazyHydrate,
  },

  data() {
    return {
      display: {
        "on-offer": "on-offer",
        featured: "featured",
        "new-arrivals": "new-arrivals",
        "best-spirits": "best-spirits",
        "best-beers": "best-beers",
      },
      default_limit: 13,
      limit_by: 13,
      readMore: true,
    };
  },

  async asyncData({ $http }) {
    try {
      const meta = await $http
        .$get("metas/get-by-category/home")
        .then((response) => response.result);
      const homeData = await $http
        .$get("homepage-data")
        .then((response) => response.result);

      return { meta, homeData };
    } catch (err) {
      const defaultMeta = {
        metadescription: "Click it, Own it",
        title: "Avimar International",
      };
      return { meta: { ...defaultMeta }, homeData: [] };
    }
  },

  methods: {
    simple_toggle(default_limit, brand_length) {
      this.limit_by =
        this.limit_by === default_limit ? brand_length : default_limit;
    },
  },

  head: {
    title: "Avimar International",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Click it, Own it",
      },
    ],
    // link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  },
};
</script>

<style>
.readLess {
  overflow: hidden;
  max-height: 20ch;
}
.read-more,
.read-less {
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

#headingOne,
#headingTwo {
  font-size: 1.7em;
  font-weight: 600;
}
h2 {
  font-size: 1.3em;
  font-weight: 500;
  color: #ed1b24;
}
@media screen and (min-width: 769px) {
  #headingOne,
  #headingTwo {
    position: relative;
    top: 30px;
    overflow: hidden;
  }
  #container-2 {
    margin-top: -40px;
  }
  #top-section {
    margin-top: 40px;
  }
}
@media (min-width: 576px) and (max-width: 768px) {
  #headingOne,
  #headingTwo {
    position: relative;
    top: 20px;
    overflow: hidden;
  }
  #container-2 {
    margin-top: -40px;
  }
  #top-section {
    margin-top: 20px;
  }
}
@media screen and (min-width: 481px) and (max-width: 575px) {
  #headingOne {
    position: relative;
    top: 20px;
    overflow: hidden;
  }
  #container-2 {
    margin-top: -40px;
  }
  #headingTwo {
    position: relative;
    top: 20px;
    bottom: 20px;
    overflow: hidden;
  }
}
@media screen and (max-width: 481px) {
  #headingOne {
    position: relative;
    top: 40px;
    overflow: hidden;
  }
  #headingTwo {
    position: relative;
    top: 40px;
    bottom: 40px;
    overflow: hidden;
  }
  #container-2 {
    margin-top: -25px;
  }
  #top-section {
    margin-top: 0px;
  }
}
</style>
