<template>
  <v-form ref="form">
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
      <v-col align="center">
        <v-text-field label="Username" :counter="10" required></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-text-field label="Password" :counter="10" required></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-btn color="success" @click="submit">Submit</v-btn>
        <v-btn color="error" @click="reset">Clear</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "Authentication",
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    submit() {
      console.log("submit");
    }
  }
}
</script>

<style scoped>

</style>