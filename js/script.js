let webstore = new Vue({
  el: "#app",
  data: {
    sitename: "grpCW",
    product: {
      id: 1001,
      title: "Biology",
      location: "Dubai",
      space: 5,
      price: 200,
      image: "images/Biology.png",
    },
    cart: [],
  },
  methods: {
    addItem() {
      let addB = document.getElementById("taskContainer");
      if (this.product.space > 0) {
        this.product.space -= 1;
        this.cart.push(this.product.id);
      }
      if (this.product.space == 0) {
        document.getElementById("addB").style.visibility = "hidden";
        document.getElementById("app").style.height = "170px";
      }
    },
  },
});
