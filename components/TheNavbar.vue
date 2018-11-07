<template>
  <div>
    <div class="navbar">
      <div class="navbar-brand">
        <nuxt-link to="/">
          <img class="logo" src="@/assets/logo.svg" alt="logo">
        </nuxt-link>
      </div>
      <div>
        <div class="navbar-item">
          <nuxt-link to="/search">
            <p>Search</p>
          </nuxt-link>
        </div>
        <div class="navbar-item">
          <nuxt-link to="/contact">
            <p>Contact Us</p>
          </nuxt-link>
        </div>
        <button class="subscribe-button" @click="showSubscribeModal">Subscribe</button>
      </div>
    </div>
    <div v-show="openModal" class="subscribe-modal-wrapper" @click.self="closeSubscribeModal">
      <div>
        <div class="close-modal">
          <v-icon @click="closeSubscribeModal">close</v-icon>
        </div>
        <SubscribeSection @closeModal="closeSubscribeModal" class="subscribe-modal-input" />
      </div>
    </div>
  </div>
</template>

<script>
import SubscribeSection from '@/components/SubscribeSection'
export default {
  name: 'TheNavbar',
  components: {
    SubscribeSection
  },
  data() {
    return {
      openModal: false
    }
  },
  methods: {
    showSubscribeModal() {
      this.openModal = true
    },
    closeSubscribeModal(e) {
      this.openModal = false
    }
  }
}
</script>

<style lang='scss' scoped>
p {
  margin-bottom: 0px;
  color: white;
}
.navbar {
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #76a6ff;
  position: fixed;
  z-index: 100;
  top: 0px;
  padding: 0px 120px;
  & > div {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
  }
}
.navbar-item {
  height: 100%;
  margin: 0rem 1rem;
  display: flex;
  align-items: center;
}
.navbar-brand {
  height: 100%;
  align-items: center;
  display: flex;
}
.subscribe-button {
  border-radius: 25px;
  border: 1px solid white;
  padding: 0rem 1rem;
  color: white;
  height: 50%;
  margin-left: 1rem;
}
.subscribe-modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.452);
  & > div {
    width: 35%;
    height: 200px;
    border-radius: 25px;
    background-color: #f7faff;
    position: relative;
    & > .close-modal {
      position: absolute;
      top: 0px;
      right: 0px;
      padding: 1rem;
      & :hover {
        color: #ff2e2e;
        cursor: pointer;
      }
    }
  }
}
.logo {
  height: 2rem;
  width: auto;
}
button:focus {
  outline: none;
}
.subscribe-section {
  width: 100%;
  padding: 2rem;
}
</style>
