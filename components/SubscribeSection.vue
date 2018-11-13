<template>
  <div class="subscribe-section">
    <h5>Enjoying our blog?</h5>
    <p class="label">Subscribe so we can be delivering them right to your inbox</p>
    <div class="subscribe-section-input">
      <input v-model.trim="email_address" @blur="validate" type="email" placeholder="Enter your email here">
      <button class="subscribe-button" @click="subscribe">Subscribe</button>
    </div>
    <div class="error-wrapper">
      <p v-if="error_email" class="error">{{error_email}}</p>
      <p v-else-if="subscribtionStatus" class="success">{{subscribtionStatus}}</p>

    </div>
  </div>
</template>

<script>
import isEmail from 'validator/lib/isEmail';

export default {
  name: 'SubscribeSection',
  data() {
    return {
      email_address: '',
      subscribtionStatus: '',
      error_email: ''
    }
  },
  methods: {
    async validate() {
      if (!isEmail(this.email_address))
        return (this.error_email = `Please enter a valid email address`)
    },
    async subscribe() {
      this.error_email = ''
      this.validate()
      if (this.error_email) return
      this.$nuxt.$loading.start()
      try {
        const res = await this.$axios.post(`/api/subscribe`, {
          email_address: this.email_address,
          status: `subscribed`
        })
        if (res.status === 200) {
          this.subscribtionStatus = `You have been succesfully subscribed`
          setTimeout(() => {
            this.email_address = ''
            this.subscribtionStatus = ''
            this.$emit('closeModal')
          }, 3000)
        }
      } catch (error) {
        error.response.status === 304
          ? (this.error_email = `You are already subscribed`)
          : (this.error_email = `An error occured, please try again`)
      } finally {
        this.$nuxt.$loading.finish()
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.subscribe-button {
  background-color: #76a6ff;
  border-radius: 0 25px 25px 0;
  color: white;
  padding: 0rem 1rem;
  box-sizing: border-box;
}
.subscribe-section-input {
  height: 3rem;
  border-radius: 25px;
  width: 100%;
  display: flex;
  & > input {
    flex: 1 1 auto;
    padding-left: 1rem;
    border: 1px solid #76a6ff;
    border-radius: 25px 0px 0px 25px;
  }
}
input {
  font-size: 1rem;
  font-weight: 300;
}
input:focus,
button:focus {
  outline: none;
}
.error-wrapper {
  height: 1.5rem;
}
.error {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #ff2e2e;
}
.success {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  font-weight: 400;
  color: rgb(10, 156, 10);
}
.label {
  margin-bottom: 1rem;
}
</style>
