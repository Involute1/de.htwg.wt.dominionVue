<template>
  <div class="game-information-container">
    <v-row>
      <v-col>
        <div class="game-info" id="playerName">Name: {{ pName }}</div>
        <div class="game-info" id="playerMoney">Money: {{ money }}</div>
        <div class="game-info" id="turn">Turn: {{ gameTurn }}</div>
        <div class="game-info" id="phase">Phase: {{ phase }}</div>
        <div class="game-info" id="playerActions">Actions: {{ actions }}</div>
        <div class="game-info" id="playerBuys">Buys: {{ buys }}</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "GameInfo",
  computed: {
    ...mapGetters({
      pName: 'getPlayerName',
      money: 'getPlayerMoney',
      gameTurn: 'getTurn',
      phase: 'getControllerPhase',
      actions: 'getPlayerActions',
      buys: 'getPlayerBuys'
    })
  }
}
</script>

<style scoped>

</style>