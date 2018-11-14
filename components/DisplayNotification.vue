<template>
  <div>
    <transition name="fade">
      <div class="wrapper">
        <div class="notification">
          <p v-if="error" class="error-message">{{message}}</p>
          <p v-else class="success-message">{{message}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DisplayNotification',
  props: {
    message: {
      type: String,
      required: true
    },
    error: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
}
.notification {
  padding: 1rem;
  height: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  background-color: #f7faff;
  border-radius: 25px;
  & > p {
    text-align: center;
    font-size: 1.2rem;
  }
  & > .success-message {
    color: rgb(10, 156, 10);
  }
  & > .error-message {
    color: #ff2e2e;
  }
}
</style>