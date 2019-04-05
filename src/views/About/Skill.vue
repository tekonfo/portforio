<template>
  <v-container grid-list-xl text-xs-center class="pa-0">
  <v-flex xs12>
    <v-card color="indigo darken-3" class="white--text">
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
              <v-card-text class="grey lighten-3" style="white-space:pre-line;">
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
            name: "Ruby, RubyOnRails",
            rating: 5,
            text:
            `一番自信のある技術です.
            はじめてWebサイトを構築したフレームワークでもあり、愛着があります。
            もう何回 rails s 打ち込んだのかわかりません。
            とにかく多くのGem, ActiveRecord等の標準ライブラリの使いやすさ
            といった点で他言語のフレームワーク優位性があり、アイデアをストレスなく形にできる点が大好きです。

            使用歴: 一年半
            使用経歴: TECH::CAMPメンター、チームラボインターン、自作オリアプ
            `
          },
          {
            name: "Docker",
            rating: 4,
            text:
            `長期インターンで基盤技術として採用されています。
            マイクロサービス化が進んでいるため相性のいいコンテナ技術注目されている時代の流れもあり自分で学習も進めていました。
            code as a infrastructureと呼ばれる考え方の通りコードとしてインフラを管理できる点、誰が動かしても同一の環境を手に入れられる点が素晴らしいと思います。

            使用歴: 約一年
            使用経歴: NOVASTOインターン, CyberAgent:kubernetesインターン
            `
          },
          {
            name: "AWS",
            rating: 4,
            text:
            `
            EC2, Lmabda, ECS, SQS ,CloudWatch, Cognitoなど色々触っています。
            開発のインターンで色々なことを頼まれるので手探りで色々触っていたら結構な数になりました。
            I AM 等の概念は変わらないので新しいサービスを使うことになってもある程度は応用が効くかなと思っています。

            使用歴: 約一年
            使用経歴: NOVASTOインターン
            `
          },
          {
            name: "Vue.js, Nuxt.js",
            rating: 3,
            text:
            `
            きっかけはイケイケなモダンjavascriptフレームワークを使いたくて本で勉強開始しました。
            考え方、文法も比較的簡単で独学でも大きく詰まらずに進めることができました。
            Vueの良さはJqueryで既に書かれているアプリでも段階的に置き換えることができる点です。
            WillPowerと言うアプリも初めはJqueryで作成していたのですがVueに置き換えて行きました。
            インターン先でもNuxt.jsでフロントが書かれているので継続的に勉強していく予定です。
            あとこのサイトはvue,vuetifyで作成しています

            使用歴: 半年
            使用経歴: このサイト, NOVASTOインターン
            `
          },
          {
            name: "Golang",
            rating: 1,
            text:
            `
            見せられるものがなくてお恥ずかしいのですがちょこちょこ勉強しています。
            `
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
