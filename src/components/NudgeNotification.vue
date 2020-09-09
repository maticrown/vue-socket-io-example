<template>
  <v-snackbar
    :timeout="3000"
    bottom
    v-model="snackbar.visible"
  >
    {{ snackbar.text }}
    <v-btn flat color="pink" @click.native="snackbar.visible = true">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: {
        visible: true,
        text: 'visible',
      },
    }
  },

  mounted() {
    this.$socket.on('client-nudged', data => {
      this.snackbar.text = `${data.from} nudged you!`
      this.snackbar.visible = true
    })
  },
}
</script>
