<template>
  <v-container
    fluid
    grid-list-lg
  >
    <v-layout row wrap >
      <v-flex xs12 sm6
      v-for="(item, i) in items"
      :key="i"
      >
        <Work
          v-bind:title="item.title"
          v-bind:detail="item.detail"
          v-bind:link="item.link"
          v-bind:id="item.id"
          v-bind:image_url="item.image_url"
        >
        </Work>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Work from "@/views/Templates/Work.vue";
  export default {
    components: {
      Work
    },
    data () {
      return {
        items: [
          {
            title: "WillPower",
            detail: "意志力形成のためのアプリ、Railsで作成",
            image_url: require("../assets/WillPower.png"),
            link: "https://limitless-wave-46311.herokuapp.com",
            id: 0
          },
          {
            title: "Portforio",
            detail: "このサイト、Vue.jsで作成",
            image_url: require("../assets/Portforio.png"),
            link: "#",
            id: 1
          },
          {
            title: "読即動",
            detail: "読書ブログ、Wordpressで作成",
            image_url: require("../assets/Read.png"),
            link: "https://tekondo.com/",
            id: 2
          }
        ]
      }
    }
  }
</script>
