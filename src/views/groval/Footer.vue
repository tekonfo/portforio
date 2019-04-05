
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
      <v-card-text

      >
        <a
          v-for="link in links"
          :key="link.icon"
          v-bind:href="link.url"
          style="text-decoration: none;"
        >
          <v-btn
            class="mx-3 white--text"
            icon
          >
            <v-icon size="24px">{{ link.icon }}</v-icon>
          </v-btn>
        </a>
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
      links: [
        {
          icon: 'fab fa-twitter',
          url: 'https://twitter.com/9CbdWoo9HBlJgIx'
        },
        {
          icon: 'fab fa-github',
          url: 'https://github.com/tekonfo'
        }
      ]
    })
  }
</script>
