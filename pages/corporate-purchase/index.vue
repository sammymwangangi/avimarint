\<template>
  <div>
    <section class="tw-pt-32 lg:tw-pt-32">
      <div class="tw-bg-white tw-container tw-mx-auto tw-py-5">

        <!-- Breadcrumb -->
        <nav class="tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5" aria-label="breadcrumb">
          <ol class="tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3">
            <li class="tw-inline-flex tw-items-center">
              <a :href="'/'" class="tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white">
                <svg class="tw-w-4 tw-h-4 tw-mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </a>
            </li>
            <li>
              <div class="tw-flex tw-items-center">
                <svg class="tw-w-6 tw-h-6 tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a :href="`/${$route.params.category}`" class="tw-no-underline tw-text-gray-700 hover:tw-text-gray-900 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-400 dark:hover:tw-text-white">{{
                $route.params.category | capitalize
              }}</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="tw-flex items-center">
                <svg class="tw-w-6 tw-h-6 tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">Corporate Purchase</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <div class="header_area tw-mt-1">
          <h1
            class="tw-mt-2 border-top tw-text-center tw-capitalize tw-text-red-600 heading_one"
          >
            {{ meta.headerOne || '' }}
          </h1>
        </div>
        <div class="tw-p-2">
          <p>Corporate purchase of alcoholic and non alcoholic drinks is of high regard at <b>Liquorspring Limited.</b> Quality
          service from timely supply of drinks and other complimentary products and clear billing is assurance to our
          esteemed buyers. Liquorspring Limited being a drinks expert shall offer without charge the consultancy on
          matters such as what drinks are best and the price list for clear budgeting of the corporate or whatever
          advice
          the corporate might require. It is our desire to make your corporate occasions comparable to none and for your
          office experience to be the best by stocking the best of drinks for you.</p>

        <p><b>Liquorspring Limited</b> is in a position and is best suited to supply corporate purchases of however minimal
          or
          extensive the corporate would want to go. Check for a background research on the vast drinks we stock on our
          website or mobile app or simply reach us on <b>0714798820</b>.</p>
        <p>Arrangements for payments are easy as Liquorspring Limited offers a variety of payment methods from cards
          ,mpesa to cash.</p>

        <p>For record keeping and matters around filing, Liquorspring Limited offers receipts of sale and ETRs or any
          other reference or support documentation the corporate might deem important.

          Choose the best. Keep it Liquorspring.</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'CorporatePurchase',
  data() {
    return {};
  },
  async asyncData({ $http }) {
    try {
      const meta = await $http
        .$get('metas/get-by-category/corporate-purchase')
        .then((response) => response.result);
      return { meta };
    } catch (err) {
      return { meta: {} };
    }
  },
  head() {
    const meta = {
       metadescription: 'Liquor Spring – the swiftest way to order alcohol online in Nairobi. Call 0705646186. Enjoy free drinks delivery in 20 mins at affordable prices',
        title: 'Liquor Spring – Free alcohol delivery services at best prices'
    }
    return {
      title: meta.title,
      meta: [
        {hid: 'description', name: 'description', content: meta.metadescription},
        {hid: 'og:title', name: 'og:title', content: meta.title},
        {hid: 'og:description', name: 'og:description', content: meta.metadescription},
        {hid: 'og:type', name: 'og:type', content: 'website'}
      ],
    }
  },
};
</script>
<style>
.header_area {
  min-height: 20px;
  text-align: center;
  background: #f5f5f5;
}
@media screen and (min-width: 769px) {
  #breadcrumb {
    position: relative;
    top: -15px;
    overflow: hidden;
  }

  .heading_one {
    margin-top: -20px;
  }
}


@media (min-width: 576px) and (max-width: 768px) {
  #breadcrumb {
    position: relative;
    top: -15px;
    overflow: hidden;
  }

  .heading_one {
    margin-top: -20px;
  }
}

@media screen and (min-width: 481px) and (max-width: 575px) {
  #breadcrumb {
    position: relative;
    top: -15px;
    overflow: hidden;
  }

  .heading_one {
    margin-top: -20px;
  }
}

@media screen and (max-width: 481px) {
  #breadcrumb {
    position: relative;
    top: 37px;
    overflow: hidden;
  }

  .heading_one {
    padding: 10px;
    font-size: 1.2em;
    margin-bottom: 1px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
}
</style>
