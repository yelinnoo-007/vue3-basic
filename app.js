const app = Vue.createApp({
  // template: '<h2>Hello vue3</h2>',
  data() {
    return {
      books: [
        {
          title: "Think like zuk",
          author: "zucarburg",
          age: 25,
        },
        {
          title: "Think like zuk",
          author: "zucarburg",
          age: 25,
        },
        {
          title: "Think like zuk",
          author: "zucarburg",
          age: 25,
        },
      ],
      link:"http://www.google.com",
      bookStatus: true,
    };
  },
  methods: {
    increaseAge() {
      this.age++;
    },
    toogle() {
      this.bookStatus = false;
    },
    mouseoverHandler(event, message) {
      alert(event.type + message);
    },
    mouseleaveHandler(event) {
      alert("mouse leave" + event.type);
    },
    doubleclickHandler(event) {
      alert("double click" + event.type);
    },
  },
});
app.mount("#app");
