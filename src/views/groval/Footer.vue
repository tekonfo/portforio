
<template>
  <v-footer
    dark
    height="auto"
    class="mt-5"
  >
    <v-card
      flat
      tile
      width="100%"
      class="indigo lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>Portforio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-twitter',
        'fab fa-github'
      ]
    })
  }
</script>
