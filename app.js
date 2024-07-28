const app = Vue.createApp({
  // template: '<h2>Hello vue3</h2>',
  data() {
    return {
      book: "Think like zuk",
      author: "zucarburg",
      age:25,
    }
  },
  methods: {
    increaseAge() {
      this.age++;
    }
  }
});
app.mount('#app');