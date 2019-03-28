<template>
  <div>
    <v-card
      class="mt-5"
    >
      <v-img
        class="white--text"
        height="300px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline">Welcome!</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <v-card-title>
        <div>
          <span>このサイトは近藤大翔のポートフォリオサイトです！</span><br>
          <span>是非色々みていってください！</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>

    <v-container
      class="pa-0 mt-5"
    >
      <v-layout row>
        <v-flex xs4>
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          ></v-img>
        </v-flex>
        <v-flex xs8
          class="ml-2 mr-0"
        >
          <v-card
            color="blue-grey darken-2"
            class="white--text"
            height="250"
          >
            <v-card-title primary-title>
              <div>
                <div class="headline">自己紹介</div>
              </div>
            </v-card-title>
            <v-card-text>
              <span>学生エンジニアとして活動している近藤大翔です</span>
            </v-card-text>
            <v-card-actions>
              <v-btn to="About" flat dark>もっと知る</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="pr-0 pl-0 pt-4 mt-5">
      <v-layout row>
        <v-flex
          v-for="(item, i) in items"
          :key="i"
          xs4
          class="pr-2 pl-2"
        >
        <v-card>
          <v-img
            src="https://demo.templateflip.com/material-portfolio/img/portfolio1.jpg"
            aspect-ratio="2.75"
            height="250"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ item.title }}</h3>
              <div> {{ item.detail }} </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div
      class="pt-3 pr-2 pl-2 mb-5"
    >
      <v-btn block color="deep-purple lighten-2" dark to="Portforio">もっと見る</v-btn>
    </div>



  </div>
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
            image_url: require("../assets/Read.png"),
            link: "https://tekondo.com/",
            to: "#"
          }
        ]
      }
    }
  }
</script>
