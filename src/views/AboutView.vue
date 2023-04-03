<template>
  <div class="about">
    <div class="content">
      <div class="description_1">
        <img src="@/assets/Gow_Full.png" alt="" class="image" />
        <p>Olá!, Esse projeto foi desenvolvido com Vuejs</p>
      </div>
      <div class="description_2">
        <img src="@/assets/Gta_Full.png" alt="" class="image" />
        <p>Utilizando games que sou muito fã</p>
      </div>
      <div class="description_3">
        <img src="@/assets/PTR_Full.png" alt="" class="image" />
        <p>Espero que goste !</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.description_1,
.description_3,
.description_2 {
  position: absolute;
  width: 40%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.description_1 {
  top: 0;
  left: 0;
  margin: 10vh 0.5rem;
}
.description_2 {
  right: 0;
  margin: 35vh 0.5rem;
}
.description_1, .description_3{
  animation: 2s left;
}
.description_2{
  animation: 2s right
}
.description_3 {
  bottom: 0;
  left: 0;
  margin: 2rem 0.5rem;
  margin-bottom: 10vh;
}
.image {
  width: 90%;
  height: 90%;
  border-radius: 1rem;
  border: 1px solid red;
}
p {
  margin-top: 1rem;
  font-size: 0.8rem;
  text-align: center;
}
@media (max-width: 600px) {
  .description_1,
  .description_3,
  .description_2 {
    position: initial;
    margin: 0;
    padding: 0;
    height: 15%;
    flex-direction: row;
  }
  .content,
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .description_1 {
    margin-top: 30vh;
  }
  .image {
    width: 50vw;
    height: 20vh;
    margin: 0 10vw;
    position: absolute;
    left: 0;
  }
  p {
    text-align: center;
    font-size: 0.8rem;
    width: 30vw;
    height: 10vh;
    margin: 0 5vw;
    position: absolute;
    right: 0;
  }
}
@keyframes left{
  0%{
    transform: translateX(-100px);
  }
  100%{
    transform:translateX(0)
  }
}
@keyframes right{
  0%{
    transform: translateX(100px);
  }
  100%{
    transform:translateX(0)
  }
}
</style>
