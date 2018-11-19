// Show notification messages on success or failure
export default {
  data() {
    return {
      showDisplayNotification: false
    }
  },
  methods: {
    showNotification() {
      this.showDisplayNotification = true
      setTimeout(() => {
        this.showDisplayNotification = false
      }, 3000)
    }
  }
}
