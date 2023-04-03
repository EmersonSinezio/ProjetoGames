<template>
  <div class="cart">
    <div class="products">
      <h2>Total: R$ {{ $store.getters.total }}</h2>
      <div class="buy" v-if="buyChange">
        <h1>Comprado com sucesso!</h1>
      </div>
      <div
        class="gamesIncart"
        v-for="(product, index) in $store.state.cart"
        :key="index"
      >
        <span>{{ product.name }}</span>
        <span id="border" />
        <span id="price"> R$ {{ product.price }} </span>
        <button id="remove" @click="remove">Remover</button>
      </div>
    </div>
    <div class="buttons">
      <button @click="buyOrCancel">Comprar</button>
      <button id="cancel" @click="buyOrCancel">Cancelar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buyChange: false,
    };
  },
  methods: {
    buyOrCancel(e) {
      const ev = e.target;
      if (ev.id == "cancel") {
        this.$store.commit("clean");
      } else {
        this.buyChange = true;
        this.$store.commit("clean");
        setTimeout(() => {
          this.buyChange = false;
        }, 2000);
      }
    },
    remove() {
      this.$store.commit("removeProduct", this.product);
    },
  },
};
</script>

<style scoped>
.cart {
  width: 90vw;
  height: 80vh;
  margin: 15vh auto;
}
h1 {
  margin-bottom: 5vh;
}
.products,
.cart,
.buy {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: 1s animate;
}
.products {
  border: 1px solid #ff1919;
  width: 80vw;
  height: 70vh;
  border-radius: 1rem;
  font-size: 1.1rem;
}
.products span {
  text-align: center;
  margin: 1rem 2vw;
}
.buttons button {
  padding: 1rem;
  border-radius: 1rem;
  margin: 2vh 1vw;
  cursor: pointer;
  background-color: #003300;
  border: none;
  color: #ccc;
}
.gamesIncart {
  margin: 1rem 0;
}
.buttons button:hover {
  transform: scale(1.1);
  transition: 0.5s;
}
#cancel {
  background-color: #b20000;
}
#border {
  border-left: 0.5px solid gray;
  margin: 1rem 1rem;
}
.buy {
  background-color: #b20000;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
}
.buy h1 {
  margin: auto;
}
h2 {
  margin-bottom: 3vh;
}
#remove {
  margin: 0 1vw;
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ff1919;
  background-color: #000;
  color: #ccc;
  cursor: pointer;
}
#remove:hover {
  transform: scale(1.1);
  transition: 0.5s;
  background-color: #111;
}
@media (max-width: 600px) {
  .cart {
    margin-top: 0;
    border: none;
  }
  .products {
    margin-top: 35vh;
    border: 1px solid #ff1919;
    width: 90vw;
    height: 80vh;
  }
  .gamesIncart {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1,
  h2 {
    font-size: 1rem;
  }
  h2 {
    margin-top: 5vh;
  }
}
@keyframes animate{
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
}
</style>
