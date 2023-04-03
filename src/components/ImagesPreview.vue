<template>
  <div className="home_container">
    <div v-if="message" class="message">
      <h1>Limite máximo alcançado!</h1>
    </div>
    <!-- Imagem maior -->
    <div class="card_master">
      <img :src="this.imgSrc" class="image" />
    </div>
    <!-- Imagens menores -->
    <div class="imagesPreview">
      <div class="images_container">
        <img
          src="@/assets/Gow_Cover.png"
          alt=""
          class="preview"
          id="gow"
          @click="imgFull"
        />
        <span id="gow-price">R$ 199.90</span>
      </div>
      <div class="images_container">
        <img
          src="@/assets/Gta_Cover.png"
          alt=""
          class="preview"
          id="gta"
          @click="imgFull"
        />
        <span id="gta-price">R$ 88.89</span>
      </div>
      <div class="images_container">
        <img
          src="@/assets/PTR_Cover.png"
          alt=""
          class="preview"
          id="ptr"
          @click="imgFull"
        />
        <span id="ptr-price">R$ 169.90</span>
      </div>
    </div>
      <div :class="{Cart:this.$store.state.cart.length >=1}">
        <h1 v-if="this.$store.state.cart.length >=1">Teste</h1>
        <div v-for="(product, index) in this.$store.state.cart"
        :key="index" class="products">
        <span id="productName">
          {{ product.name }}
        </span>
           |
           <span id="productPrice">
             R$ {{ product.price }}
           </span>
           <button @click="remove" id="remove">Remove</button> 
          </div>
          <div class="buttons" v-if="this.$store.state.cart.length >=1">
            <router-link to="/cart" class="link">
            <button id="buy">Buy</button>
          </router-link>
          </div>
      </div>
    </div>
</template>

<script>
import gow from "@/assets/Gow_Full.png";
import gta from "@/assets/Gta_Full.png";
import ptr from "@/assets/PTR_Full.png";
export default {
  data() {
    return {
      imgSrc: gow,
      change: false,
      message: false,
    };
  },
  methods: {
    // Função para trocar a imagem maior
    imgFull(e) {
      const element = e.target.id;
      if (this.$store.state.cart.length >= 5) {
        this.message = true;
        setTimeout(() => {
          this.message = false;
        }, 2000);
      } else {
        switch (element) {
          case "gow": {
            this.imgSrc = gow;
            this.$store.state.cart.push({ name: "Gow", price: 200.0 });
            break;
          }
          case "gta": {
            this.imgSrc = gta;
            this.$store.state.cart.push({ name: "Gta 5", price: 89 });
            break;
          }
          case "ptr": {
            this.imgSrc = ptr;
            this.$store.state.cart.push({
              name: "Aptr",
              price: 170.0,
            });
            break;
          }
        }
        this.change == true ? (this.change = false) : (this.change = true);
      }
    },
    remove() {
    this.$store.commit("removeProduct", this.product);
  },
  },
};
</script>
<style>
.card_master,
.images_container, .buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: 3s animate;
}
.imagesPreview {
  display: flex;
  justify-content: space-around;
  width: 55%;
  height: 20%;
  align-items: center;
  margin-top: 1rem;
}
.images_container {
  width: 90%;
  height: 150%;
  border: 1px solid #ff1919;
  margin: 1rem;
  border-radius: 1rem;
}
.imagesPreview span {
  position: absolute;
  margin-top: 30vh;
  background-color: rgba(255, 25, 25, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
.card_master {
  width: 55%;
  height: 55%;
  margin: 10vh auto;
}
.image {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  border: 1px solid #ff1919;
  margin-top: 10vh;
}
.preview {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  cursor: pointer;
}
.message {
  background-color: rgba(255, 49, 49, 0.9);
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 10vh 15vw;
  width: 70vw;
  text-align: center;
  position: fixed;
  animation: .5s showAnimation;
}
.Cart{
  color: whitesmoke;
  position: absolute;
  right: 8px;
  height: 80vh;
  border: 1px solid rgba(255, 49, 49, 0.9);
  top: 15vh;
  width: 20vw;
  border-radius: 1rem;
  animation: showAnimation .5s ;
}
.Cart h1{
  text-align: center;
  margin-top: 5vh;
}
#buy{
  background-color: #003300;
}
#remove{
  background-color: #b20000;
  padding: .3rem;
  border-radius: .1.5rem;
}
#productName, #productPrice{
  margin: .5rem;
}
#productPrice{
  background-color: #e50000;
  padding: .2rem .5rem;
  border-radius: .2rem;
}
.products{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
button{
  padding: .5rem 1rem;
  border-radius: .5rem;
  border: 1px solid gray;
  color: white;
  margin: .5rem;
  cursor: pointer;
}
.buttons{
  flex-direction: row;
  margin-top: 5vh;
}
#gta-price, #ptr-price, #gow-price{
  visibility: hidden;
}
#gta:hover ~ #gta-price {
  visibility: visible;
  animation: .5s showAnimation;
}
#gow:hover ~ #gow-price {
  visibility: visible;
  animation: .5s showAnimation;
}
#ptr:hover ~ #ptr-price {
  visibility: visible;
  animation: .5s showAnimation;
}
@media (max-width:1000px) {
  .Cart{
    width: 50vw;
    margin-right: 2rem;
    background-color: rgba(178, 0, 0, .5);
  }
}
@media (max-width: 600px) {
  .Cart{
    display: none;
  }  
  .card_master .image {
    width: 85vw;
    height: 70%;
  }
  .imagesPreview span {
    font-size: 0.7rem;
    margin-top: 2vh;
    position: relative;
  }
  .imagesPreview {
    width: 100vw;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 165vh;
  }
  .images_container {
    width: 100%;
    height: 100%;
    border: none;
    flex-direction: column;
    margin: 2vh;
  }
  .images_container img {
    width: 80%;
    height: 90%;
    border: 1px solid gray;
  }
  .card_master {
    width: 80vw;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    margin: 21vh 10vw;
  }
  .content {
    height: 175vh;
  }
  .message {
    margin: 15vh 15vw;
    font-size: 0.8rem;
  }
 
}
@keyframes showAnimation{
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
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
