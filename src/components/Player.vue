<template>
    <v-container fill-width fluid class="player">
        <v-row>
            <v-col align="center"
                   justify="center"
                   class="player_amount mt-9">
                <div class="tui-instructions">
                    {{htmlString}}
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center">
                <button class="btn play player-selection" value="3" v-on:click="send(3)">
                    <v-img class="button-icon"
                           height="30px"
                           width="30px"
                           src="img/arrow.png">
                    </v-img>
                    <div class="text">
                        3 Player
                    </div>
                </button>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center">
                <button class="btn play player-selection" value="4" v-on:click="send(4)">
                    <v-img class="button-icon"
                           height="30px"
                           width="30px"
                           src="img/arrow.png">
                    </v-img>
                    <div class="text">
                        4 Player
                    </div>
                </button>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center">
                <button class="btn play player-selection" value="5" v-on:click="send(5)">

                    <v-img class="button-icon"
                           height="30px"
                           width="30px"
                           src="img/arrow.png">
                    </v-img>
                    <div class="text">
                        5 Player
                    </div>
                </button>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex"

    export default {
        computed: {
            ...mapGetters({
                htmlString: 'getHtml'
            })
        },
        methods: {
            send(playerCount) {
                this.$store.dispatch("request", playerCount);
            }
        }
    }
</script>