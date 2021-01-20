<template>
  <v-container fill-width fluid>
    <v-row>
      <v-col></v-col>
      <v-col align="center"
             justify="center">
        <v-img
            lazy-src="img/logo.jpg"
            height="150px"
            width="450px"
            src="img/logo.jpg">
        </v-img>
        <div class="rules">
          <h4>Setup:</h4>
          <p>Each player starts with 10 cards: 7 copper and 3 estates as a starting deck.</p>
          <h4>Game Play:</h4>
          <p>A turn consists of 3 phases:</p>
          <ul>
            <li>
              <b>Action:</b> The player may play one action card from his hand.
            </li>
            <li>
              <b>Buy:</b> The player may buy a card in a pile on the table.
            </li>
            <li>
              <b>Cleanup:</b> The player must discard all played and unplayed cards back to the discard
              pile and draw again 5 new cards.
            </li>
          </ul>

          <h4>Action phase:</h4>
          <p>
            The player may play one action cards. These are the Kingdom cards that say: "Action" at the
            bottom of the card.<br>
            Players don't start with any Action cards, so during the first 1 turns no Actions can be
            performed.<br>
            Normally a player can play only one card, but some action cards allow the player to play more
            cards.<br>
            To play a card, the player lays the action card face-up in his play area. He announces which
            card he is playing and follows the instructions written on that card from top to bottom.<br>
            The player may still play the Action card even when he is not able to do everything listed.<br>
            Any action cards played remain in the player\'s play area until the Clean-up phase of the turn
            unless otherwise indicated on the card.<br>
            The action phase ends when the player cannot or chooses not to play any more Action cards.<br>
          </p>
          <p>
            The player can gain one card from the Supply by paying its cost. The cost of a card is found in
            the lower left corner.<br>
            Any card in the Supply maybe be bought, but the player may not purchase cards from the Trash
            Pile. When a player played a certain card in his Action phase, its possible that he is allowed
            to buy more than one card.<br>
            The player places the purchased card from the Supply pile face-up on his Discard pile. The
            ability of the purchased card may not be used when he just gain the card.<br>
            The treasure cards remain in the play area until the Clean-up phase. Treasure cards will be used
            multiple times during the game. Treasure cards are a source of income, not a resource that is
            used up when played.<br>
            Coppers are worth 1 coin, Silvers are worth 2 coins and Golds are worth 3 coins.<br>
          </p>
          <p>
            All cards gained are already in the player\'s discard pile. The player places also all his cards
            (played and unplayed) to this pile.<br>
            The player now draws a new hand of 5 cards from his Deck. If there are not enough cards in his
            Deck, he draws as many as he can.<br>
            The player shuffles then his Discard pile to form a new face-down Deck, and then draws the rest
            of his new hand.<br>
            Once the player has drawn a new hand of 5 cards, the next player starts his turn.<br>
            To speed up play, players may begin their turns while the previous players are completing their
            clean-up phases, but when someone plays an Attack card, the players must complete their Clean-up
            phases first in order to resolve the Attack.<br>
          </p>
          <p>
            The game ends when the last Province is bought, or when 3-4 piles are empty. The players will
            count their victory points in their decks and the player with the most points wins.<br>
            If there is a tie, then the player with the fewest turns wins.
          </p>
        </div>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col align="center"
             justify="center">
        <button class="btn rule-button play" v-on:click="$router.push('game')">

          <v-img class="button-icon"
                 height="30px"
                 width="30px"
                 src="img/arrow.png">
          </v-img>
          <div class="text">
            Play
          </div>
        </button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "about",
        data() {
            return {
                title: 'This is an about page'
            }
        }
    }
</script>

<style>

</style>