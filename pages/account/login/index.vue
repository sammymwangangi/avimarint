<template>
  <div>
    <section class="my-sm-5 my-md-5 my-lg-5 py-5">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6">
            <h4 class="mt-2">Login</h4>
            <b-alert
              show="show"
              variant="danger"
              dismissible
              v-if="apiErrors.length > 0"
            >
              <p>{{ apiErrors }}</p>
            </b-alert>
            <div
              class="card justify-content-center my-3 rounded-0 p-4 shadow"
              style="border-left:3px solid #EC2326"
            >
              <ValidationObserver v-slot="{ handleSubmit }">
                <form action="#" @submit.prevent="handleSubmit(loginUser)">
                  <div class="form-group">
                    <ValidationProvider
                      name="email"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <label for="email"
                        >Email<small class="text-danger">*</small></label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="email"
                        placeholder="Enter email"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <ValidationProvider
                      name="password"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <label for="password"
                        >Password<small class="text-danger">*</small></label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="password"
                        placeholder="Enter password"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </ValidationProvider>
                  </div>
                  <button type="submit" class="btn btn-primary mb-2">
                     {{ loading ? 'Processing...' : 'Login' }}
                  </button>
                  <p>
                    Don't have an account?
                    <nuxt-link to="/account/register">Register here</nuxt-link>
                  </p>
                </form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      email: null,
      password: null,
      apiErrors: [],
      loading: false,
    };
  },
  methods: {
    async loginUser() {
      this.loading = true;
      await this.$auth
        .loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then((res) => {
          this.loading = false;
          this.$router.push('/account/dashboard');
          this.$toast.success('Login successful!');
        })
        .catch((err) => {
          this.loading = false;
          console.log(err.response.data.result);
          this.apiErrors = err.response.data.result;
        });
    },
  },
  head() {
    const meta = {
      metadescription: 'Click it, Own it',
      title: "Avimar International",
    };
    return {
      title: meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: meta.metadescription,
        },
        { hid: 'og:title', name: 'og:title', content: meta.title },
        {
          hid: 'og:description',
          name: 'og:description',
          content: meta.metadescription,
        },
        { hid: 'og:type', name: 'og:type', content: 'website' },
      ],
    };
  },
};
</script>
<style></style>
