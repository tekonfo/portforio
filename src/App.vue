<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/product">商品情報</router-link>
    </nav>
    <!-- ここにパスと一致したコンポーネントが埋め込まれる -->
    <router-view />
    <div class="text-xs-center">
      <v-badge left>
        <template v-slot:badge>
          <span>6</span>
        </template>
        <v-icon
          large
          color="grey lighten-1"
        >
          shopping_cart
        </v-icon>
      </v-badge>

      <v-badge color="red">
        <template v-slot:badge>
          <span>!</span>
        </template>
        <v-icon
          large
          color="grey"
        >
          mail
        </v-icon>
      </v-badge>
    </div>

  </div>
</template>


<style>
/* ナビゲーション */
nav {
    display: flex;
    align-items: center;
    background: #222;
}
nav a {
    display: block;
    padding: 0.5em;
    color: #eee;
    line-height: 1em;
    text-decoration: none;
}
/* アクティブなリンク */
.router-link-active {
    background: palevioletred;
}
</style>
