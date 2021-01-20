<template>
  <div class="game">
    <div class="card-stack gameboard-cards">
      Gamekarten
      <div class="hidden-win-playing">{{ playingCardDecks }}</div>
      <v-row class="playing-decks"
             align="center"
             justify="center">
        <div id="card_0" class="card game_card" v-on:click="push_play('0')">
          <img class="card_image" src="img/cards/Copper.png">
        </div>
        <div id="card_1" class="card game_card" v-on:click="push_play('1')">
          <img class="card_image" src="img/cards/Silver.png">
        </div>
        <div id="card_2" class="card game_card" v-on:click="push_play('2')">
          <img class="card_image" src="img/cards/Gold.png">
        </div>
        <div id="card_3" class="card game_card" v-on:click="push_play('3')">
          <img class="card_image" src="img/cards/Estate.png">
        </div>
        <div id="card_4" class="card game_card" v-on:click="push_play('4')">
          <img class="card_image" src="img/cards/Duchy.png">
        </div>
        <div id="card_5" class="card game_card" v-on:click="push_play('5')">
          <img class="card_image" src="img/cards/Province.png">
        </div>
        <div id="card_6" class="card game_card" v-on:click="push_play('6')">
          <img class="card_image" src="img/cards/Village.png">
        </div>
        <div id="card_7" class="card game_card" v-on:click="push_play('7')">
          <img class="card_image" src="img/cards/Festival.png">
        </div>
        <div id="card_8" class="card game_card" v-on:click="push_play('8')">
          <img class="card_image" src="img/cards/Cellar.png">
        </div>
        <div id="card_9" class="card game_card" v-on:click="push_play('9')">
          <img class="card_image" src="img/cards/Mine.png">
        </div>
        <div id="card_10" class="card game_card" v-on:click="push_play('10')">
          <img class="card_image" src="img/cards/Smithy.png">
        </div>
        <div id="card_11" class="card game_card" v-on:click="push_play('11')">
          <img class="card_image" src="img/cards/Remodel.png">
        </div>
        <div id="card_12" class="card game_card" v-on:click="push_play('12')">
          <img class="card_image" src="img/cards/Merchant.png">
        </div>
        <div id="card_13" class="card game_card" v-on:click="push_play('13')">
          <img class="card_image" src="img/cards/Workshop.png">
        </div>
        <div id="card_14" class="card game_card" v-on:click="push_play('14')">
          <img class="card_image" src="img/cards/Gardens.png">
        </div>
        <div id="card_15" class="card game_card" v-on:click="push_play('15')">
          <img class="card_image" src="img/cards/Market.png">
        </div>
      </v-row>
    </div>
    <div class="card-stack handcards">
      Handkarten
      <div class="hidden-win-hand">{{ handCards }}</div>
      <v-row class="playing-decks-hand"
             align="center"
             justify="center">
        <div id="card_hand_1" class="card hand_card" v-on:click="push_hand('0')">
          <img class="card_image" src="img/cards/Copper.png">
        </div>
        <div id="card_hand_2" class="card hand_card" v-on:click="push_hand('1')">
          <img class="card_image" src="img/cards/Silver.png">
        </div>
        <div id="card_hand_3" class="card hand_card" v-on:click="push_hand('2')">
          <img class="card_image" src="img/cards/Gold.png">
        </div>
        <div id="card_hand_4" class="card hand_card" v-on:click="push_hand('3')">
          <img class="card_image" src="img/cards/Estate.png">
        </div>
        <div id="card_hand_5" class="card hand_card" v-on:click="push_hand('4')">
          <img class="card_image" src="img/cards/Duchy.png">
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import jQuery from "jquery";

var interval = setInterval(getImages, 100);
var intervalState = setInterval(checkState, 50);


function getImages() {
  var cards = "";
  var cardsJSON = "";
  cards = jQuery(".hidden-win-hand").html();
  console.log(cards);
  console.log(jQuery(".hidden-win-playing").html());
  cardsJSON = JSON.parse(cards);
  console.log(cardsJSON);
  if (cardsJSON !== "" && cardsJSON !== null) {
    $("#card_hand_1 img").attr("src","img/cards/" + cardsJSON[0][0].cardName + ".png");
    $("#card_hand_2 img").attr("src","img/cards/" + cardsJSON[0][1].cardName + ".png");
    $("#card_hand_3 img").attr("src","img/cards/" + cardsJSON[0][2].cardName + ".png");
    $("#card_hand_4 img").attr("src","img/cards/" + cardsJSON[0][3].cardName + ".png");
    $("#card_hand_5 img").attr("src","img/cards/" + cardsJSON[0][4].cardName + ".png");
    clearInterval(interval);
  }
}

function checkState() {
  var phase = "";
  phase = document.getElementById("phase").innerHTML;
  if (phase.includes("Actionphase")) {
    $(".game_card img").css("cursor", "not-allowed");
    $(".hand_card img").css("cursor", "pointer");
    $(".handcards").css("background-image", "none");
    $(".gameboard-cards").css("background-image", "url(img/bg.png)");
  } else if (phase.includes("Buyphase")) {
    $(".game_card img").css("cursor", "pointer");
    $(".hand_card img").css("cursor", "not-allowed");
    $(".handcards").css("background-image", "url(img/bg.png)");
    $(".gameboard-cards").css("background-image", "none");
  }
}

export default {
  name: "GameHandCards",
  computed: {
    ...mapGetters({
      handCards: 'getPlayerHand',
      playingCardDecks: 'getPlayingDecks'
    })
  },
  methods: {
    send(cardId) {
      this.$store.dispatch("request", cardId);
    },
    push_hand(i) {
      console.log("i send" + i);
      var phase = "";
      phase = document.getElementById("phase").innerHTML;
      if (phase.includes("Actionphase")) {
        this.$store.dispatch("request", i);
      }
    },
    push_play(i) {
      console.log("i send" + i);
      var phase = "";
      var cards = "";
      phase = document.getElementById("phase").innerHTML;
      console.log();
      if (phase.includes("Buyphase")) {
        this.$store.dispatch("request", i);
        cards = jQuery(".hidden-win-hand").html();
        cards = JSON.parse(cards);
        $("#card_hand_1 img").attr("src","img/cards/" + cards[0][0].cardName + ".png");
        $("#card_hand_2 img").attr("src","img/cards/" + cards[0][1].cardName + ".png");
        $("#card_hand_3 img").attr("src","img/cards/" + cards[0][2].cardName + ".png");
        $("#card_hand_4 img").attr("src","img/cards/" + cards[0][3].cardName + ".png");
        $("#card_hand_5 img").attr("src","img/cards/" + cards[0][4].cardName + ".png");
      }

    }
  }
}
</script>

<style scoped>

</style>