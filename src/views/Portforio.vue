<template>
  <v-card
    class="mt-3"
    color="blue-grey lighten-3"
  >
    <v-container
      fluid
      grid-list-lg
    >
      <v-layout row wrap >
        <v-flex xs12 sm6
        v-for="(item, i) in items"
        :key="i"
        >
          <v-card>
            <v-img
              v-bind:src=item.image_url
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ item.title }}</h3>
                <div> {{ item.detail }} </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn to=item.to flat color="orange">詳細</v-btn>
              <!-- ここaタグ使わないといけないんかなぁ -->
              <a v-bind:href=item.link style="text-decoration: none;
">
                <v-btn
                flat color="orange">
                  リンク
                </v-btn>
              </a>

            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            title: "WillPower",
            detail: "意志力形成のためのアプリ、Railsで作成",
            image_url: require("../assets/WillPower.png"),
            link: "https://limitless-wave-46311.herokuapp.com",
            to: "#"
          },
          {
            title: "Portforio",
            detail: "このサイト、Vue.jsで作成",
            image_url: require("../assets/Portforio.png"),
            link: "#",
            to: "#"
          },
          {
            title: "読即動",
            detail: "読書ブログ、Wordpressで作成",
            image_url: require("../assets/読即動.png"),
            link: "https://tekondo.com/",
            to: "#"
          }
        ]
      }
    }
  }
</script>
