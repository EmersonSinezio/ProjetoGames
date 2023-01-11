<template>
  <!-- dropDown -->
  <div class="drop">
    <div class="links">
      <h1 class="HeaderTitle">
        <router-link to="/" class="link">Logo</router-link>
      </h1>
      <div>
        <ul class="menu" v-if="this.show">
          <li><router-link to="/about" class="link">Sobre</router-link></li>
          <li><router-link to="/contact" class="link">Contato</router-link></li>
          <li><router-link to="/cart" class="link">Carrinho</router-link></li>
        </ul>
      </div>
      <div class="icon" @click="showMenu">
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          class="gb_0e"
          focusable="false"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
            fill-opacity="0.87"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showMenu() {
      this.show == false ? (this.show = true) : (this.show = false);
    },
  },
};
</script>

<style scoped>
.links,
.drop,
.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.menu {
  flex-direction: column;
  background-color: rgb(153, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
  margin: 10vh 15vw 0 0;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
}
.menu li {
  margin-left: 1rem;
  list-style: none;
  margin: auto;
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
.drop {
  display: none;
}
.icon {
  display: block;
}
@media (max-width: 600px) {
  .drop {
    display: block;
  }
}
</style>
