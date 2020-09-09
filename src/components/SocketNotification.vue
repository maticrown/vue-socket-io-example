<template>
  <v-snackbar
    :timeout="3000"
    top
    v-model="snackbar.visible"
  >
    {{ snackbar.text }} connected!
    <v-btn flat color="pink" @click.native="snackbar.visible = true">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: {
        visible: false,
        text: '',
      },
    }
  },

  mounted() {
    this.$socket.on('user-connected', socketId => {
      this.snackbar.text = socketId
      this.snackbar.visible = true
    })
  },
}
</script>
