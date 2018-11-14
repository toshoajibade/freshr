<template>
  <div class="page">
    <div class="main">
      <h4>We will definitely love to hear from you</h4>
      <form>
        <div>
          <label for="senderEmailAddress">Email</label>
          <input v-model.trim="email_address" id="senderEmailAddress" class="input" type="email" placeholder="Enter your email here">
          <div class="error-wrapper">
            <p class="error" v-if="error.email_address">{{error.email_address}}</p>
          </div>
        </div>
        <div>
          <label for="messageToSend">Message</label>
          <textarea name="message" id="messageToSend" v-model.trim="message" placeholder="Type your message here" class="textarea" />
          <div class="error-wrapper">
            <p class="error" v-if="error.message">{{error.message}}</p>
          </div>
        </div>
        <button class="send-button" @click.prevent="sendMessage">Send</button>
      </form>
    <DisplayNotification v-show="showDisplayNotification" :error="showError"  :message="notificationMessage" />
    </div>
    <SidePosts class="side-posts-desktop"/>
  </div>
</template>

<script>
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import notification from '@/mixins/notification'
import SidePosts from '@/components/SidePosts'
import DisplayNotification from '@/components/DisplayNotification'

export default {
  components: {
    SidePosts,
    DisplayNotification
  },
  mixins: [notification],
  data() {
    return {
      message: '',
      email_address: '',
      error: {
        message: '',
        email_address: ''
      },
      showError: false,
      notificationMessage: ''
    }
  },
  methods: {
    async sendMessage() {
      this.error = {}
      this.showError = false
      this.validateInput()
      if (this.error.message || this.error.email_address) return
      this.$nuxt.$loading.start()

      try {
        const res = await this.$axios.post(`/api/sendmessage`, {
          email_address: this.email_address,
          message: this.message
        })
        if (res.status === 200) {
          ;(this.email_address = ''),
            (this.message = ''),
            (this.notificationMessage = `You message has been succesfully sent`)
          this.showNotification()
        } else {
          throw new Error('An error occured, please try again')
        }
      } catch (e) {
        this.showError = true
        this.notificationMessage = e.message
        this.showNotification()
      } finally {
        this.$nuxt.$loading.finish()
      }
    },
    validateInput() {
      if (!isEmail(this.email_address))
        this.error.email_address = `Please enter a valid email address`
      if (isEmpty(this.message)) this.error.message = `Message can not be empty`
    }
  }
}
</script>

<style lang='scss' scoped>
.textarea {
  height: 250px;
}

.input,
.textarea {
  width: 100%;
  font-weight: 300;
  font-size: 1rem;
  border-radius: 25px;
  border: 1px solid #c4c4c4;
  background-color: #f7faff;
  padding: 0.75rem;
  outline: none;
  & :focus {
    outline: none;
  }
}
.error-wrapper,
label {
  padding-left: 0.75rem;
}
.page {
  display: flex;
  justify-content: space-between;
}
.main {
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
}
.send-button {
  background-color: #76a6ff;
  border-radius: 25px;
  color: white;
  padding: 0.5rem 2rem;
}
button:focus,
textarea:focus {
  outline: none;
}
textarea {
  resize: none;
}
.error-wrapper {
  height: 1.5rem;
}
.error {
  font-size: 0.85rem;
  color: #ff2e2e;
}
h4 {
  margin-bottom: 0.5rem;
}
</style>
