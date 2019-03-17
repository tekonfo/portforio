<template>
  <div id="app">
    <!-- ここにHeader入れたい -->
    <Header></Header>
    <!-- ここにパスと一致したコンポーネントが埋め込まれる -->
    <router-view />
  </div>
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
