//the root Vue instance
let modulestore = new Vue({
  el: "#app", // links to the div
  // the data option
  data: {
    sitename: "grpCW", // defines sitename
    product: {
      id: 1001,
      title: "Biology",
      location: "Dubai",
      space: 5,
      price: 200,
      image: "images/Biology.png",
    },
    cart: [], //creating cart array
  },
  // the methods option
  methods: {
    //method for adding item
    addItem() {
      if (this.product.space > 0) {
        this.product.space -= 1;
        this.cart.push(this.product.id);
      }
    },
  },
  // object for computed property
  computed: {
    canAdd() {
      return this.product.space != 0;
    },
  },
});
