<template>
  <v-container grid-list-xl text-xs-center class="pa-0">
  <v-flex xs12>
    <v-card color="black" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">技術：スキル</div>
        </div>
      </v-card-title>
      <v-divider light></v-divider>
      <v-card-actions class="pa-3">
        <v-expansion-panel
          v-model="panel"
          expand
        >
          <v-expansion-panel-content
            v-for="(skill, i) in skills"
            :key="i"
          >
            <template v-slot:header>
              <v-container grid-list-xs text-xs-center class="pa-0">
              <v-layout
              >
                <div class="flex xs5">
                  <h5 class="subheading">{{ skill.name }}</h5>
                </div>
                <div class="flex xs7">
                   <v-rating
                    v-model="skill.rating"
                    full-icon="lens"
                    emptyIcon='lens'
                    background-color="bule"
                    color="indigo"
                    readonly
                    small
                    >
                  </v-rating>
                </div>
              </v-layout>
              </v-container>
            </template>
            <v-card>
              <v-card-text class="grey lighten-3">
                {{ skill.text }}
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
</v-container>
</template>


<script>
  export default {
    data () {
      return {
        skills: [
          {
            name: "RubyOnRails",
            rating: 5,
            text: "一番自身のある技術です。\n\n使用経歴：TECH::CAMPメンター、チームラボインターン、自作オリアプWillPower"
          },
          {
            name: "Docker",
            rating: 4.5,
            text: "長期インターンで基盤技術として採用されているので使っています。"
          },
          {
            name: "AWS",
            rating: 4,
            text: "長期インターンで使用しています。サービスとしてはEC2, Lmabda, ECS, ,SQS ,CloudWatchなど色々触らせてもらっています"
          },
          {
            name: "Html css",
            rating: 4,
            text: "Railsを触る課程で色々弄ってきていました。CSSフレームワークはMaterialize.cssを使ったことがあります。"
          },
          {
            name: "Vue.js",
            rating: 3,
            text: "このポートフォリオサイトをVue,jsで作成しています。使用経歴的には短いですがこれから継続して学習していく予定です"
          }
        ],
        items: [
          ["名前","近藤大翔"],
          ["所属","大阪大学情報科学科三回生計算機科学コース"],
          ["趣味","読書 カラオケ 習慣形成"],
          ["最良の書", "幸福論：アラン"]
        ],
        panel: []
      }
    },
    methods: {
     all () {
       this.panel = [...Array(this.items.count).keys()].map(_ => true)
       // [...] はSpread operator（スプレッドオペレータ）というらしい
       // なんでエラーになるんだろ
       this.panel = [true, true, true, true, true]
     },
     // Reset the panel
     none () {
       this.panel = []
     }
   }
  }
</script>
