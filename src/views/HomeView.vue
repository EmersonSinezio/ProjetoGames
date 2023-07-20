<template>
  <div class="home_container">
    <div class="home_description">
      <div>
        <h1>Games</h1>
        <p>Bem-vindo ao nosso universo de jogos! Explore nossa seleção especial para mergulhar em aventuras emocionantes. Divirta-se e descubra o mundo dos games conosco!</p>
        <router-link to="/games">
          <button class="button">Explorar!</button>
        </router-link>
      </div>
    </div>
    <div class="home_image">
      <img src="../assets/wallpaperGow.jpg" alt="Kratos_god_of_war">
    </div>
  </div>
</template>

<style scoped>
  .button{
    margin-top: 1.5rem;
  }
</style>