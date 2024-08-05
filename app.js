const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          title: "Think like zuk",
          author: "zucarburg",
          age: 25,
          img: "images/sport1.jpg",
          isFav: true,
        },
        {
          title: "Think like zuk",
          author: "zucarburg",
          age: 25,
          img: "images/sport2.jpg",
          isFav: false,
        },
        {
          title: "Think like zuk",
          author: "zucarburg",
          age: 25,
          img: "images/sport3.jpg",
          isFav: true,
        },
        {
          title: "Think like zuk",
          author: "zucarburg",
          age: 25,
          img: "images/sport3.jpg",
          isFav: true,
        },
        {
          title: "Think like zuk",
          author: "zucarburg",
          age: 25,
          img: "images/sport3.jpg",
          isFav: true,
        },
      ],
      link: "http://www.google.com",
      bookStatus: true,
    };
  },
  methods: {
    increaseAge() {
      this.age++;
    },
    addFavorite(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filterBooks() {
      return this.books.filter((book) => {
        return book.isFav;
      });
    },
  },
});
app.mount("#app");
