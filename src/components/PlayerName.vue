<template>
    <v-container fill-width fluid class="playername">
        <v-row>
            <v-col align="center"
                   justify="center">
                <v-img
                        lazy-src="img/logo.jpg"
                        height="150px"
                        width="450px"
                        src="img/logo.jpg">
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center"
                   class="player_amount mt-9">
                <div class="tui-instructions">
                  {{ htmlString }}
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center">
                <v-text-field class="name-input" id="name-input">
                </v-text-field>
                <button class="btn play player-names" v-on:click="$router.push('game'); send()">
                    <v-img class="button-icon"
                           height="30px"
                           width="30px"
                           src="img/arrow.png">
                    </v-img>
                    <div class="text send-name">
                        Absenden
                    </div>
                </button>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
      computed: {
        ...mapGetters({
          htmlString: 'getHtml'
        })
      },
      methods: {
        send() {
          var playerName = document.getElementById("name-input").value;
          this.$store.dispatch("request", playerName);
        }
      }
    }
</script>