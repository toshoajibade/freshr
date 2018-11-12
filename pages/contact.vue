<template>
  <div class="page">
    <div class="main">
      <h4>We will definitely love to hear from you</h4>

      <div>
        <!-- <input v-model.trim="email_address" @blur="validate" type="email" placeholder="Enter your email here"> -->

        <textarea name="message" v-model="messageAdmin" placeholder="Type your message here" class="textarea" />
        <div class="error-wrapper">
          <p class="error" v-if="error.messageAdmin">Message can not be empty</p>
        </div>
        <button class="send-button" @click="sendMessage">Send</button>
      </div>
    </div>
    <SidePosts class="side-posts-desktop"/>
  </div>
</template>

<script>
import validator from 'validator'
import SidePosts from '@/components/SidePosts'
export default {
  components: {
    SidePosts
  },
  data() {
    return {
      messageAdmin: '',
      error: {
        messageAdmin: false
      }
    }
  },
  methods: {
    sendMessage() {
      this.error = {}
      if (validator.isEmpty(this.messageAdmin))
        return (this.error.messageAdmin = true)
      console.log(`i am coming`)
    }
  }
}
</script>

<style lang='scss' scoped>
.textarea {
  width: 100%;
  height: 350px;
  border-radius: 25px;
  margin-top: 1rem;
  border: 1px solid #c4c4c4;
  background-color: #f7faff;
  padding: 1rem;
  & :focus {
    outline: none;
  }
}
.page {
  display: flex;
}
.main {
  width: 75%;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.send-button {
  background-color: #76a6ff;
  border-radius: 25px;
  color: white;
  height: 2rem;
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
  height: 2rem;
  margin-top: 0.5rem;
}
.error {
  font-size: 0.85rem;
  color: #ff2e2e;
}
</style>
