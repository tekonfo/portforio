<template >
  <v-navigation-drawer
     v-model="drawer"
     absolute
     temporary
   >
     <v-list class="pa-1">
       <v-list-tile avatar>
         <!-- <v-list-tile-avatar>
           <img src="https://randomuser.me/api/portraits/men/85.jpg">
         </v-list-tile-avatar> -->
         <v-list-tile-content>
           <v-list-tile-title>近藤 大翔</v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>
     </v-list>

     <v-list class="pt-0" dense>
       <v-divider></v-divider>

       <v-list-tile
         v-for="item in items"
         :key="item.title"
         @click=""
       >
         <v-list-tile-action>
           <v-icon>{{ item.icon }}</v-icon>
         </v-list-tile-action>

         <v-list-tile-content>
           <v-list-tile-title>{{ item.title }}</v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>
     </v-list>
   </v-navigation-drawer>
</template>

<style>
</style>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'HOME', icon: 'dashboard' },
          { title: 'PORTFORIO', icon: 'dashboard' },
          { title: 'ABOUT', icon: 'dashboard' },
          { title: 'CONTACT', icon: 'question_answer' }
        ],
        right: null
      }
    },
    methods: {
      open: function(){
        this.drawer = !this.drawer;
      }
    }
  }
</script>
