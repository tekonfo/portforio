<template>
  <v-card>
    <v-img
      v-bind:src="image_url"
      aspect-ratio="2.75"
      height="250"
    ></v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ title }}</h3>
        <div>{{ detail }}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="orange" v-bind:href="'#/portforio/' + id">詳細</v-btn>
      <v-btn v-bind:href=link flat color="orange">リンク</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['title', 'detail', 'link', 'id', 'image_url'],
    method: {
      decorate_link(id){
        return "portfolio/" + id
      }
    },
    data() {
      return {
      }
    }
  }
</script>
