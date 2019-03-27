<template>
  <v-card
    class="mt-3"
  >
    <v-container
      fluid
      grid-list-lg
    >
      <v-layout row wrap>

        <Introduction></Introduction>

        <!-- <Dream></Dream> -->

        <Skill></Skill>

        <Experience></Experience>

      </v-layout>
    </v-container>
  </v-card>
</template>


<script>
  import Introduction from '@/views/About/Introduction.vue';
  import Skill from '@/views/About/Skill.vue';
  import Dream from '@/views/About/Dream.vue';
  import Experience from '@/views/About/Experience.vue';

  export default {
    data () {
      return {

      }
    },
    methods: {

    },
    components: {
      Introduction,
      Skill,
      Dream,
      Experience
    }
  }
</script>
