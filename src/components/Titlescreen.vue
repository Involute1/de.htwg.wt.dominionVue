<template>
    <v-container fill-width fluid>
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
                   justify="center">
                <button class="btn play" v-on:click="$router.push('game'); send();">

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
        <v-row>
            <v-col align="center"
                   justify="center">
                <button class="btn rules" v-on:click="$router.push('about')">
                    <v-img class="button-icon"
                           height="30px"
                           width="30px"
                           src="img/arrow.png">
                    </v-img>
                    <div class="text">
                        Rules
                    </div>
                </button>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        methods: {
          send() {
            this.$store.dispatch("request", 'local');
          }
        }
    }
</script>