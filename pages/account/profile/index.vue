<template>
  <div>
    <section class="py-5">
      <div class="container py-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><nuxt-link to="/account/dashboard">Dashboard</nuxt-link></li>
            <li class="breadcrumb-item active" aria-current="page">Profile</li>
          </ol>
        </nav>
        <div class="row justify-content-center">
          <div class="col-12">
            <h5 class="text-success"><strong>Profile</strong></h5>
            <div class="card justify-content-center my-3 rounded-0 p-4 shadow" style="border-left:3px solid #EC2326">
              <div class="row">
                <div class="col-sm-6">
                  <h6>Info</h6>
                  <ul class="list-group clearfix">
                    <li class="list-group-item"><i class="fas fa-user"></i> Name : {{ loggedInUser.name || '' }}</li>
                    <li class="list-group-item"><i class="fas fa-envelope"></i> Email : {{ loggedInUser.email || '' }}
                    </li>
                    <li class="list-group-item"><i class="fas fa-phone-alt"></i> Phone Number :
                      {{ loggedInUser.phone || '' }}
                    </li>
                    <li class="list-group-item"><i class="fas fa-map-marker"></i> Address
                      :{{ loggedInUser.location || '' }}
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6 mt-sm-2">
                  <h6 class="text-danger border-bottom pb-2 font-weight-bolder">Update info</h6>
                  <ValidationObserver v-slot="{handleSubmit}">
                    <form action="#" @submit.prevent="handleSubmit(onSubmit)">
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <ValidationProvider name="firstName" rules="required|alpha_spaces" v-slot="{ errors }">
                            <label for="firstName">First Name<small class="text-danger">*</small></label>
                            <input type="text" class="form-control" v-model="userData.firstName"
                                   placeholder="Enter First Name" id="firstName">
                            <small class="text-danger">{{ errors[0] }}</small>
                          </ValidationProvider>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="lastName">LastName<small class="text-danger">*</small></label>
                          <input type="text" class="form-control" id="lastName" v-model="userData.lastName"
                                 placeholder="Enter Last Name">
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <div class="form-group">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" placeholder="1234 Main St"
                                   v-model="userData.address">
                          </div>
                        </div>
                        <div class="form-group col-md-6">
                          <div class="form-group">
                            <label for="town">Town of residence</label>
                            <input type="text" class="form-control" id="town" placeholder="Nairobi"
                                   v-model="userData.location">
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                            <label for="email">Email<small class="text-danger">*</small></label>
                            <input type="email" class="form-control" id="email" v-model="userData.email"
                                   placeholder="Enter valid email">
                            <small class="text-danger">{{ errors[0] }}</small>
                          </ValidationProvider>
                        </div>
                        <div class="form-group col-md-6">
                          <ValidationProvider name="phone" rules="required" v-slot="{ errors }">
                            <label for="phone">Phone Number<small class="text-danger">*</small></label>
                            <input type="text" class="form-control" id="phone" v-model="userData.phone"
                                   placeholder="Enter Phone number">
                            <small class="text-danger">{{ errors[0] }}</small>
                          </ValidationProvider>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-success mb-2">Update Info</button>
                    </form>
                  </ValidationObserver>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {ValidationProvider} from 'vee-validate/dist/vee-validate.full.esm';
import {ValidationObserver} from 'vee-validate';
import {mapGetters} from 'vuex'

export default {
  middleware: 'auth',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      userData: {}
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  created() {
    this.defaultFormValues()
  },
  methods: {
    defaultFormValues() {
      this.userData = {
        email: this.loggedInUser.email,
        phone: this.loggedInUser.phone,
        location: this.loggedInUser.location,
        address: this.loggedInUser.address,
        firstName: this.loggedInUser.name.split(/\s+/)[0] || '',
        lastName: this.loggedInUser.name.split(/\s+/)[1] || ''
      }
    },
    async onSubmit() {
      const formData = {
        name: this.userData.firstName + ' ' + this.userData.lastName,
        phone: this.userData.phone,
        email: this.userData.email,
        location: this.userData.location,
        address: this.userData.address,
        role: 'user',
      }
      await this.$http.$put(`users/update/${this.loggedInUser._id}`, JSON.stringify(formData),
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
          }).then((response) => {
        this.$auth.setUser(formData)
        window.location.reload(true)
        this.$toast.success('Profile updated successfully!');
      }).catch((error) => {
        console.log(error)
      })
    },
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

}
</script>
<style>

</style>
