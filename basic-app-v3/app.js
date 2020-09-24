const App = Vue.createApp({
  data() {
    return {
      message: "This works in Vue 2!",
    }
  },
  methods: {
    changeMessage() {
      this.message = "Will it work in Vue 3?"
    },
  },
})

App.component("the-button", {
  template: '<button @click="updateMessage">Click me</button>',
  emits: {
    update(value) {
      console.log(value)
      return true // if false will wanr but still trigger
    },
  },
  methods: {
    // emits: ['update'],
    updateMessage() {
      this.$emit("update", "EMIT UPDATE!")
    },
  },
})

App.mount("#app")
// Vue.component("the-button", {
//   template: '<button @click="updateMessage">Click me</button>',
//   methods: {
//     updateMessage() {
//       this.$emit("update")
//     },
//   },
// })

// Vue 2 init

// new Vue({
//   el: '#app',
//   data: {
//     message: 'This works in Vue 2!',
//   },
//   methods: {
//     changeMessage() {
//       this.message = 'Will it work in Vue 3?';
//     },
//   },
// });
