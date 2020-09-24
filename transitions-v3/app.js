// new Vue({
//   el: '#app',
//   data: {
//     isVisible: true
//   },
//   methods: {
//     toggleBox() {
//       this.isVisible = !this.isVisible;
//     }
//   },
// });

const App = Vue.createApp({
  data() {
    return {
      isVisible: true,
    }
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible
    },
  },
})

App.mount("#app")
