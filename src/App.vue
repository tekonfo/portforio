<template>
  <v-app>
    <div id="app">
      <!-- ここにHeader入れたい -->
      <Header></Header>
      <!-- ここにパスと一致したコンポーネントが埋め込まれる -->
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <router-view />
        </v-flex>
      </v-layout>
      <!-- to="/contact" これを追加してしまうと位置がバグる-->
      <v-btn
        absolute
        fixed
        dark
        fab
        bottom
        right
        color="pink"
        class="mb-5 mr-5"
      >
        <v-icon>email</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>


<style>
/* ナビゲーション */
/* アクティブなリンク */
</style>

<script>
  import Header from "@/views/groval/Header.vue";
  export default {
    components: {
      Header
    }
  }
</script>
