<template>
  <div>
    <transition name="fade">
      <div class="navbar" v-show="showNavbar">
        <div class="navbar-brand">
          <nuxt-link to="/">
            <img class="logo" src="@/assets/logo.svg" alt="logo">
          </nuxt-link>
        </div>
        <div>
          <div class="contact">
            <nuxt-link to="/contact">
              <p>Contact Us</p>
            </nuxt-link>
          </div>
          <button class="subscribe-button" @click.prevent="openSubscribeModal = true">Subscribe</button>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="openSubscribeModal" class="subscribe-modal-wrapper" @click.self="openSubscribeModal = false">
        <div>
          <div class="close-modal">
            <i @click="openSubscribeModal = false" class="material-icons">close</i>
          </div>
          <SubscribeSection @success="success" class="subscribe-modal-input" />
        </div>
      </div>
    </transition>
    <DisplayNotification v-show="showDisplayNotification" message="You have been successfully subscribed" />
  </div>
</template>

<script>
import SubscribeSection from '@/components/SubscribeSection'
import DisplayNotification from '@/components/DisplayNotification'
import notification from '@/mixins/notification'

import { setTimeout } from 'timers'
export default {
  name: 'TheNavbar',
  components: {
    SubscribeSection,
    DisplayNotification
  },
  mixins: [notification],
  data() {
    return {
      openSubscribeModal: false,
      showNavbar: true
    }
  },
  mounted() {
    if (window.innerWidth < 900) {
      let prevScrollPos = window.pageYOffset
      window.addEventListener('scroll', () => {
        let currentScrollPos = window.pageYOffset
        if (currentScrollPos > 112) {
          this.showNavbar = false
          currentScrollPos > prevScrollPos
            ? (this.showNavbar = false)
            : (this.showNavbar = true)
        } else {
          this.showNavbar = true
        }
        prevScrollPos = currentScrollPos
      })
    }
  },
  methods: {
    success() {
      this.openSubscribeModal = false
      this.showNotification()
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
  padding: 0px 10%;
  @media (max-width: 600px) {
    padding: 0px 5%;
  }
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
.contact {
  height: 100%;
  margin: 0rem 1rem;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
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
  background-color: transparent;
}
.subscribe-modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100vh;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.8);
  & > div {
    width: 400px;
    border-radius: 25px;
    background-color: #f7faff;
    position: relative;
    @media (max-width: 600px) {
      width: 100%;
      margin: 1rem;
    }
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
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
}

</style>
