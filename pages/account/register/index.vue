<template>
  <div>
    <section class="py-5">
      <div class="container py-5">
        <h5 class="text-success"><strong>Register</strong></h5>
        <b-alert show="show" variant="danger" dismissible v-if="apiErrors.length>0">
          <ul v-for="(error,index) in apiErrors" :key="index">
            <li>{{ error }}</li>
          </ul>
        </b-alert>
        <div class="card my-3 rounded-0 p-4 shadow" style="border-left:3px solid #EC2326">
          <ValidationObserver v-slot="{handleSubmit}">
            <form action="#" @submit.prevent="handleSubmit(onSubmit)">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <ValidationProvider name="name" rules="required|alpha_spaces" v-slot="{ errors }">
                    <label for="name">Your Name<small class="text-danger">*</small></label>
                    <input type="text" class="form-control" v-model="name" placeholder="Enter Name" id="name">
                    <small class="text-danger">{{ errors[0] }}</small>
                  </ValidationProvider>
                </div>
                <div class="form-group col-md-6">
                  <ValidationProvider name="phone" rules="required" v-slot="{ errors }">
                    <label for="phone">Phone Number<small class="text-danger">*</small></label>
                    <input type="text" class="form-control" id="phone" v-model="phone" placeholder="Enter Phone number">
                    <small class="text-danger">{{ errors[0] }}</small>
                  </ValidationProvider>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <div class="form-group">
                    <label for="town">Area of residence</label>
                    <input type="text" class="form-control" id="town" placeholder="eg. Kilimani" v-model="town">
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <div class="form-group">
                    <label for="address">Road / Apartment / House No.</label>
                    <input type="text" class="form-control" id="address"
                           placeholder="eg. Peponi Rd, Peponi View apartment, house 124 " v-model="address">
                  </div>
                </div>

              </div>
              <div class="form-group ">
                <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                  <label for="email">Email<small class="text-danger">*</small></label>
                  <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter valid email">
                  <small class="text-danger">{{ errors[0] }}</small>
                </ValidationProvider>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <ValidationProvider name="password" rules="required|min:6|confirmed:confirmation" v-slot="{ errors }">
                    <label for="password">Password<small class="text-danger">*</small></label>
                    <input type="password" class="form-control" id="password" v-model="password"
                           placeholder="Enter password">
                    <small class="text-danger">{{ errors[0] }}</small>
                  </ValidationProvider>
                </div>
                <div class="form-group col-md-6">
                  <ValidationProvider name="confirmation" vid="confirmation" v-slot="{ errors }">
                    <label for="confirmation">Confirm Password<small class="text-danger">*</small></label>
                    <input type="password" class="form-control" id="confirmation" v-model="confirmation"
                           placeholder="Confirm your password">
                    <small class="text-danger">{{ errors[0] }}</small>
                  </ValidationProvider>
                </div>
              </div>

              <button type="submit" class="btn btn-primary mb-2">
               {{ loading ? 'Processing...' : 'Register' }} 
                </button>
              <p>Already have an account?
                <nuxt-link to="/account/login"> Login</nuxt-link>
              </p>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {ValidationProvider} from 'vee-validate/dist/vee-validate.full.esm';
import {ValidationObserver} from 'vee-validate';

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      name: null,
      phone: null,
      town: null,
      address: null,
      email: null,
      password: null,
      confirmation: null,
      apiErrors: [],
      loading: false,
    }
  },
  methods: {
    async onSubmit() {
       this.loading=true
      try {
        const formData = {
          name: this.name,
          phone: this.phone,
          email: this.email,
          address: this.address,
          location: this.town,
          password: this.password,
        }
        await this.$http.$post('users/register', JSON.stringify(formData),
            {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              }
            }).then((response) => {
          console.log('response is ' + response)
        })
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        this.loading=false
        this.$router.push('/account/dashboard')
        this.$toast.success('Registration successful!');

      } catch (err) {
         this.loading=false
        console.log(err.response.data.message)
        this.apiErrors = err.response.data.message;
      }

    },
  },
  head() {
    const meta = {
      metadescription: 'Click it, Own it',
        title: 'Avimar International'
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
}
</script>
<style>

</style>
