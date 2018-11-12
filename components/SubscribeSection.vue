<template>
  <div class="subscribe-section">
    <h5>Enjoying our blog?</h5>
    <p class="label" >Subscribe so we can be delivering them right to your inbox</p>
    <div class="subscribe-section-input">
      <input v-model.trim="email_address" @blur="validate" type="email" placeholder="Enter your email here">
      <button class="subscribe-button" @click="subscribe">Subscribe</button>
    </div>
    <div class="error-wrapper">
      <p v-if="error.email_address" class="error">{{error.email_address}}</p>
    </div>
  </div>
</template>

<script>
import validator from 'validator'
export default {
  name: 'SubscribeSection',
  data() {
    return {
      email_address: '',
      subscribtionStatus: '',
      error: {}
    }
  },
  methods: {
    async validate() {
      if (!validator.isEmail(this.email_address))
        return (this.error.email_address = `Please enter a valid email address`)
    },
    async subscribe() {
      this.error = {}
      this.validate()
      if (Object.keys(this.error).length !== 0) return
      try {
        const res = await this.$axios.post(
          `/api/subscribe`,
          {
            email_address: this.email_address,
            status: `subscribed`
          }
        )
        if (res.status === 200) {
          this.email_address = ''
          this.$emit('closeModal')
          this.subscribtionStatus = `You have been succesfully subscribed`
        }
      } catch (error) {
        error.response.status === 304
          ? (this.subscribtionStatus = `You are already subscribed`)
          : (this.subscribtionStatus = `An error occured, please try again`)
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
.label {
  margin-bottom: 1rem
}
</style>
