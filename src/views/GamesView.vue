<template>
    <div class="games_container">
        <div class="games_preview">
            <!-- Imagem central -->
            <div class="image">
                <img :src="currentImage" :alt="currentDescription" class="img fade-in-out" :class="{ show: showImage }" />
            </div>
            <div class="description_game">
                <!-- Descrição -->
                <h1>{{ currentTitle }}</h1>
                <p>{{ currentDescription }}</p>
            </div>
        </div>
        <div class="games_footer">
            <!-- Imagens pequenas -->
            <div class="game_change">
                <div class="game" v-for="(game, index) in games" :key="index">
                    <img :src="game.image" :alt="game.title"
                        @click="changePreview(game.image, game.title, game.description)">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            games: [
                {
                    image: require(`../assets/aptrwallpaper.jpg`),
                    title: "A Plague Tale: Requiem",
                    description: "Enfrente horrores e mistérios sombrios numa emocionante sequência deste jogo de aventura e sobrevivência medieval.",
                },
                {
                    image: require("../assets/GTA5wallpaper.jpg"),
                    title: "Grand Theft Auto V",
                    description: "Embarque numa jornada criminosa em Los Santos neste famoso jogo de ação em mundo aberto.",
                },
                {
                    image: require("../assets/gowwallpaper.png"),
                    title: "God of War",
                    description: "Aventure-se nas batalhas épicas como Kratos, um guerreiro espartano, numa busca por redenção e vingança.",
                },
            ],
            currentImage: require(`../assets/aptrwallpaper.jpg`),
            currentTitle: "A Plague Tale: Requiem",
            currentDescription: "Enfrente horrores e mistérios sombrios numa emocionante sequência deste jogo de aventura e sobrevivência medieval.",
            showImage: true,
        };
    },
    methods: {
        changePreview(image, title, description) {
            this.showImage = false; // Inicia a animação de fade-out
            setTimeout(() => {
                this.currentImage = image;
                this.currentTitle = title;
                this.currentDescription = description;
                this.showImage = true; // Exibe a imagem e inicia a animação de fade-in
            }, 300); // Espera 300ms (mesma duração da transição no CSS) antes de trocar a imagem e iniciar o fade-in
        },
    },
}
</script>
