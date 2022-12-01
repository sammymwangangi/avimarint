<template>
  <div>
    <b-sidebar
      id="sidebar-1"
      shadow=""
      class="clearfix"
      width="320px"
      backdrop="backdrop"
      v-show="windowWidth < 768"
    >
      <template #title>
        <div class="d-inline-block">
          <nuxt-link to="/">
            <NuxtImg
              src="/logo.png"
              class="mobile-img text-decoration-none"
              alt="Liquorspring-logo"
              style="width: auto; height: 50px"
            />
          </nuxt-link>
          <b-dropdown
            id="dropdown-right"
            right
            text="Right align"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
            style="margin-left: 30px;"
          >
            <template #button-content style="font-size: .5em;">
              <i class="fas fa-user"></i> <span class="sr-only">Account</span>
            </template>
            <template v-if="isAuthenticated">
              <b-dropdown-item
                :href="`/account/dashboard`"
                style="font-size: 1.1em;"
                ><i class="fas fa-tachometer-alt"></i>
                Dashboard</b-dropdown-item
              >
              <b-dropdown-item
                :href="`/account/profile`"
                style="font-size: 1.1em;"
                ><i class="fas fa-user-alt"></i> Profile</b-dropdown-item
              >
              <b-dropdown-item @click="logout" style="font-size: 1.1em;"
                ><i class="fas fa-sign-out-alt"></i> Logout</b-dropdown-item
              >
            </template>
            <template v-else>
              <b-dropdown-item
                :href="`/account/login`"
                style="font-size: 1.1em;"
                ><i class="fas fa-sign-in-alt"></i> Login</b-dropdown-item
              >
              <b-dropdown-item
                :href="`/account/register`"
                style="font-size: 1.1em;"
                ><i class="fas fa-edit"></i> Register</b-dropdown-item
              >
            </template>
          </b-dropdown>
        </div>
      </template>
      <Sidebar :categories="navs" />
    </b-sidebar>
    <nav
      class="navbar navbar-expand-md fixed-top mb-5"
      style="margin-top:70px;"
      id="navbarNav"
    >
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/"
                ><i class="fa fa-home"></i
              ></nuxt-link>
            </li>
            <li
              class="nav-item dropdown"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  class="text-capitalize"
                  style="font-size:1.2em; font-weight:400"
                  >All</span
                >
              </a>
              <ul class="dropdown-menu">
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Electronics
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Computing
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Fashion
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Health & Beauty
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Autoparts & Accessories
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Juakali
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Industrial Equipment
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li
              class="nav-item dropdown"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  class="text-capitalize"
                  style="font-size:1.2em; font-weight:400"
                  >Electronics</span
                >
              </a>
              <ul class="dropdown-menu">
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Televisions
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home Audio
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Accessories & Home Supplies
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Cameras
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li
              class="nav-item dropdown"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  class="text-capitalize"
                  style="font-size:1.2em; font-weight:400"
                  >Phones & Tablets</span
                >
              </a>
              <ul class="dropdown-menu">
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Mobile Phones
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Tablets
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Accessories
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li
              class="nav-item dropdown"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  class="text-capitalize"
                  style="font-size:1.2em; font-weight:400"
                  >Computing</span
                >
              </a>
              <ul class="dropdown-menu">
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Laptops
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Computers & Accessories
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Computer Data Storage
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Computer Components
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li
              class="nav-item dropdown"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  class="text-capitalize"
                  style="font-size:1.2em; font-weight:400"
                  >Fashion</span
                >
              </a>
              <ul class="dropdown-menu">
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Women's Fashion
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Men's Fashion
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Kid's Fashion
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Baby
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li
              class="nav-item dropdown"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  class="text-capitalize"
                  style="font-size:1.2em; font-weight:400"
                  >Health & Beauty</span
                >
              </a>
              <ul class="dropdown-menu">
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Health Care
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Fragrances
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Men's Grooming
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Makeup
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li
              class="nav-item dropdown"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  class="text-capitalize"
                  style="font-size:1.2em; font-weight:400"
                  >Autoparts & Accessories</span
                >
              </a>
              <ul class="dropdown-menu">
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  Car Electronics & Accessories
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  Replacement Parts
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  Car Safety & Security
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  Motorcycle & Powersports
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span
                  class="text-capitalize"
                  style="font-size:1.2em; font-weight:400"
                  >Juakali</span
                >
              </a>
            </li>
            <li
              class="nav-item dropdown"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  class="text-capitalize"
                  style="font-size:1.2em; font-weight:400"
                  >Industrial Equipment</span
                >
              </a>
              <ul class="dropdown-menu">
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Filtration
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Haudralics
                  </nuxt-link>
                </li>
                <li
                  class="nav-item scrollable-menu dropdown"
                >
                  <nuxt-link
                    to="/"
                    class="dropdown-item scrollable-menu text-capitalize dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Packaging
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav
      class="navbar navbar-expand-md fixed-top navbar-light clearfix"
      id="main-nav"
    >
      <div class="container-fluid">
        <nuxt-link class="navbar-brand d-inline" to="/">
          <NuxtImg src="/logo.webp" format="webp" alt="logo" class="mobile-img" style="height: 100px" />
        </nuxt-link>
        <nuxt-link
          to="/cart"
          class="nav-link text-danger d-inline mobile-icon"
          style="cursor: pointer;margin-right: -24px;"
          v-show="windowWidth < 768"
          ><i class="ri-shopping-cart-line ri-lg"></i
          ><small
            class="badge badge-dark rounded-circle"
            style="font-size: 0.6em; position:relative;top: -10px;"
          >
            <span v-if="cart.length > 0">{{ cart.length }}</span>
            <span v-else>0</span>
          </small></nuxt-link
        >
        <nuxt-link
          to="/favorite"
          class="nav-link text-danger mobile-icon d-inline"
          style="cursor: pointer; margin-right: 2px;"
          v-show="windowWidth < 768"
        >
          <b v-if="favorite.length > 0">
            <i class="ri-heart-3-fill ri-lg heart"></i>
          </b>
          <b v-else>
            <i class="ri-heart-3-line ri-lg heart"></i>
          </b>
        </nuxt-link>
        <b-button
          v-b-toggle.sidebar-1
          class="nav-toggler rounded-0 bg-transparent d-lg-none d-md-none border-0 "
          v-show="windowWidth < 768"
        >
          <span
            class="navbar-toggler-icon"
            style="font-size:1.0em;font-weight: 300;outline: none"
          ></span
        ></b-button>
        <div class="collapse navbar-collapse"></div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <template>
            <div>
              <div
                class=" d-sm-none d-md-none w-100 d-lg-inline"
                v-show="windowWidth > 480"
              >
                <label for="search" class="sr-only">Search</label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search"
                  @keyup.enter="searchPage"
                  @blur="hideSearch"
                  v-model="query"
                  autocomplete="off"
                />
                <div
                  v-if="results.length > 0 && query"
                  class="card rounded-0  p-2"
                  style="position: absolute;z-index:-1;width:270px"
                >
                  <h6 v-for="result in results.slice(0, 8)" :key="result._id">
                    <a
                      :href="`/product/${result.url}`"
                      class="text-decoration-none"
                    >
                      {{ result.name.replace(/-/g, ' ') | capitalize }}
                    </a>
                  </h6>
                  <span class="border-bottom border-secondary"></span>
                  <div
                    v-for="(record, index) in brands.slice(0, 5)"
                    :key="index"
                  >
                    <a
                      :href="`/brands/${record.url}`"
                      class="text-dark text-decoration-none"
                    >
                      <span style="width: 250px;"
                        ><strong class="text-capitalize">{{
                          record.brand
                        }}</strong>
                        brand</span
                      >
                    </a>
                  </div>
                  <span class="border-bottom border-secondary"></span>
                  <div
                    v-for="(subcat, index) in subcats.slice(0, 8)"
                    :key="`subcat-${index}`"
                  >
                    <a
                      :href="`/${subcat.category_url}/${subcat.subcategory}`"
                      class="text-dark text-decoration-none"
                    >
                      <span style="width: 250px;"
                        ><strong class="text-capitalize">{{
                          subcat.subcategory.replace(/-/g, ' ')
                        }}</strong></span
                      >
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                id="spring"
                href="tel:+254720675337"
                style="cursor: pointer;font-size:1.1em;font-weight:700;"
                v-show="windowWidth > 1200"
                >+254717503802</a
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/cart"
                class="nav-link"
                id="spring"
                style="cursor: pointer;font-weight:700;"
                ><i class="ri-shopping-cart-line"></i
                ><small
                  class="badge badge-dark rounded-circle"
                  style="font-size: 0.6em; position:relative;top: -10px;"
                >
                  <span v-if="cart.length > 0">{{ cart.length }}</span>
                  <span v-else>0</span>
                </small></nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/favorite"
                class="nav-link"
                id="spring"
                style="cursor: pointer"
              >
                <b v-if="favorite.length > 0">
                  <i class="ri-heart-3-fill ri-lg heart"></i>
                </b>
                <b v-else>
                  <i class="ri-heart-3-line ri-lg heart"></i>
                </b>
              </nuxt-link>
            </li>
            <li class="nav-item dropdown">
              <a
                style="margin-top:-5px; color:#000000;"
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-user"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
                v-if="isAuthenticated"
              >
                <nuxt-link to="/account/dashboard" class="dropdown-item"
                  >Dashboard</nuxt-link
                >
                <nuxt-link to="/account/profile" class="dropdown-item"
                  >Profile</nuxt-link
                >
                <a
                  @click="logout"
                  class="dropdown-item"
                  style="cursor: pointer;"
                  >Logout</a
                >
              </div>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
                v-else
              >
                <nuxt-link to="/account/login" class="dropdown-item"
                  >Login</nuxt-link
                >
                <nuxt-link to="/account/register" class="dropdown-item"
                  >Register</nuxt-link
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      id="mobile-menu"
      class="w-100 form-group py-4 rounded-0 clearfix"
      v-show="windowWidth < 481"
    >
      <form @submit.prevent="searchPage">
        <label for="mobile_search" class="sr-only">Search</label>
        <input
          type="text"
          id="mobile_search"
          :value="query"
          @input="(e) => (query = e.target.value)"
          autocomplete="off"
          class="form-control rounded-0"
          placeholder="Search products ...."
        />
      </form>
      <div
        v-if="searchResults.length > 0 && query"
        class="list-unstyled card rounded-0 w-100  p-2"
        style="position: relative;overflow:hidden;z-index:1000;"
      >
        <h6 v-for="result in searchResults.slice(0, 8)" :key="result._id">
          <a :href="`/product/${result.url}`">
            <div style="width: 250px;">
              {{ result.name.replace(/-/g, ' ') | capitalize }}
            </div>
          </a>
        </h6>
        <span class="border-bottom border-secondary"></span>
        <h6 v-for="(record, index) in brands.slice(0, 5)" :key="index">
          <a :href="`/brands/${record.url}`" class="text-dark">
            <span style="width: 250px;"
              ><strong>{{ record.brand }}</strong> brand</span
            >
          </a>
        </h6>
        <span class="border-bottom border-secondary"></span>
        <div
          v-for="(subcat, index) in subcats.slice(0, 8)"
          :key="`sub-${index}`"
        >
          <a
            :href="`/${subcat.category_url}/${subcat.subcategory}`"
            class="text-dark text-decoration-none"
          >
            <span style="width: 250px;"
              ><strong class="text-capitalize">{{
                subcat.subcategory.replace(/-/g, ' ')
              }}</strong></span
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '~/components/partials/Sidebar';
import { mapGetters, mapState } from 'vuex';
import { vueWindowSizeMixin } from 'vue-window-size';
import { debounce } from 'lodash';

export default {
  mixins: [vueWindowSizeMixin],
  components: {
    Sidebar,
  },
  data() {
    return {
      query: null,
      results: [],
      toggle: true,
      searchResults: [],
      brands: [],
      subcats: [],
    };
  },
  async fetch() {
    await this.$store.dispatch('menus/getMenus');
    await this.$store.dispatch('menus/getLiquorMenus');
  },
  created() {
    this.debounceQuery = debounce(this.searchProducts, 1000);
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    menus() {
      return this.$store.state.menus.all;
    },
    navs() {
      return this.$store.state.menus.liquorMenus;
    },
    ...mapState({
      cart: (state) => state.cart.cart,
      favorite: (state) => state.favorite.favorite,
    }),
  },
  watch: {
    query() {
      if (!this.query) return;
      this.debounceQuery();
    },
  },
  methods: {
    hideSearch() {
      setTimeout(() => {
        this.query = '';
      }, 300);
    },
    async logout() {
      await this.$auth.logout();
      this.$toast.success('You are logged out!');
    },
    searchPage() {
      if (this.query === '' || this.query === null) {
        return this.$router.push(`${this.$route.path}`);
      } else {
        this.$router.push(`/search/${this.query}`);
        this.query = '';
      }
    },
    searchProducts() {
      this.$http
        .$post('products/search', { query: this.query })
        .then((response) => {
          this.results = response.result.products;
          this.searchResults = response.result.products;
          this.subcats = response.result.subcategories;
          this.brands = response.result.brands;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
.nav-toggler:focus {
  outline: none !important;
  box-shadow: none;
}
.btn-link {
  color: #202326;
}
.btn-link:hover {
  color: #202326;
}
i.heart {
  color: #ed1b24;
}
#spring {
  color: #277FBE;
}
#search {
  outline: 0;
  border-width: 0 0 1px 0;
  border-color: #6f7275;
  width: 468px;
}
#search:focus {
  border-color: transparent;
}

nav#main-nav {
  background: white;
  height: 70px;
}
nav#navbarNav {
  background: #277FBE;
  color: #ffffff;
}
.dropdown-toggle :hover {
  color: #010101;
  background: transparent;
}
.dropdown-toggle::after {
  display: none;
}
.dropdown-item {
  font-weight: 400;
  color: #ffffff;
}
.dropdown-item:hover {
  color: #010101;
  font-weight: 400;
  background: transparent;
}
.dropdown-menu {
  margin-top: 0;
  padding-top: 1px;
  text-transform: capitalize;
  background: #277FBE;
  color: #ffffff;
  border-radius: 0;
  height: auto;
  max-height: 450px;
  overflow-x: hidden;
}
.dropdown-menu:hover {
  margin-top: 0;
  padding-top: 1px;
  text-transform: capitalize;
  background: #277FBE;
  color: #010101;
  border-radius: 0;
}
.dropdown:hover > .dropdown-menu {
  display: table-column;
}
@media screen and (min-width: 992px) {
  #navbarNav .nav-item .nav-link {
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 500;
    font-size: 0.9em;
    z-index: 9999;
    padding-right: 20px;
  }
  .dropdown-menu {
    padding: 0;
    width: auto;
  }
  .scrollable-menu {
    height: auto;
    max-height: 40px;
    overflow-x: hidden;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  #navbarNav .nav-item .nav-link {
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 500;
    font-size: 0.7em;
    z-index: 9999;
    padding-right: 5px;
  }
  .dropdown-menu {
    font-size: 0.8em;
    width: auto;
  }
  .dropdown-item {
    margin-left: -20px;
  }
}

@media screen and (min-width: 481px) and (max-width: 767px) {
  #navbarNav {
    display: none;
  }
}
@media screen and (max-width: 481px) {
  #navbarNav {
    display: none;
  }
  .mobile-img {
    width: 160px;
    height: 40px;
  }
  #mobile-menu {
    position: fixed;
    top: 46px;
    overflow: hidden;
    z-index: 1000;
  }
}

@media screen and (min-width: 481px) {
  .mobile-icon {
    display: none;
    visibility: hidden;
  }
}
</style>
