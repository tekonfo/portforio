<template >
  <div
    class="pb-5"
  >
    <v-toolbar color="indigo lighten-1 white--text">
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop=handleClick()
      >
      </v-toolbar-side-icon>
      <v-toolbar-title>近藤大翔のPortforio!</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat class="white--text">Home</v-btn>
        <v-btn to="/about" flat class="white--text">About</v-btn>
        <v-btn to="/portforio" flat class="white--text">Portforio</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <Sidebar ref="child"></Sidebar>
  </div>
</template>

<style>

</style>

<script>
  import Sidebar from '@/views/groval/Sidebar.vue';
  export default {
    data () {
      return {

      }
    },
    methods: {
      handleClick: function () {
        // 子コンポーネントのイベントを発火
        this.$refs.child.open()
      }
    },
    components: {
      Sidebar
    }
  }
</script>
