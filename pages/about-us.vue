<template>
  <div>
    <section class="tw-pt-16 lg:tw-pt-32 tw-px-2">
      <div class="tw-bg-white tw-container tw-mx-auto tw-py-5">
        <!-- Breadcrumb -->
        <nav id="breadcrumb" class="tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5" aria-label="breadcrumb">
          <ol class="tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3">
            <li class="tw-inline-flex tw-items-center">
              <a :href="'/'" class="tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white">
                <svg class="tw-w-4 tw-h-4 tw-mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </a>
            </li>
            <li aria-current="page">
              <div class="tw-flex items-center">
                <svg class="tw-w-6 tw-h-6 tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">About Us</span>
              </div>
            </li>
          </ol>
        </nav>
        <div class="tw-bg-gray-100 tw-mt-1">
          <h1 class="tw-text-center tw-capitalize tw-text-red-600 heading_one">
            About Us
          </h1>
        </div>

        <div class="tw-p-3">
          <div>
            Avimar International provides a wide range of products  covering Furniture,  Metalwork  Products like wheelbarrows, home appliances, smartphones and accessories, spare parts , electronic products such as computers, tablets, and TVs, beauty and fashion products, among others
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'AboutUs',
  data() {
    return {};
  },
  async asyncData({ $http }) {
    try {
      const meta = await $http
        .$get('metas/get-by-category/about-us')
        .then((response) => response.result);
      return { meta };
    } catch (err) {
      return { meta: {} };
    }
  },
  head () {
    // const meta = this.meta || {}
    return {
      title: "About Us - Avimar International",
      // meta: [
      //   { hid: 'description', name: 'description', content: meta.metadescription },
      //   { hid: 'og:title', name: 'og:title', content: meta.title },
      //   { hid: 'og:description', name: 'og:description', content: meta.metadescription },
      //   { hid: 'og:type', name: 'og:type', content: 'website' }
      // ]
    }
  },
  methods: {
    init() {},
  },
};
</script>
<style scoped>
.header_area {
  min-height: 20px;
  text-align: center;
  background: #f5f5f5;
}

@media screen and (min-width: 769px) {
  #breadcrumb {
    display: none;
  }

  .heading_one {
    margin-top: 1px;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
}

@media screen and (min-width: 481px) and (max-width: 575px) {
}

@media screen and (max-width: 481px) {
  #breadcrumb {
    display: none;
  }

  .heading_one {
    margin-top: 20px;
    padding: 10px;
    font-size: 1.2em;
    margin-bottom: 1px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
}
</style>
