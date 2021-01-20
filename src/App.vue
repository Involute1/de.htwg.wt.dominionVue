<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            class="pt-4"
            color="grey lighten-3"
            mini-variant
    >
      <v-avatar class="d-block text-center mx-auto mb-5 mt-5" v-on:click="$router.push('titlescreen')">
        <img src="img/home.png">
      </v-avatar>
      <v-avatar class="d-block text-center mx-auto mb-5" style="" v-on:click="$router.push('game')">
        <img src="img/play-button.png">
      </v-avatar>
      <v-avatar class="d-block text-center mx-auto mb-5" v-on:click="$router.push('about')">
        <img src="img/info.png">
      </v-avatar>
      <a href="https://github.com/Involute1/de.htwg.wt.dominionVue" target="_blank">
        <v-avatar class="d-block text-center mx-auto mb-5">
          <img src="img/github.png">
        </v-avatar>
      </a>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    name: 'App',

    computed: {},

    mounted() {
      this.$store.dispatch("connectWebsocket");
    }
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=McLaren&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap');

  p, h4, .btn, .v-input, .player_amount, li, .game-info, .card-stack, .game-information-container, .text {
    font-family: 'McLaren', cursive;
  }

  h4, .btn, .player_amount, .card-stack, .text {
    font-weight: bold;
  }

  .btn, .player_amount, .game-info, .card-stack, .game-information-container, .text {
    text-transform: uppercase;
  }

  .btn {
    text-align: center;
    font-size: 25px;
    width: 140px;
    height: 70px;
    -webkit-border-radius: 70px;
    border-radius: 70px;
    outline: none;
  }

  .hand-decks {
    margin: auto;
  }

  .card-stack, .game-information-container {
    font-size: 25px;
  }

  .player-selection.btn, .player-names.btn {
    font-weight: normal;
  }

  .player-selection.btn {
    width: 170px;
  }

  .player-names.btn {
    width: 200px;
  }

  .game-info {
    float: left;
    margin: 10px 0 0 70px;
    font-size: 20px;
  }

  div.text, .rules {
    text-align: left;
  }

  .hidden-win-hand, .hidden-win-playing {
    display: none;
  }

  .card_image {
    width: 150px;
    display: block;
    margin: 10px;
    cursor: pointer;
  }

  .v-avatar img {
    width: 25px !important;
    height: 25px !important;
  }

  .v-avatar {
    border-radius: 0 !important;
  }

  .v-image {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .v-avatar, object, svg {
    cursor: pointer;
  }

  .play .v-image, .rules .v-image {
    display: none;
  }

  .play:hover .v-image, .rules:hover .v-image {
    display: block;
  }

  .v-image.button-icon {
    float: left;
    margin-right: 15px;
    margin-top: 0 !important;
  }

  .text {
    display: block;
    margin-left: 15px;
  }


  .player_amount {
    margin-bottom: 35px;
  }

  .v-input {
    width: 800px;
    font-size: 22px;
    font-weight: bold;
  }

  .v-image.button-icon {
    float: left;
    margin-right: 15px;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .text {
    display: block;
    margin-left: 15px;
  }

  .player_amount {
    text-align: center;
    font-size: 35px;
  }

  button.player_amount {
    font-weight: normal;
  }

  h4 {
    font-size: 25px;
    margin-top: 35px;
  }

  .rule-button {
    margin-bottom: 30px;
  }

  .card-stack, .game-information-container {
    text-align: center;
    border: 3px solid black;
    margin-bottom: 10px;
    padding: 0 0 10px 20px;
  }
</style>