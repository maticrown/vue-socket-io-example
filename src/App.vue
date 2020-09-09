<template>
  <v-app id="app">
    <SocketNotification />
    <NudgeNotification />
    <router-view />
  </v-app>
</template>

<script>
import SocketNotification from '@/components/SocketNotification'
import NudgeNotification from '@/components/NudgeNotification'
import Phy from '@/components/Phy'

export default {
  components: {
    SocketNotification,
    NudgeNotification,
    Phy,
  },
}
</script>
