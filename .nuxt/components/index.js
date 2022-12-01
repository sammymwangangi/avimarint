export const DelayHydration = () => import('../../node_modules/nuxt-delay-hydration/dist/components/DelayHydration.js' /* webpackChunkName: "components/delay-hydration" */).then(c => wrapFunctional(c.default || c))
export const HydrationStatus = () => import('../../node_modules/nuxt-delay-hydration/dist/components/HydrationStatus.js' /* webpackChunkName: "components/hydration-status" */).then(c => wrapFunctional(c.default || c))
export const AddToCart = () => import('../../components/AddToCart.vue' /* webpackChunkName: "components/add-to-cart" */).then(c => wrapFunctional(c.default || c))
export const Carousel = () => import('../../components/Carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c))
export const HomeProducts = () => import('../../components/HomeProducts.vue' /* webpackChunkName: "components/home-products" */).then(c => wrapFunctional(c.default || c))
export const Products = () => import('../../components/Products.vue' /* webpackChunkName: "components/products" */).then(c => wrapFunctional(c.default || c))
export const Rating = () => import('../../components/Rating.vue' /* webpackChunkName: "components/rating" */).then(c => wrapFunctional(c.default || c))
export const WhatsappOrder = () => import('../../components/WhatsappOrder.vue' /* webpackChunkName: "components/whatsapp-order" */).then(c => wrapFunctional(c.default || c))
export const HomeAddCart = () => import('../../components/Home/AddCart.vue' /* webpackChunkName: "components/home-add-cart" */).then(c => wrapFunctional(c.default || c))
export const HomeWpOrder = () => import('../../components/Home/WpOrder.vue' /* webpackChunkName: "components/home-wp-order" */).then(c => wrapFunctional(c.default || c))
export const BlogArticleList = () => import('../../components/blog/article-list.vue' /* webpackChunkName: "components/blog-article-list" */).then(c => wrapFunctional(c.default || c))
export const BlogCarousel = () => import('../../components/blog/blog-carousel.vue' /* webpackChunkName: "components/blog-carousel" */).then(c => wrapFunctional(c.default || c))
export const PartialsCategoryFilter = () => import('../../components/partials/CategoryFilter.vue' /* webpackChunkName: "components/partials-category-filter" */).then(c => wrapFunctional(c.default || c))
export const PartialsFooter = () => import('../../components/partials/Footer.vue' /* webpackChunkName: "components/partials-footer" */).then(c => wrapFunctional(c.default || c))
export const PartialsMenu = () => import('../../components/partials/Menu.vue' /* webpackChunkName: "components/partials-menu" */).then(c => wrapFunctional(c.default || c))
export const PartialsSidebar = () => import('../../components/partials/Sidebar.vue' /* webpackChunkName: "components/partials-sidebar" */).then(c => wrapFunctional(c.default || c))
export const SharedCall = () => import('../../components/shared/call.vue' /* webpackChunkName: "components/shared-call" */).then(c => wrapFunctional(c.default || c))
export const SharedWhatsapp = () => import('../../components/shared/whatsapp.vue' /* webpackChunkName: "components/shared-whatsapp" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
