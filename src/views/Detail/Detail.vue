
<template>
  <div>
    <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ items[id].title }}</h3>
      </div>
    </v-card-title>
     <v-img
       v-bind:src="items[id].image_url"
       aspect-ratio="1.77"
     ></v-img>
     <v-container pl-0 pr-0>
       <v-layout row wrap>
         <v-flex
          offset-xs1
          xs11
        >
           <v-card-text>
            <h3 class="headline mb-0 font-weight-medium">WHAT</h3>
            <div
              class="pl-3 font-weight-thin"
            >
              <v-container pl-0 pr-0 pt-2>
                <v-layout row wrap>
                  <v-flex xs8 style="white-space:pre-line;">{{  items[id].what }}</v-flex>
                  <v-flex xs4>
                  </v-flex>
                </v-layout>
               </v-container>
             </div>
             <h3 class="headline mb-0 font-weight-medium">WHY</h3>
             <div
               class="pl-3 font-weight-thin"
             >
               <v-container pl-0 pr-0 pt-2>
                 <v-layout row wrap>
                   <v-flex
                     xs8
                     style="white-space:pre-line;"
                   >{{  items[id].why }}
                   </v-flex>
                   <v-flex xs4>
                   </v-flex>
                 </v-layout>
                </v-container>
              </div>
            <h3 class="headline mb-0 font-weight-medium">Tips</h3>
            <div
              class="pl-3 font-weight-thin"
            >
              <v-container pl-0 pr-0 pt-2>
                <v-layout
                  row
                  wrap
                  v-for="(tip, i) in items[id].tips"
                  :key="i"
                  pb-4
                >
                  <v-flex xs2>
                    <v-card
                      dark
                      width="100%"
                      height="100%"
                    >
                      <v-card-text
                        class="headline text-xs-center"
                      >
                        {{ add1(i) }}
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs10>
                    <v-card
                      color="#26c6da"
                      dark
                      width="100%"
                    >
                      <v-card-text class="headline">
                        {{ tip }}
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
               </v-container>
             </div>
          </v-card-text>
         </v-flex>
       </v-layout>
     </v-container>
      <v-layout row wrap pb-4>
        <v-flex
          v-for="(image, n) in items[id].images"
          :key="n"
          xs12
          pb-4
        >
          <v-card flat tile>
            <v-img
              :src="image"
            ></v-img>
          </v-card>
        </v-flex>
      </v-layout>
      <div class="text-xs-center pb-5 ">
        <a v-bind:href=items[id].link style="text-decoration: none;">
          <v-btn color="primary" large>アプリを開く</v-btn>
        </a>
      </div>
   </v-card>
  </div>
</template>


<script>
  export default {
    props: {
      id: Number
    },
    methods: {
      add1: function(id) {
        return id + 1
      }
    },
    data: () => ({
      items: [
        {
          title: "WillPower",
          detail: "意志力形成のためのアプリ",
          image_url: require("../../assets/WillPower.png"),
          images: [
            require("../../assets/willpower1.png"),
            require("../../assets/willpower2.png"),
            require("../../assets/willpower3.png")
          ],
          link: "https://limitless-wave-46311.herokuapp.com",
          why:
          `
          読書ブログを作成するほど読書することが好きです。
          特にスキルアップ系のハウツー本が大好きでとにかく読み漁っていました。
          次第にただ読むだけではなんの意味もないことに気づき、読んだ知識を理解し自分のものにするために習慣化することを覚えました。
          より高いアウトプットを目指して行ったのは習慣形成グループの作成です。
          友達を何人か誘いTrelloを用いて習慣形成をしていくグループを作成しました。
          この活動がすごく効果があり、色々な習慣を挫折することなく自分のものにすることができました。
          そこから

          １： 習慣形成は人と行うとより挫折しずらく、効果も高いものになる
          ２： 同じような習慣を持つ人がいることでポイントを理解できる

          といった効果があることがわかりました。その時の経験を元にして作られているのがWillPowerです。
          上記のポイントを押さえて、習慣化を促し、より高いアウトプットを実現するためのアプリケーションとなっています。
          `,
          what:
          `毎日早起きして無限の時間を手に入れたい、、、
          瞑想しまくって無限の集中力を手に入れたい、、、
          けれど三日坊主で終わってしまう人はいませんか
          このアプリはそんなあなたの習慣形成を助けるアプリです。
          このアプリは習慣を一つのカードとして管理することができます。
          このアプリのもう一つのポイントとして他の人と繋がることができます。
          タスク名で検索して同じ習慣に取り組んでいる人と繋がり、一緒に理想の生活を手に入れましょう！！！`,
          to: "#",
          tips: [
                  "簡単に習慣を一枚のカードとして作成することができます",
                  "チェックリストがあり、一日単位で振り返ることができます",
                  "検索機能で同じ習慣に取り組んでいる人と繋がれます"
                ]
        },
        {
          title: "Portforio",
          detail: "このサイト",
          image_url: require("../../assets/Portforio.png"),
          link: "#",
          why:
          `
          自分の技術力であったり、これまでの経験を余すところなく知ってもらうために作成しました。
          プロダクトもただ作るだけで他の人に使ってもらわなければ意味がないのと同じように
          自分の技術力も評価してもらうためには黙っていてはダメで、しっかりと伝えないとダメだなーと思ったのがきっかけです。
          このサイトがどんどん濃いものになっていくように技術力向上に勤しんで行きます！
          技術としてはちょっと触っていたVueとフレームワークで知ってたVuetifyを利用しました。
          楽しいですね、Vue
          `,
          what:
          `
          AllVueで作られたポートフォリオサイトです。
          今まで作ったアプリとかの紹介はもちろん、スキルセットやこれまでの経験とかを載せてます（見たらわかりますね）
          意識した点は自分のことをより深く知ってもらうことです。
          名言とかで奮い立つタイプなのでサイトトップには大好きな名言を表示させるようにしました。
          ポートフォリオの説明も技術やポイントの説明だけでなく、なんで作ったのか、どういったところを意識して作ったのかを書くようにしています。
          `,
          tips: [
                  "SPAで作られています",
                  "transitionでアニメーションが用いられています",
                  "レスポンシブデザインです",
                ]
        },
        {
          title: "読即動",
          detail: "読書ブログ、Wordpressで作成",
          image_url: require("../../assets/Read.png"),
          link: "https://tekondo.com/",
          why:
          `
          もともと本が大好きでした。
          本はいろんな人の経験、出来事を場所や時間軸関係なしに追体験することができます。
          図書館とかいくとワクワクがとまりません。
          さらに自分を磨いていく感覚が好きで、ハウツー系の本を読み漁ったりもしていました。
          しかし本を読むだけではその知識が自分のものになっていないということに気づきました。
          それから始めたのが読書ブログです。
          ブログタイトルである読即動の意味は本を読んだだけで終わりにしてしまうのではなく、その知識を自分のものにするために
          しっかりとアクションを起こしていくことが大事だということを伝えています。
          これからも本と上手に付き合っていって理想の自分になれるよう努力していきます。
          
          `,
          what:
          `
          読書ブログです。
          ポートフォリオに載せるか考えたのですが、載せておきます。
          ハウツー系、自己啓発、スキルアップの本を色々読んでます。
          それらの本の書評や、本から得た知識をどうやって使うのかについて書いています。
          結構記事書いていて１００記事はあります。
          `,
          tips: [
                  "皆さんの知りたい本の内容がいろいろ書かれてます",
                ]
        }
      ]
    })
  }
</script>
