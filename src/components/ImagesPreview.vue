<template>
  <div className="home_container">
    <div v-if="mensage" class="mensage">
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
        <span>R$ 199.90</span>
      </div>
      <div class="images_container">
        <img
          src="@/assets/Gta_Cover.png"
          alt=""
          class="preview"
          id="gta"
          @click="imgFull"
        />
        <span>R$ 88.89</span>
      </div>
      <div class="images_container">
        <img
          src="@/assets/PTR_Cover.png"
          alt=""
          class="preview"
          id="ptr"
          @click="imgFull"
        />
        <span>R$ 169.90</span>
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
      mensage: false,
    };
  },
  methods: {
    // Função para trocar a imagem maior
    imgFull(e) {
      const element = e.target.id;
      if (this.$store.state.cart.length >= 5) {
        this.mensage = true;
        setTimeout(() => {
          this.mensage = false;
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
  },
};
</script>
<style>
.card_master,
.images_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
.mensage {
  background-color: rgba(255, 49, 49, 0.9);
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 10vh 15vw;
  width: 70vw;
  text-align: center;
  position: fixed;
}
@media (max-width: 600px) {
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
  .mensage {
    margin: 15vh 15vw;
    font-size: 0.8rem;
  }
}
</style>
