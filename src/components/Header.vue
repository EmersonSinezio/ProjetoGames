<template>
  <header>
    <div class="links">
      <h1 class="HeaderTitle">
        <router-link to="/" class="link">Games</router-link>
      </h1>
      <ul class="menu">
        <li><router-link to="/about" class="link">Sobre</router-link></li>
        <li><router-link to="/contact" class="link">Contato</router-link></li>
      </ul>
    </div>
    <div class="Add_cart">
      <span><router-link to="/cart" class="link">Carrinho</router-link></span>
      <span id="cart">{{ this.$store.state.cart.length }}</span>
    </div>
    <DropDownVue />
    <span id="cart_Drop">{{ this.$store.state.cart.length }}</span>
  </header>
</template>
<script>
import DropDownVue from "./DropDown.vue";

export default {
  name: "HeaderNav",
  components: { DropDownVue },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gruppo&family=Inter:wght@400;600&family=Press+Start+2P&display=swap");

header {
  height: 10vh;
  background-color: #990000;
  border-radius: 10px;
  width: 80vw;
  margin: 0 10vw;
  position: fixed;
  top: 0;
}
header,
.links,
.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.menu li {
  margin-left: 1rem;
  list-style: none;
}
.link {
  text-decoration: none;
  color: red;
  border-bottom: 1px solid transparent;
}
.link:hover {
  transition: 0.7s;
  border-color: red;
  cursor: pointer;
}
.Add_cart span {
  margin: auto 1vw;
}
#cart {
  background-color: red;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
#cart_Drop {
  display: none;
}
@media (max-width: 600px) {
  header {
    position: fixed;
    margin: 0 10vw;
  }
  .links,
  .Add_cart {
    display: none;
  }
  #cart_Drop {
    display: block;
    background-color: red;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
}
</style>
