<template>
  <div class="main">
    <div class="playerCount" v-if="htmlString == 'Please enter the number of Players, must be between 3 & 5:'">
      <Player></Player>
    </div>
    <div class="playerNames" v-else-if="htmlString.endsWith(' please enter your name:')">
      <PlayerName></PlayerName>
    </div>
    <div class="gameboard" v-else>
      <div class="gameinfo">
        <GameInfo></GameInfo>
      </div>
      <div class="gameplayingcards">
        <GamePlayingCards></GamePlayingCards>
      </div>
      <div class="gamehandcards">
        <GameHandCards></GameHandCards>
      </div>
    </div>
  </div>
</template>

<script>

import Player from "@/components/Player";
import PlayerName from "@/components/PlayerName";
import GameInfo from "@/components/GameInfo";
import GameHandCards from "@/components/GameHandCards";
import {mapGetters} from "vuex";

export default {
  name: "GameView",
  components: {GameHandCards, GameInfo, PlayerName, Player},
  computed: {
    ...mapGetters({
      htmlString: 'getHtml'
    })
  }
}

</script>
<style scoped>

</style>