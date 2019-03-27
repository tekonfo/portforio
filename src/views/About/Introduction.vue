<template>
  <v-flex xs12>
    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">自己紹介</div>
          <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-expansion-panel
          v-model="panel"
          expand
        >
          <v-expansion-panel-content
            v-for="(item, i) in items"
            :key="i"
          >
            <template v-slot:header>
              <div>{{ item[0] }}</div>
            </template>
            <v-card>
              <v-card-text class="grey lighten-3">
                {{ item[1] }}
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-card-actions>
      <div class="d-flex justify-between align-center mb-3">
        <v-btn @click="all">all</v-btn>
        <v-btn @click="none">none</v-btn>
      </div>
    </v-card>
  </v-flex>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          ["名前","近藤大翔"],
          ["所属","大阪大学情報科学科三回生計算機科学コース"],
          ["趣味","読書 カラオケ 習慣形成"],
          ["最良の書", "幸福論：アラン"]
        ],
        panel: [true, true, true, true]
      }
    },
    methods: {
     all () {
       this.panel = [...Array(this.items.count).keys()].map(_ => true)
       // [...] はSpread operator（スプレッドオペレータ）というらしい
       // なんでエラーになるんだろ
       this.panel = [true, true, true, true]
     },
     // Reset the panel
     none () {
       this.panel = []
     }
   }
  }
</script>
